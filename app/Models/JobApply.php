<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;


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
 *
 * @mixin Model
 *
 * @property User|null $user
 * @property JobPost|null $jobPost
 * @property Education|null $education
 * @property Collection<int, JobExperience> $experiences
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


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function jobPost(): BelongsTo
    {
        return $this->belongsTo(JobPost::class);
    }

    public function education(): BelongsTo
    {
        return $this->belongsTo(Education::class);
    }

    public function experiences(): HasMany
    {
        return $this->hasMany(JobExperience::class);
    }
}
