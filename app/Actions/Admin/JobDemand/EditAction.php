<?php

namespace App\Actions\Admin\JobDemand;

use App\Enums\Permissions;
use App\Models\JobDemand;
use App\Models\Location;
use App\Supports\UserPermission;
use Inertia\Inertia;

class EditAction
{
    public function execute(int $id): \Inertia\Response
    {
        UserPermission::isPermitted(Permissions::EDIT_JOB_POST->value);

        $jobPost = JobDemand::query()->with(['company'])->findOrFail($id);

        return Inertia::render('Admin/JobDemand/Edit', [
            'job_demand' => $jobPost,
            'locations' => Location::query()->select(['id', 'name'])->get(),
        ]);
    }
}
