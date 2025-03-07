<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property string $name
 * @property string $nationality
 */
class Country extends Model
{
    use SoftDeletes;

    protected $table = 'countries';

    protected $fillable = [
        'name',
        'nationality'
    ];
}
