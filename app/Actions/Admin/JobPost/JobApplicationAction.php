<?php

namespace App\Actions\Admin\JobPost;

use App\Enums\Permissions;
use App\Models\JobApply;
use App\Supports\UserPermission;
use Inertia\Inertia;

class JobApplicationAction
{
    public function execute(): \Inertia\Response
    {
        UserPermission::isPermitted(Permissions::VIEW_SINGLE_JOB_POST->value);

        $applications = JobApply::query()->paginate(20);

        return Inertia::render('Admin/JobPost/JobApplications', [
            'job_applies' => $applications
        ]);
    }
}
