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
            ->with(['education.language','experiences.country:id,name','country:id,nationality','jobDemand:id,type_of_work'])
            ->findOrFail($id);


        return Inertia::render('Admin/JobPost/JobApplicationShow', [
            'job_apply' => $jobApply,
            'experiences' => $jobApply->experiences
        ]);
    }
}
