<?php

namespace App\Actions\Admin\JobDemand;

use App\DTOs\JobPostDTO;
use App\Enums\JobType;
use App\Enums\Permissions;
use App\Models\JobPost;
use App\Supports\FileUpload;
use App\Supports\UserPermission;
use Illuminate\Http\RedirectResponse;

class UpdateAction
{
    public function execute(int $id, JobPostDTO $jobPostDTO): RedirectResponse
    {
        UserPermission::isPermitted(Permissions::EDIT_JOB_POST->value);

        /** @var JobPost|null $jobPost */
        $jobPost = JobPost::query()->find($id);

        if (!$jobPost) {
            return redirect()->back()->withErrors(['message' => "JOb Post Not Found"]);
        }


        try {

            $thumbnail = $jobPost->thumbnail;

            if ($jobPostDTO->thumbnail) {
                $thumbnail = FileUpload::execute($jobPostDTO->thumbnail, $jobPost->thumbnail);
            }

            $jobPost->type = JobType::tryFrom($jobPostDTO->type)->value;
            $jobPost->title = $jobPostDTO->title;
            $jobPost->company = $jobPostDTO->company;
            $jobPost->salary_range = $jobPostDTO->salaryRange;
            $jobPost->location = $jobPostDTO->location;
            $jobPost->last_apply_date = $jobPostDTO->lastApplyDate;
            $jobPost->description = $jobPostDTO->description;
            $jobPost->thumbnail = $thumbnail;
            $jobPost->update();

            return to_route('admin.job-posts.index')->with('success', "Job Post Updated Successfully");

        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
