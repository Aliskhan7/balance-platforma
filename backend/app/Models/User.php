<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    public const LEVEL_TYPE_LOW = 'LOW';
    public const LEVEL_TYPE_MEDIUM = 'MEDIUM';
    public const LEVEL_TYPE_HIGH = 'HIGHT';
    public const LEVEL_TYPE_EXPERT = 'EXPERT';

    public static array $level_types = [
        self::LEVEL_TYPE_LOW => 'Начинающий',
        self::LEVEL_TYPE_MEDIUM => 'Средний',
        self::LEVEL_TYPE_HIGH => 'Продвинутый',
        self::LEVEL_TYPE_EXPERT => 'Эксперт',
    ];
}
