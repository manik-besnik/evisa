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


        try {

            FileUpload::delete($jobApply->avatar);

            foreach ($jobApply->documents as $doc) {

                $url = $doc['url'] ?? null;

                if ($url){
                    FileUpload::delete($url);
                }

            }

            JobExperience::query()->where('job_apply_id', $jobApply->id)->delete();

            Education::query()->findOrFail($jobApply->education_id)->delete();

            $jobApply->delete();

            return redirect()->back()->with('success', 'Job Application deleted successfully');
        }catch (\Exception $exception){
            return redirect()->back()->withErrors([$exception->getMessage()]);
        }
    }
}
