<?php

namespace App\Actions\Admin\VisaApply;

use App\DTOs\VisaApplyDTO;
use App\Supports\VisaApplyAction;
use Illuminate\Support\Facades\DB;

class StoreAction
{
    public function execute(VisaApplyDTO $visaApplyDTO): \Illuminate\Http\RedirectResponse
    {
        DB::beginTransaction();

        try {

            VisaApplyAction::execute($visaApplyDTO);
            DB::commit();

            return to_route('admin.visa-applies.index')->with('success','Visa Application Saved');

        } catch (\Exception $exception) {
            DB::rollBack();
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
