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

        $visaApply = VisaApply::query()->with('user')->findOrFail($id);

        try {
            $file = FileUpload::execute($request->file('visa_document'), $visaApply->visa_document);

            $visaApply->visa_document = $file;
            $visaApply->update();

            if ($visaApply->user?->email) {

                $data = [
                    'name' => $visaApply->user?->name,
                    'visa_apply_id' => $visaApply->id,
                ];
                Mail::to($visaApply->user->email, $visaApply->user->name)
                    ->send(new VisaDocumentAdded($data));
            }

            return redirect()->back()->with('success', 'Document Added Successfully');

        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['message' => 'Something went wrong']);
        }
    }
}
