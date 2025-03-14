<?php

namespace App\Supports;

use App\DTOs\JobDemandDTO;
use App\DTOs\MultiJobDemandDTO;
use App\Models\Company;

class JobDemand
{
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
}
