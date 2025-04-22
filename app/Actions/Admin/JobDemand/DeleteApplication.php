<?php

namespace App\Actions\Admin\JobDemand;

use App\Models\Education;
use App\Models\JobApply;
use App\Models\JobExperience;
use App\Supports\FileUpload;

class DeleteApplication
{
    public function execute(int $id): \Illuminate\Http\RedirectResponse
    {

        $jobApply = JobApply::query()->findOrFail($id);

        dd($jobApply);

        try {

            FileUpload::delete($jobApply->avatar);

            JobExperience::query()->where('job_apply_id', $jobApply->id)->delete();

            Education::query()->findOrFail($jobApply->education_id)->delete();

            $jobApply->delete();

            return redirect()->back()->with('success', 'Application has been deleted');
        }catch (\Exception $exception){
            return redirect()->back()->withErrors([$exception->getMessage()]);
        }
    }
}
