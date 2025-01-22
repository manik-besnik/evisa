<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $user_id
 * @property int $visa_apply_id
 * @property int $nationality
 * @property string $name
 * @property string|null $passport_no
 * @property string|null $phone
 * @property string $relation
 */

class Guarantor extends Model
{
    protected $table = 'guarantors';

    protected $fillable = [
        'visa_apply_id',
        'user_id',
        'nationality',
        'name',
        'passport_no',
        'phone',
        'relation',
    ];
}
