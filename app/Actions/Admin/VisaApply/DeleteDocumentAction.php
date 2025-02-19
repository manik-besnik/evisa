<?php

namespace App\Actions\Admin\VisaApply;

use App\Models\VisaApply;
use App\Supports\FileUpload;

class DeleteDocumentAction
{
    public function execute(int $visaApplyId, string $url): \Illuminate\Http\RedirectResponse
    {
        /** @var VisaApply|null $visaApply */
        $visaApply = VisaApply::query()->find($visaApplyId);

        if (!$visaApply) {
            return redirect()->back()->withErrors(['message' => "Visa Application not found"]);
        }

        try {

            $oldDocs = (array)json_decode($visaApply->visa_document, true);

            $documents = [];

            foreach ($oldDocs as $doc) {
                $mapDoc = (array)$doc;

                if ($mapDoc['url'] === $url) {
                    FileUpload::delete($url);
                    continue;
                }

                $documents[] = $mapDoc;
            }

            $visaApply->visa_document = json_encode($documents);
            $visaApply->update();

            return redirect()->back()->with('success', 'Document Deleted Successfully');

        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['message' => "Something went wrong"]);
        }


    }
}
