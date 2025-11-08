<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\DashboardController;

Route::get('/', [LandingPageController::class, 'index']);

Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::middleware('auth')->group(function () {
  Route::get('/dashboard', [DashboardController::class, 'transaction'])->name('dashboard');
  Route::post('/transactions', [TransactionController::class, 'store'])->name('transactions.store');
  Route::get('/transactions/{transaction}', [TransactionController::class, 'edit'])->name('transactions.edit');
  Route::resource('transactions', TransactionController::class)->only(['update', 'edit']);
  Route::delete('/transactions/{id}', [TransactionController::class, 'destroy'])->name('transactions.destroy');
});
