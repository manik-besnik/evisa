<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * @property int $id
 * @property int $type
 * @property string $title
 * @property string|null $company
 * @property string|null $thumbnail
 * @property string $salary_range
 * @property string|null $location
 * @property string|null $description
 * @property string|null $last_apply_date
 */
class JobPost extends Model
{
    protected $table = 'job_posts';

    protected $fillable = [
        'type',
        'thumbnail',
        'title',
        'company',
        'salary_range',
        'location',
        'description',
        'last_apply_date',
    ];
}
