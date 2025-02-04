<?php

namespace App\Actions\User\JobPost;

use App\Models\JobPost;
use Inertia\Inertia;
use Inertia\Response;

class IndexAction
{
    public function execute(): Response
    {
        return Inertia::render('JobPost',[
            'job_posts' => JobPost::query()->whereDate('last_apply_date','>=', now()->format('Y-m-d'))->paginate(20)
        ]);
    }
}
