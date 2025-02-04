<?php

namespace App\Actions\User\JobPost;

use App\Models\JobPost;
use Inertia\Inertia;

class ShowAction
{
    public function execute(int $id): \Inertia\Response
    {
        $jobPost = JobPost::query()->findOrFail($id);
        return Inertia::render('JobDetails', ['job_post' => $jobPost]);
    }
}
