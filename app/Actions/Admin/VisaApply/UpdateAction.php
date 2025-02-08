<?php

namespace App\Actions\Admin\VisaApply;

use App\DTOs\VisaApplyDTO;
use App\Models\VisaApply;
use App\Supports\VisaUpdate;
use Illuminate\Support\Facades\DB;

class UpdateAction
{
    public function execute(VisaApplyDTO $visaApplyDTO, VisaApply $visaApply): \Illuminate\Http\RedirectResponse
    {
        DB::beginTransaction();

        try {

            VisaUpdate::execute($visaApplyDTO, $visaApply);
            DB::commit();

            return to_route('admin.visa-applies.index')->with('success', 'Visa Application Updated');

        } catch (\Exception $exception) {
            DB::rollBack();
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
