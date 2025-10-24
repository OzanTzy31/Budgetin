<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    /**
     * Kolom yang boleh diisi mass-assignment.
     */
    protected $fillable = [
        'user_id',
        'category_id',
        'type',
        'amount',
        'description',
        'transaction_date',
    ];

    /**
     * Cast otomatis untuk kolom tanggal.
     */
    protected $casts = [
        'transaction_date' => 'date:d/m/Y',
    ];

    /**
     * Relasi ke model User
     * (Setiap transaksi dimiliki oleh 1 user)
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Relasi ke model Category
     * (Setiap transaksi bisa punya 1 kategori)
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Scope untuk filter berdasarkan tipe (income/expense)
     */
    public function scopeType($query, $type)
    {
        return $query->where('type', $type);
    }

    /**
     * Scope untuk filter berdasarkan rentang tanggal
     */
    public function scopeBetweenDates($query, $start, $end)
    {
        return $query->whereBetween('transaction_date', [$start, $end]);
    }

    /**
     * Default sorting terbaru.
     */
    protected static function booted()
    {
        static::addGlobalScope('latest', function ($query) {
            $query->orderByDesc('transaction_date');
        });
    }
}