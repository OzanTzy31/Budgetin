<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Transaction;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function transaction(Request $request)
    {
        $userId = $request->user()->id;

        $orderExpr = "COALESCE(transaction_date, created_at)";
        
        $transaction = Transaction::where('user_id', $userId)
            ->orderByRaw("$orderExpr DESC")
            ->paginate(5)
            ->withQueryString();

        $dateCol = "COALESCE(transaction_date, created_at)";

        $start = now()->startOfMonth()->startOfDay();
        $end   = now()->endOfMonth()->endOfDay();

        $current = Transaction::where('user_id', $userId)
            ->whereRaw("$dateCol BETWEEN ? AND ?", [$start, $end]) // ← perbaikan utama
            ->selectRaw("SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS income")
            ->selectRaw("SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS expense")
            ->first();

        $monthly = DB::table('transactions')
            ->where('user_id', $userId)
            ->selectRaw("DATE_FORMAT($dateCol, '%Y-%m') AS ym")
            ->selectRaw("SUM(CASE WHEN type = 'income'  THEN amount ELSE 0 END) AS income")
            ->selectRaw("SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS expense")
            ->groupBy('ym')
            ->orderBy('ym', 'asc')
            ->get();

        return Inertia::render('dashboard', [
            'transactions' => $transaction,
            'summary' => [
                'current_month' => [
                    'key'     => now()->format('Y-m'),
                    'income'  => (float) ($current->income  ?? 0),
                    'expense' => (float) ($current->expense ?? 0),
                ],
                'by_month' => $monthly,
            ],
        ]);
    }
}