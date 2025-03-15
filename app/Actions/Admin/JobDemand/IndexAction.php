<?php

namespace App\Actions\Admin\JobDemand;

use App\Enums\Permissions;
use App\Models\JobDemand;
use App\Supports\UserPermission;
use Inertia\Inertia;
use Inertia\Response;

class IndexAction
{
    public function execute(): Response
    {

        UserPermission::isPermitted(Permissions::VIEW_JOB_POST->value);

        $jobDemands = JobDemand::query()->with(['company'])->paginate(20);

        return Inertia::render('Admin/JobDemand/Index', [
            'job_demands' => $jobDemands
        ]);
    }
}
