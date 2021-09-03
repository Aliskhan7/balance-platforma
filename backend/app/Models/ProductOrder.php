<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ProductOrder extends Model
{
    use HasFactory;

    public const STATUS_QUEUE = 'QUEUE';
    public const STATUS_DONE = 'DONE';

    public static array $statuses = [
        self::STATUS_QUEUE => 'В очереди',
        self::STATUS_DONE => 'Готово',
    ];

    /**
     * return product of order
     * @return HasOne
     */
    public function product(): HasOne
    {
        return $this->hasOne(Product::class);
    }

    /**
     * return the user who ordered
     * @return HasOne
     */
    public function user(): HasOne
    {
        return $this->hasOne(User::class);
    }
}
