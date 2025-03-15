<?php

namespace App\Actions\Admin\JobDemand;

use App\DTOs\AdminJobDemandDTO;
use App\Enums\Permissions;
use App\Supports\JobDemand;
use App\Supports\UserPermission;
use Illuminate\Http\RedirectResponse;

class StoreAction
{
    public function execute(AdminJobDemandDTO $adminJobDemandDTO): RedirectResponse
    {
        UserPermission::isPermitted(Permissions::CREATE_JOB_POST->value);

        try {

            $company = JobDemand::storeCompany($adminJobDemandDTO);

            JobDemand::storeJobDemand($adminJobDemandDTO, $company->id);

            return to_route('admin.job-posts.index')->with('success', 'New Job Demand Added Successfully');

        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
