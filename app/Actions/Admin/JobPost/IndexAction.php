<?php

namespace App\Actions\Admin\JobPost;

use App\Models\JobPost;
use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        $jobPosts = JobPost::query()->paginate(20);

        return Inertia::render('Admin/JobPost/Index', [
            'job_posts' => $jobPosts
        ]);
    }
}
