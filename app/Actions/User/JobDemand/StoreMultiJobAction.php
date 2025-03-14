<?php

namespace App\Actions\User\JobDemand;

use App\DTOs\JobDemandDTO;
use App\DTOs\MultiJobDemandDTO;
use App\Models\Company;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;

class StoreMultiJobAction
{
    public function execute(MultiJobDemandDTO $jobDemandDTO): RedirectResponse
    {
        DB::beginTransaction();

        try {

            $company = \App\Supports\JobDemand::storeCompany($jobDemandDTO);

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
