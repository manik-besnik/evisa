<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * @property int $id
 * @property int $type
 * @property string $title
 * @property string|null $job_role
 * @property string|null $thumbnail
 * @property string $salary_range
 * @property string|null $location
 * @property string|null $description
 */
class JobPost extends Model
{
    protected $table = 'job_posts';

    protected $fillable = [
        'type',
        'thumbnail',
        'title',
        'job_role',
        'salary_range',
        'location',
        'description',
    ];
}
