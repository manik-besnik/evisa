<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobDemand extends Model
{
    protected $table = 'job_demands';

    protected $fillable = [
        'user_id',
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
        'company_name',
        'contact_person',
        'contact_no',
        'whatsapp_no',
        'email',
        'current_address',
        'city',
        'area'
    ];
}
