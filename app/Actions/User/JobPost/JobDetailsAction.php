<?php

namespace App\Actions\User\JobPost;

use App\Models\JobDemand;
use Inertia\Inertia;

class JobDetailsAction
{
    public function execute(int $id): \Inertia\Response
    {
        $job = JobDemand::query()->with(['location', 'company'])->findOrFail($id);

        return Inertia::render('JobDetailView', [
            'job' => $job,
            'meta' => [
                'title' => "{$job->type_of_work} Job Details | Dubai E-Visa",
                'requirements' => $job->requirements,
                'image' => $job->thumbnail,
                'url' => route('job.details', $job->id),
            ]
        ]);
    }
}
