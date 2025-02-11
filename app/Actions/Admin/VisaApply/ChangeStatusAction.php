<?php

namespace App\Actions\Admin\VisaApply;

use App\Enums\VisaStatus;
use App\Mail\VisaDocumentAdded;
use App\Mail\VisaStatusChange;
use App\Models\VisaApply;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ChangeStatusAction
{
    public function execute(Request $request, int $id): RedirectResponse
    {
        $visaApply = VisaApply::query()->findOrFail($id);

        try {

            $visaApply->status = VisaStatus::tryFrom((int)$request->input('status'))->value;
            $visaApply->update();

            if ($visaApply->user?->email) {

                $data = [
                    'name' => $visaApply->user?->name,
                    'visa_apply_id' => $visaApply->id,
                    'status' => VisaStatus::tryFrom((int)$request->input('status'))?->name,
                ];
                Mail::to($visaApply->user->email,$visaApply->user->name)
                    ->send(new VisaStatusChange($data));
            }

            return redirect()->back()->with('success', 'Status updated Successfully');
        } catch (\Exception $exception) {

            return redirect()->back()->withErrors(['message' => 'Something went wrong']);
        }
    }
}
