<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();

            // Relasi ke users
            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();

            // Relasi ke categories (nullable)
            $table->foreignId('category_id')
                ->nullable()
                ->constrained('categories')
                ->nullOnDelete();

            // Jenis transaksi
            $table->enum('type', ['income', 'expense']);

            // Jumlah (tidak negatif)
            $table->unsignedDecimal('amount', 12, 2);

            // Deskripsi
            $table->text('description')->nullable();

            // Tanggal transaksi — default hari ini (untuk MySQL)
            $table->date('transaction_date')->default(DB::raw('CURRENT_DATE'));

            $table->timestamps();

            // (Opsional) CHECK constraint kalau DB mendukung
            // $table->check('amount >= 0');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
