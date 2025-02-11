<?php

namespace App\Actions\Admin\JobPost;

use App\Enums\Permissions;
use App\Models\JobPost;
use App\Supports\FileUpload;
use App\Supports\UserPermission;
use Illuminate\Http\RedirectResponse;

class DeleteAction
{
    public function execute(int $id): RedirectResponse
    {
        UserPermission::isPermitted(Permissions::DELETE_JOB_POST->value);


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
