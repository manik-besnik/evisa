<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property string $nationality
 */
class Country extends Model
{
    protected $table = 'countries';

    protected $fillable = [
        'name',
        'nationality'
    ];
}
