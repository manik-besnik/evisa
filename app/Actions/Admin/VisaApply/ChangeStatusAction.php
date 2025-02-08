<?php

namespace App\Actions\Admin\VisaApply;

use App\Enums\VisaStatus;
use App\Models\VisaApply;
use Illuminate\Http\Request;

class ChangeStatusAction
{
    public function execute(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        $visaApply = VisaApply::query()->findOrFail($id);

        try {

            $visaApply->visa_document = VisaStatus::tryFrom((int)$request->input('status'));
            $visaApply->update();

            return redirect()->back()->with('success', 'Status updated Successfully');
        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['message' => 'Something went wrong']);
        }
    }
}
