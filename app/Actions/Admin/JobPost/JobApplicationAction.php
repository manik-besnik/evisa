<?php

namespace App\Actions\Admin\JobPost;

use App\Models\JobApply;
use Inertia\Inertia;

class JobApplicationAction
{
    public function execute(): \Inertia\Response
    {
        $applications  = JobApply::query()->paginate(20);

        return Inertia::render('Admin/JobPost/JobApplications',[
            'job_applies' => $applications
        ]);
    }
}
