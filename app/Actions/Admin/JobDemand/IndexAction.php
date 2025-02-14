<?php

namespace App\Actions\Admin\JobPost;

use App\Enums\Permissions;
use App\Models\JobPost;
use App\Supports\UserPermission;
use Inertia\Inertia;
use Inertia\Response;

class IndexAction
{
    public function execute(): Response
    {

        UserPermission::isPermitted(Permissions::VIEW_JOB_POST->value);

        $jobPosts = JobPost::query()->paginate(20);

        return Inertia::render('Admin/JobPost/Index', [
            'job_posts' => $jobPosts
        ]);
    }
}
