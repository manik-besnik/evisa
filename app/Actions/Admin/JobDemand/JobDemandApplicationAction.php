<?php

namespace App\Actions\Admin\JobDemand;

use App\Enums\Permissions;
use App\Models\JobDemand;
use App\Supports\UserPermission;
use Inertia\Inertia;

class JobDemandApplicationAction
{
    public function execute(): \Inertia\Response
    {
        UserPermission::isPermitted(Permissions::VIEW_SINGLE_JOB_POST->value);

        $applications = JobDemand::query()->paginate(20);

        return Inertia::render('Admin/JobDemand/JobDemandApplications', [
            'job_applies' => $applications
        ]);
    }
}
