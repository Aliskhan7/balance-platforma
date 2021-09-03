<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public const TYPE_SUBSCRIPTION = 'SUBSCRIPTION';
    public const TYPE_GADGET = 'GADGET';

    public static array $types = [
        self::TYPE_SUBSCRIPTION => 'Подписка',
        self::TYPE_GADGET => 'Гаджеты',
    ];
}
