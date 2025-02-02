<?php

namespace App\Actions\Admin\JobPost;

use App\Models\JobPost;
use App\Supports\FileUpload;

class DeleteAction
{
    public function execute(int $id): \Illuminate\Http\RedirectResponse
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
