<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;


/**
 * @property int $id
 * @property int $user_id
 * @property int|null $job_demand_id
 * @property int $education_id
 * @property int $nationality
 * @property string $name
 * @property string $phone
 * @property string $email
 * @property string $shirt_size
 * @property string $pant_size
 * @property string $show_size
 * @property string $weight
 * @property string $height
 * @property string $nearest_airport
 * @property string $region
 * @property string $location
 * @property string|null $avatar
 * @property string|null $gender
 * @property string|null $religion
 * @property string|null $blood_group
 * @property string|null $marital_status
 * @property string|null $current_state
 * @property string|null $current_city
 * @property string|null $current_area
 * @property string|null $permanent_district
 * @property string|null $permanent_thana
 * @property string|null $permanent_village
 * @property string|null $passport_no
 * @property string|null $country_contact_no
 * @property string|null $visa_status
 * @property string|null $passport_expiry
 * @property string|null $visa_expiry
 * @property string|null $whatsapp_no
 * @property array|string $documents
 * @property array|string|null $job_posts
 * @property string|null $date_of_birth
 * @property string $summary
 *
 * @mixin Model
 *
 * @property User|null $user
 * @property JobPost|null $jobPost
 * @property JobDemand|null $jobDemand
 * @property Education|null $education
 * @property Collection<int, JobExperience> $experiences
 */
class JobApply extends Model
{
    protected $table = 'job_applies';

    protected $fillable = [
        'user_id',
        'job_demand_id',
        'education_id',
        'nationality',
        'name',
        'phone',
        'email',
        'shirt_size',
        'pant_size',
        'show_size',
        'weight',
        'height',
        'nearest_airport',
        'region',
        'avatar',
        'gender',
        'religion',
        'location',
        'marital_status',
        'current_state',
        'current_city',
        'current_area',
        'permanent_district',
        'permanent_thana',
        'permanent_village',
        'passport_no',
        'passport_expiry',
        'country_contact_no',
        'visa_status',
        'visa_expiry',
        'blood_group',
        'whatsapp_no',
        'documents',
        'job_posts',
        'summary',
        'date_of_birth',
    ];

    protected $casts = [
        'documents' => 'array',
        'job_posts' => 'array',
    ];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function jobPost(): BelongsTo
    {
        return $this->belongsTo(JobPost::class);
    }

    public function jobDemand(): BelongsTo
    {
        return $this->belongsTo(JobDemand::class);
    }

    public function education(): BelongsTo
    {
        return $this->belongsTo(Education::class);
    }


    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class, 'nationality','id');
    }



    public function experiences(): HasMany
    {
        return $this->hasMany(JobExperience::class, 'job_apply_id','id');
    }
}
