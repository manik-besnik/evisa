<?php

namespace App\Supports;

use App\Models\JobApply;
class JobApplyList
{
    public static function execute(): \Illuminate\Database\Eloquent\Collection
    {
        return JobApply::query()
            ->with(['jobPost:id,title,company,location,salary_range,'])
            ->where('user_id', auth()
                ->id())->get();
    }
}
