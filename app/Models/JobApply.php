<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * @property int $id
 * @property int $user_id
 * @property int $job_post_id
 * @property int $education_id
 * @property string $name
 * @property string $phone
 * @property string $email
 * @property string $shirt_size
 * @property string $pant_size
 * @property string $show_size
 * @property string $weight
 * @property string $height
 * @property string $nearest_airport
 * @property array|string $documents
 * @property string $summary
 */
class JobApply extends Model
{
    protected $table = 'job_applies';

    protected $fillable = [
        'user_id',
        'job_post_id',
        'education_id',
        'name',
        'phone',
        'email',
        'shirt_size',
        'pant_size',
        'show_size',
        'weight',
        'height',
        'nearest_airport',
        'documents',
        'summary',
    ];

    protected $casts = [
        'documents' => 'array'
    ];
}
