<?php

namespace App\Actions\Agency\JobDemand;

use App\Models\JobDemand;
use Inertia\Inertia;
use Inertia\Response;

class IndexAction
{
    public function execute(): Response
    {


        $jobDemands = JobDemand::query()
            ->with(['company'])->where('user_id', auth()->id())->paginate(20);

        return Inertia::render('Agency/JobDemandList', [
            'job_demands' => $jobDemands
        ]);
    }
}
