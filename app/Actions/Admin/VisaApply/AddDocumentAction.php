<?php

namespace App\Actions\Admin\VisaApply;

use App\Enums\Permissions;
use App\Mail\VisaDocumentAdded;
use App\Models\VisaApply;
use App\Supports\FileUpload;
use App\Supports\UserPermission;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AddDocumentAction
{
    public function execute(Request $request, int $id): RedirectResponse
    {

        UserPermission::isPermitted(Permissions::ADD_DOCUMENT_VISA->value);

        $request->validate([
            'documents' => ['required', 'array', 'min:1'],
            'documents.*.name' => ['required', 'string', 'min:2', 'max:200'],
            'documents.*.file' => ['required', 'file', 'mimes:jpg,png,jpeg,pdf', 'max:2048'],
        ]);

        $visaApply = VisaApply::query()->findOrFail($id);

        try {

            $oldDocs = (array)json_decode($visaApply->visa_document);

            $docMaps = [];

            foreach ($oldDocs as $doc) {
                $mapDoc = (array)$doc;
                $docMaps[$mapDoc['name']] = $mapDoc;
            }


            $documents = [];

            foreach ($request->all()['documents'] as $document) {

                if (!isset($document['file'])) {
                    continue;
                }

                $oldFile = $docMaps[$document['name']]['url'] ?? null;

                $file = FileUpload::execute($document['file'], $oldFile);
                $documents[] = [
                    'name' => $document['name'],
                    'url' => $file,
                ];
                if (isset($docMaps[$document['name']])) {
                    unset($docMaps[$document['name']]);
                }
            }

            $mergeDocs = [...$oldDocs,...$documents];

            $visaApply->visa_document = json_encode($mergeDocs);
            $visaApply->update();

            if ($visaApply->user?->email) {

                $data = [
                    'name' => $visaApply->user?->name,
                    'visa_apply_id' => $visaApply->id,
                ];

                Mail::to($visaApply->user->email, $visaApply->user->name)
                    ->send(new VisaDocumentAdded($data));
            }

            return redirect()->back()->with('success', 'Documents Added Successfully');

        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['message' => 'Something went wrong']);
        }
    }
}
