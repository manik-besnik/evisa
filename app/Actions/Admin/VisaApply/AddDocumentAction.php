<?php

namespace App\Actions\Admin\VisaApply;

use App\Models\VisaApply;
use App\Supports\FileUpload;
use Illuminate\Http\Request;

class AddDocumentAction
{
    public function execute(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        $visaApply = VisaApply::query()->findOrFail($id);

        try {
            $file = FileUpload::execute($request->file('visa_document'), $visaApply->visa_document);

            $visaApply->visa_document = $file;
            $visaApply->update();

            return redirect()->back()->with('success', 'Document Added Successfully');
        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['message' => 'Something went wrong']);
        }
    }
}
