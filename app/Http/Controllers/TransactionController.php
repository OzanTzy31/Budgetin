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
        return inertia();
    }

    public function update (Request $request, Transaction $transaction) 
    {

    }

    public function destroy($id)
    {
        $transaction = Transaction::where("id", "=", $id)
            ->where('id', $id)
            ->first();
        $transaction->delete();
    }
}
