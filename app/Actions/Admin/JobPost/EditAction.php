<?php

namespace App\Actions\Admin\JobPost;

use App\Models\JobPost;
use Inertia\Inertia;

class EditAction
{
    public function execute(int $id): \Inertia\Response
    {
        $jobPost = JobPost::query()->findOrFail($id);

        return Inertia::render('Admin/JobPost/EditJobPost', ['job_post' => $jobPost]);
    }
}
