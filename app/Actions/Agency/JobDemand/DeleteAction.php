<?php

namespace App\Actions\Agency\JobDemand;

use App\Models\JobPost;
use App\Supports\FileUpload;
use Illuminate\Http\RedirectResponse;

class DeleteAction
{
    public function execute(int $id): RedirectResponse
    {

        try {

            $job = JobPost::query()->findOrFail($id);

            FileUpload::delete($job->thumbnail);

            $job->delete();

            return to_route('admin.job-posts.index')->with(['message' => "Job Post Deleted"]);

        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
