<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::latest();
        return Inertia::render('dashboard', ['transactions' => $transactions]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category_id'      => ['nullable','exists:categories,id'],
            'type'             => ['required','in:income,expense'],
            'amount'           => ['required','numeric','min:0'],
            'description'      => ['nullable','string','max:65535'],
            'transaction_date' => ['nullable','date'],
        ]);

        $validated['user_id'] = $request->user()->id;
        $validated['transaction_date'] = $validated['transaction_date'] ?? now()->toDateString();

        Transaction::create($validated);

        return back()->with('success', 'Transaksi berhasil ditambahkan!');
    }

    public function edit (Transaction $transaction) 
    {
        return Inertia::render('edit', [
            'transactions' => [
                'id'              => $transaction->id,
                'category_id'     => $transaction->category_id,
                'type'            => $transaction->type,
                'amount'          => $transaction->amount,
                'description'     => $transaction->description,
                'transaction_date' => optional($transaction->transaction_date)->format('Y-m-d'),
            ],
        ]);
    }

    public function update (Request $request, Transaction $transaction) 
    {
        if ($transaction->user_id !== $request->user()->id) {
            abort(403);
        }

        $validated = $request->validate([
            'category_id'      => ['nullable','exists:categories,id'],
            'type'             => ['required','in:income,expense'],
            'amount'           => ['required','numeric','min:0'],
            'description'      => ['nullable','string','max:65535'],
            'transaction_date' => ['nullable','date'],
        ]);

        $validated['transaction_date'] = $validated['transaction_date'] ?? $transaction->transaction_date;

        $transaction->update($validated);

        return redirect()
            ->route('dashboard')
            ->with('success', 'Transaksi berhasil diperbarui!');
    }

    public function destroy($id)
    {
        $transaction = Transaction::where("id", "=", $id)
            ->where('id', $id)
            ->first();
        $transaction->delete();
    }
}