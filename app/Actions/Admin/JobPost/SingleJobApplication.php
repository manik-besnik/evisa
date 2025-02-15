<?php

namespace App\Actions\Admin\JobPost;

use App\Models\JobApply;
use App\Models\JobExperience;
use Inertia\Inertia;

class SingleJobApplication
{
    public function execute(int $id): \Inertia\Response
    {
        $jobApply = JobApply::query()
            ->with(['education.language'])
            ->findOrFail($id);

        $experiences = JobExperience::query()
            ->with(['country:id,name'])
            ->where('user_id', $jobApply->user_id)
            ->get();

        return Inertia::render('Admin/JobPost/JobApplicationShow', [
            'job_apply' => $jobApply,
            'experiences' => $experiences
        ]);
    }
}
