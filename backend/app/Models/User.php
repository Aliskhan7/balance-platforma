<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticate;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class User extends Authenticate
{
    use HasFactory, HasApiTokens;

    public const LEVEL_TYPE_LOW = 'LOW';
    public const LEVEL_TYPE_MEDIUM = 'MEDIUM';
    public const LEVEL_TYPE_HIGH = 'HIGH';
    public const LEVEL_TYPE_EXPERT = 'EXPERT';

    const TABLE = 'users';

    /**
     * types of user experience level
     * @var array $level_types
     */
    public static array $level_types = [
        self::LEVEL_TYPE_LOW => 'Начинающий',
        self::LEVEL_TYPE_MEDIUM => 'Средний',
        self::LEVEL_TYPE_HIGH => 'Продвинутый',
        self::LEVEL_TYPE_EXPERT => 'Эксперт',
    ];

    /**
     * return advance data of user
     * @return HasOne
     */
    public function advance(): HasOne
    {
        return $this->hasOne(Advance::class);
    }

    /**
     * return level data of user
     * @return HasOne
     */
    public function level(): HasOne
    {
        return $this->hasOne(UserLevel::class);
    }

    /**
     * return achievements of user
     * @return BelongsToMany
     */
    public function achievements(): BelongsToMany
    {
        return $this->belongsToMany(Achievement::class);
    }
}
