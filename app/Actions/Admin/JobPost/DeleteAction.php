<?php

namespace App\Actions\Admin\JobPost;

use App\Models\JobPost;

class DeleteAction
{
    public function execute(int $id): \Illuminate\Http\RedirectResponse
    {

        try {

            JobPost::query()->find($id)->delete();

            return to_route('admin.job-posts.index')->with(['message' => "Job Post Deleted"]);

        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
