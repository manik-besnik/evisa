<?php

namespace App\Actions\Admin\JobPost;

use App\DTOs\JobPostDTO;
use App\Enums\JobType;
use App\Models\JobPost;
use App\Supports\FileUpload;

class StoreAction
{
    public function execute(JobPostDTO $jobPostDTO): \Illuminate\Http\RedirectResponse
    {
        try {

            $thumbnail = null;

            if ($jobPostDTO->thumbnail) {
                $thumbnail = FileUpload::execute($jobPostDTO->thumbnail);
            }

            $jobPost = new JobPost();
            $jobPost->type = JobType::tryFrom($jobPostDTO->type)->value;
            $jobPost->title = $jobPostDTO->title;
            $jobPost->company = $jobPostDTO->company;
            $jobPost->salary_range = $jobPostDTO->salaryRange;
            $jobPost->location = $jobPostDTO->location;
            $jobPost->last_apply_date = $jobPostDTO->lastApplyDate;
            $jobPost->description = $jobPostDTO->description;
            $jobPost->thumbnail = $thumbnail;
            $jobPost->save();

            return to_route('admin.job-posts.index')->with('success', 'New Job Post Added Successfully');

        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
