<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Task extends Model
{
    use HasFactory;

    const STATUS_IN_QUEUE = 'IN_QUEUE';
    const STATUS_IN_WORK = 'IN_WORK';

    const TYPE_REQUIRED = 'REQUIRED';
    const TYPE_SECONDARY = 'SECONDARY';

    public static array $statuses = [
        self::STATUS_IN_QUEUE => 'В очереди',
        self::STATUS_IN_WORK => 'В работе',
    ];

    public static array $types = [
      self::TYPE_REQUIRED => 'обязательный',
      self::TYPE_SECONDARY => 'второстепенный',
    ];

    public static function getQuery(): Builder
    {
        return self::select('*');
    }
}
