<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Advance extends Model
{
    use HasFactory;

    const TABLE = 'advances';

    protected $fillable = [
        'tokens_count',
        'overall_score',
        'today_score',
        'level_id',
    ];

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return HasOne
     */
    public function level():  HasOne
    {
        return $this->hasOne(Advance::class);
    }
}
