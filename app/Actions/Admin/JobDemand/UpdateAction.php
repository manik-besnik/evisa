<?php

namespace App\Actions\Admin\JobDemand;

use App\DTOs\AdminJobDemandDTO;
use App\DTOs\JobDemandDTO;
use App\Enums\Permissions;
use App\Models\Company;
use App\Models\JobDemand;
use App\Supports\FileUpload;
use App\Supports\UserPermission;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;

class UpdateAction
{
    public function execute(int $id, AdminJobDemandDTO $jobDemandDTO): RedirectResponse
    {
        UserPermission::isPermitted(Permissions::EDIT_JOB_POST->value);

        /** @var JobDemand|null $jobDemand */
        $jobDemand = JobDemand::query()->with(['company'])->find($id);

        if (!$jobDemand) {
            return redirect()->back()->withErrors(['message' => "Job Demand Not Found"]);
        }

        $company = $jobDemand->company;

        if (!$jobDemand->company) {
            return redirect()->back()->withErrors(['message' => "Job Demand Not Found"]);
        }


        DB::beginTransaction();

        try {

            $this->updateCompany($jobDemandDTO, $company);

            $thumbnail = $jobDemand->thumbnail;

            if ($jobDemandDTO->thumbnail) {
                $thumbnail = FileUpload::execute($jobDemandDTO->thumbnail, $jobDemand->thumbnail);
            }

            $jobDemand->location_id = $jobDemandDTO->locationId;
            $jobDemand->transport = $jobDemandDTO->transport;
            $jobDemand->requirements = $jobDemandDTO->note;
            $jobDemand->accommodation = $jobDemandDTO->accommodation;
            $jobDemand->job_location = $jobDemandDTO->jobLocation;
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
            $jobDemand->medical_insurance = $jobDemandDTO->medicalInsurance;
            $jobDemand->vacation_benefits = $jobDemandDTO->vacationBenefits;

            $jobDemand->is_on_demand = $jobDemandDTO->isOnDemand;
            $jobDemand->is_new = $jobDemandDTO->isNewJob ? 1 : 0;

            if ($jobDemandDTO->approved) {
                $jobDemand->is_approved = true;
            }
            $jobDemand->update();

            DB::commit();

            return to_route('admin.job-demands.index')->with('success', "Job Demand Updated Successfully");

        } catch (\Exception $exception) {
            DB::rollBack();
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }


    /**
     * @param JobDemandDTO|AdminJobDemandDTO $jobDemandDTO
     * @param Company $company
     * @return void
     */
    private function updateCompany(JobDemandDTO|AdminJobDemandDTO $jobDemandDTO, Company $company): void
    {
        $company->name = $jobDemandDTO->companyName;
        $company->contact_person = $jobDemandDTO->contactPerson;
        $company->email = $jobDemandDTO->email;
        $company->phone_no = $jobDemandDTO->phoneNo;
        $company->whatsapp_no = $jobDemandDTO->whatsappNo;
        $company->address = $jobDemandDTO->currentAddress;
        $company->city = $jobDemandDTO->city;
        $company->area = $jobDemandDTO->area;
        $company->update();

    }
}
