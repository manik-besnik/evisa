<?php

namespace App\Actions\User\JobPost;

use App\Models\JobDemand;
use App\Models\Location;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class JobViewAction
{
    public function execute(): \Inertia\Response
    {

        return Inertia::render('JobListView', [
            'on_demand_jobs' => $this->getOnDemandJobs(),
            'new_job_demands' => $this->getNewJobDemands(),
            'location_job_demands' => $this->getLocationJobDemands(),
        ]);
    }

    private function getOnDemandJobs()
    {
        return Cache::remember('on_demand_jobs', now()->addDays(5), function () {
            return JobDemand::query()
                ->where('is_on_demand', true)
                ->where('is_approved', true)
                ->where('available_job', '>', 0)
                ->get();
        });
    }

    private function getNewJobDemands()
    {
        return Cache::remember('new_job_demands', now()->addDays(5), function () {
            return JobDemand::query()
                ->where('is_new', true)
                ->where('is_approved', true)
                ->where('available_job', '>', 0)
                ->get();
        });
    }

    private function getLocationJobDemands()
    {
        return Cache::remember('location_job_demands', now()->addDays(5), function () {
            return Location::query()
                ->with(['jobs' => function ($query) {
                    $query->where('is_on_demand', false)
                        ->where('is_new', false)
                        ->where('is_approved', true)
                        ->where('available_job', '>', 0);
                }])
                ->get();
        });

    }
}
