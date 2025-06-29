<?php

namespace App\Actions\Admin\Inquery;

use App\Enums\Permissions;
use App\Models\JobPost;
use App\Models\Inquery;
use App\Supports\FileUpload;
use App\Supports\UserPermission;
use Illuminate\Http\RedirectResponse;

class DeleteAction
{
    public function execute(int $id): RedirectResponse
    {
        UserPermission::isPermitted(Permissions::DELETE_JOB_POST->value);

        $cv = Inquery::query()->findOrFail($id);

        try {

            FileUpload::delete($cv->avatar);

            foreach ($cv->documents as $doc) {
                $file = (array)$doc;

                if (isset($file['url'])) {
                    FileUpload::delete($file['url']);
                }
            }

            $cv->delete();

            return redirect()->back();

        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
