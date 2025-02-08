<?php

namespace App\Actions\Agency\VisaApply;

use App\DTOs\VisaApplyDTO;
use App\Enums\VisaStatus;
use App\Models\VisaApply;
use App\Supports\VisaUpdate;
use Illuminate\Support\Facades\DB;

class UpdateAction
{
    public function execute(VisaApplyDTO $visaApplyDTO, VisaApply $visaApply): \Illuminate\Http\RedirectResponse
    {
        if ($visaApply->status !== VisaStatus::PENDING->value) {
            return redirect()->back()->withErrors(['message' => "Something Went Wrong"]);
        }

        DB::beginTransaction();

        try {

            VisaUpdate::execute($visaApplyDTO, $visaApply);
            DB::commit();

            return to_route('agency.visa-applies.index')->with('success', 'Visa Application Updated');

        } catch (\Exception $exception) {
            DB::rollBack();
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
