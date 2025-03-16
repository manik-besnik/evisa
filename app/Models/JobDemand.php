<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Cache;


/**
 * @property int $id
 * @property int $user_id
 * @property int $company_id
 * @property int $location_id
 * @property string|null $job_location
 * @property string $date
 * @property string $job_code
 * @property string $apply_from
 * @property string $type_of_work
 * @property string $visa_validity
 * @property string $salary
 * @property string|int $worker_quantity
 * @property int $available_job
 * @property string $duty_hours
 * @property string $over_time
 * @property string $weekly_work
 * @property string $age_limit
 * @property string $qualifications
 * @property string $company_activities
 * @property string $food
 * @property string $accommodation
 * @property string $transport
 * @property string $yearly_ticket
 * @property string $holiday_benefits
 * @property string $education
 * @property string|null $thumbnail
 * @property string|null $note
 * @property string|null $requirements
 * @property string|null $medical_insurance
 * @property string|null $vacation_benefits
 * @property boolean|int $is_new
 * @property boolean|int $is_approved
 * @property boolean|int $is_on_demand
 *
 * @mixin Model
 * @property Company|null $company
 * @property User|null $user
 * @property Location|null $location
 */
class JobDemand extends Model
{
    protected $table = 'job_demands';


    protected $fillable = [
        'user_id',
        'company_id',
        'location_id',
        'date',
        'job_code',
        'apply_from',
        'type_of_work',
        'visa_validity',
        'salary',
        'worker_quantity',
        'available_job',
        'duty_hours',
        'over_time',
        'weekly_work',
        'age_limit',
        'qualifications',
        'company_activities',
        'food',
        'accommodation',
        'transport',
        'yearly_ticket',
        'holiday_benefits',
        'education',
        'thumbnail',
        'note',
        'requirements',
        'medical_insurance',
        'vacation_benefits',
        'is_approved',
        'is_new',
        'is_on_demand',
    ];

    protected $casts = [
        'is_approved' => 'boolean',
        'is_new' => 'boolean',
        'is_on_demand' => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    protected static function booted(): void
    {
        static::created(function () {
            self::deleteCache();
        });

        static::updated(function () {
            self::deleteCache();
        });

        static::deleted(function () {
            self::deleteCache();
        });

    }

    public static function deleteCache(): void
    {
        Cache::forget('on_demand_jobs');
        Cache::forget('new_on_demand');
        Cache::forget('location_job_demands');
    }
}
