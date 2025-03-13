<?php

namespace App\Actions\User\JobDemand;

use App\DTOs\JobDemandDTO;
use App\Models\Company;
use App\Models\JobDemand;
use Illuminate\Support\Facades\DB;

class StoreAction
{
    public function execute(JobDemandDTO $jobDemandDTO)
    {
        DB::beginTransaction();

        try {

            $company = $this->createCompany($jobDemandDTO);

            $jobDemand = new JobDemand();
            $jobDemand->company_id = $company->id;
            $jobDemand->user_id = auth()->id();
            $jobDemand->note = $jobDemandDTO->note;
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
