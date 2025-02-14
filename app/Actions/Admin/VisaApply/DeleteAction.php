<?php

namespace App\Actions\Admin\VisaApply;

use App\Models\VisaApply;
use App\Supports\FileUpload;

class DeleteAction
{
    public function execute(VisaApply $visaApply)
    {

        try {
            $oldDocs = (array)json_decode($visaApply->documents);

            foreach ($oldDocs as $doc) {
                $file = (array)$doc;

                if (isset($file['url'])) {
                    FileUpload::delete($file['url']);
                }
            }
            $visaApply->delete();

            return to_route('admin.visa-applies.index')->with('success', 'Visa Application Deleted Successfully');

        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }

    }

}
