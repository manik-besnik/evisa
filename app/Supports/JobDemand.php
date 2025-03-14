<?php

namespace App\Supports;

use App\DTOs\JobDemandDTO;
use App\DTOs\MultiJobDemandDTO;
use App\Models\Company;

class JobDemand
{

    public static function storeJobDemand(JobDemandDTO $jobDemandDTO, int $companyId): void
    {

        $thumbnail = null;

        if ($jobDemandDTO->thumbnail) {
            $thumbnail = FileUpload::execute($jobDemandDTO->thumbnail);
        }

        $lastId = self::lastJobId();

        $jobDemand = new \App\Models\JobDemand();
        $jobDemand->company_id = $companyId;
        $jobDemand->user_id = auth()->id();
        $jobDemand->job_code = Helper::getJobCode($lastId);
        $jobDemand->location_id = $jobDemandDTO->locationId;
        $jobDemand->transport = $jobDemandDTO->transport;
        $jobDemand->requirements = $jobDemandDTO->note;
        $jobDemand->accommodation = $jobDemandDTO->accommodation;
        $jobDemand->thumbnail = $thumbnail;
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
    }

    /**
     * @param JobDemandDTO|MultiJobDemandDTO $jobDemandDTO
     * @return Company
     */
    public static function storeCompany(JobDemandDTO|MultiJobDemandDTO $jobDemandDTO): Company
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

    public static function lastJobId(): int
    {
        /** @var \App\Models\JobDemand|null $jobDemand */
        $jobDemand = \App\Models\JobDemand::query()
            ->select(['id'])->orderBy('id', 'desc')
            ->first()->id;

        if ($jobDemand) {
            return $jobDemand->id;
        }

        return 1;
    }
}
