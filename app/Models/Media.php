<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property string $url
 * @property string $type
 * @property int|float $size
 */
class Media extends Model
{
    protected $table = 'media';
    protected $fillable = [
        'user_id',
        'name',
        'url',
        'type',
        'size'
    ];
}
