<?php

namespace App\Actions\Admin\JobDemand;

use App\Enums\Permissions;
use App\Models\JobPost;
use App\Supports\UserPermission;
use Inertia\Inertia;

class EditAction
{
    public function execute(int $id): \Inertia\Response
    {
        UserPermission::isPermitted(Permissions::EDIT_JOB_POST->value);

        $jobPost = JobPost::query()->findOrFail($id);

        return Inertia::render('Admin/JobPost/EditJobPost', ['job_post' => $jobPost]);
    }
}
