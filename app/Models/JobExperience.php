<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * @property int $id
 * @property int $user_id
 * @property int $country_id
 * @property int $job_apply_id
 * @property string $position
 * @property string $duration
 * @property string $company
 */
class JobExperience extends Model
{
    protected $table = 'job_experiences';

    protected $fillable = [
        'user_id',
        'country_id',
        'job_apply_id',
        'position',
        'duration',
        'company',
    ];

}
