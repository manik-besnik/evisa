<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * @property int $id
 * @property int $user_id
 * @property int $company_id
 * @property string $date
 * @property string $job_code
 * @property string $apply_from
 * @property string $type_of_work
 * @property string $visa_validity
 * @property string $salary
 * @property string $worker_quantity
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
 * @property string $note
 */

class JobDemand extends Model
{
    protected $table = 'job_demands';

    protected $fillable = [
        'user_id',
        'company_id',
        'date',
        'job_code',
        'apply_from',
        'type_of_work',
        'visa_validity',
        'salary',
        'worker_quantity',
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
        'note',
    ];
}
