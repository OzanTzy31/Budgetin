<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'type',
        'color',
    ];

    /**
     * Relasi ke user (1 user punya banyak kategori)
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Relasi ke transaksi (1 kategori punya banyak transaksi)
     */
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    /**
     * Scope filter kategori per tipe (income / expense)
     */
    public function scopeType($query, $type)
    {
        return $query->where('type', $type);
    }

    /**
     * Scope kategori milik user tertentu
     */
    public function scopeForUser($query, $userId)
    {
        return $query->where('user_id', $userId);
    }

    /**
     * Default urutan nama kategori (A-Z)
     */
    protected static function booted()
    {
        static::addGlobalScope('alphabetical', function ($query) {
            $query->orderBy('name', 'asc');
        });
    }
}