<?php

namespace App\Actions\Admin\JobDemand;

use App\Enums\Permissions;
use App\Models\JobApply;
use App\Models\JobDemand;
use App\Supports\UserPermission;
use Inertia\Inertia;

class JobDemandApplicationAction
{
    public function execute(): \Inertia\Response
    {
        UserPermission::isPermitted(Permissions::VIEW_SINGLE_JOB_POST->value);

        $applications = JobApply::query()->with(['jobDemand:id,type_of_work'])->paginate(20);

        return Inertia::render('Admin/JobDemand/JobDemandApplications', [
            'job_applies' => $applications
        ]);
    }
}
