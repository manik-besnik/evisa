<?php

namespace App\Actions\User\JobDemand;

use App\DTOs\MultiJobDemandDTO;
use App\Models\JobDemand;
use App\Supports\FileUpload;
use App\Supports\Helper;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;

class StoreMultiJobAction
{
    public function execute(MultiJobDemandDTO $jobDemandDTO): RedirectResponse
    {
        DB::beginTransaction();

        try {

            $company = \App\Supports\JobDemand::storeCompany($jobDemandDTO);

            $thumbnail = null;

            if ($jobDemandDTO->thumbnail) {
                $thumbnail = FileUpload::execute($jobDemandDTO->thumbnail);
            }

            $jobDemands = [];

            $lastId = \App\Supports\JobDemand::lastJobId();

            foreach ($jobDemandDTO->demandItems as $demandItem) {
                $jobDemands[] = [
                    'company_id' => $company->id,
                    'user_id' => auth()->id(),
                    'job_code' => Helper::getJobCode($lastId),
                    'type_of_work' => $demandItem['type_of_work'],
                    'salary' => $demandItem['salary'],
                    'worker_quantity' => $demandItem['worker_quantity'],
                    'note' => $demandItem['note'],
                    'accommodation' => $jobDemandDTO->accommodation,
                    'job_location' => $jobDemandDTO->jobLocation,
                    'duty_hours' => $jobDemandDTO->workingHours,
                    'visa_validity' => $jobDemandDTO->visaValidity,
                    'food' => $jobDemandDTO->food,
                    'age_limit' => $jobDemandDTO->ageLimits,
                    'company_activities' => $jobDemandDTO->companyActivities,
                    'education' => $jobDemandDTO->education,
                    'requirements' => $jobDemandDTO->note,
                    'thumbnail' => $thumbnail,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];

                $lastId++;
            }


            JobDemand::query()->insert($jobDemands);

            DB::commit();

            return redirect()->back();

        } catch (\Exception $exception) {
            DB::rollBack();
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }

}
