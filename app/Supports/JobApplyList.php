<?php

namespace App\Supports;

use App\Models\JobApply;

class JobApplyList
{
    public static function execute(): \Illuminate\Database\Eloquent\Collection
    {
        return JobApply::query()
            ->with([
                'jobDemand:id,type_of_work,company_id,location_id,job_location,salary',
                'jobDemand.company:id,name',
                'jobDemand.location:id,name'
            ])
            ->where('user_id', auth()->id())
            ->get();

    }
}
