<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();

            // Relasi ke user (kategori milik user tertentu)
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();

            // Nama kategori (misal: Makan, Transport, Hiburan)
            $table->string('name');

            // Jenis kategori: income / expense
            $table->enum('type', ['income', 'expense']);

            // Warna opsional untuk keperluan grafik
            $table->string('color', 30)->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
