<?php

namespace App\Actions\Agency\JobDemand;

use App\DTOs\JobDemandDTO;
use App\Supports\JobDemand;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;

class StoreAction
{
    public function execute(JobDemandDTO $jobDemandDTO): RedirectResponse
    {
        DB::beginTransaction();

        try {

            $company = JobDemand::storeCompany($jobDemandDTO);
            JobDemand::storeJobDemand($jobDemandDTO, $company->id);

            DB::commit();

            return to_route('agency.job-demands.index')->with('success', 'New Job Demand Added Successfully');

        } catch (\Exception $exception) {
            DB::rollBack();
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
