<?php

namespace App\Actions\Agency\VisaApply;

use App\DTOs\VisaApplyDTO;
use App\Supports\VisaApplyAction;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;

class StoreAction
{
    public function execute(VisaApplyDTO $visaApplyDTO): RedirectResponse
    {
        DB::beginTransaction();

        try {

            VisaApplyAction::execute($visaApplyDTO);

            DB::commit();

            return redirect()->back();

        } catch (\Exception $exception) {
            DB::rollBack();
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
