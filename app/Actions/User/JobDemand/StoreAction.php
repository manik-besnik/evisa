<?php

namespace App\Actions\User\JobDemand;

use App\DTOs\JobDemandDTO;
use App\Models\Company;
use App\Models\JobDemand;
use App\Supports\FileUpload;
use Illuminate\Support\Facades\DB;

class StoreAction
{
    public function execute(JobDemandDTO $jobDemandDTO)
    {
        DB::beginTransaction();

        try {

            $company = $this->createCompany($jobDemandDTO);

            $thumbnail = null;

            if ($jobDemandDTO->thumbnail){
                $thumbnail = FileUpload::execute($jobDemandDTO->thumbnail);
            }

            $jobDemand = new JobDemand();
            $jobDemand->company_id = $company->id;
            $jobDemand->user_id = auth()->id();
            $jobDemand->job_code = uniqid() . now()->timestamp;
            $jobDemand->transport = $jobDemandDTO->transport;
            $jobDemand->note = $jobDemandDTO->note;
            $jobDemand->accommodation = $jobDemandDTO->accommodation;
            $jobDemand->thumbnail = $thumbnail;
//            $jobDemand->date = $jobDemandDTO->;
            $jobDemand->type_of_work = $jobDemandDTO->typeOfWork;
            $jobDemand->salary = $jobDemandDTO->salary;
            $jobDemand->worker_quantity = $jobDemandDTO->workerQuantity;
            $jobDemand->duty_hours = $jobDemandDTO->workingHours;
            $jobDemand->visa_validity = $jobDemandDTO->visaValidity;
            $jobDemand->food = $jobDemandDTO->food;
            $jobDemand->age_limit = $jobDemandDTO->ageLimits;
            $jobDemand->company_activities = $jobDemandDTO->companyActivities;
            $jobDemand->education = $jobDemandDTO->education;
            $jobDemand->save();


            DB::commit();
            return redirect()->back();

        } catch (\Exception $exception) {
            DB::rollBack();
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }


    /**
     * @param JobDemandDTO $jobDemandDTO
     * @return Company
     */
    private function createCompany(JobDemandDTO $jobDemandDTO): Company
    {
        $company = new Company();
        $company->name = $jobDemandDTO->companyName;
        $company->contact_person = $jobDemandDTO->contactPerson;
        $company->email = $jobDemandDTO->email;
        $company->phone_no = $jobDemandDTO->phoneNo;
        $company->whatsapp_no = $jobDemandDTO->whatsappNo;
        $company->address = $jobDemandDTO->currentAddress;
        $company->city = $jobDemandDTO->city;
        $company->area = $jobDemandDTO->area;
        $company->save();

        return $company;
    }
}
