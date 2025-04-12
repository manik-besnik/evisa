<?php

namespace App\Supports;

use App\Models\JobApply;

class JobApplyList
{
    public static function execute(): \Illuminate\Database\Eloquent\Collection
    {
        return JobApply::query()
            ->with([
                'jobDemand',
                'jobDemand.company:id,name',
                'jobDemand.location:id,name'
            ])
            ->where('user_id', auth()->id())
            ->get();

    }
}
