<?php

namespace App\Actions\Admin\VisaApply;

use App\DTOs\VisaApplyDTO;
use App\Enums\Permissions;
use App\Models\VisaApply;
use App\Supports\UserPermission;
use App\Supports\VisaUpdate;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;

class UpdateAction
{
    public function execute(VisaApplyDTO $visaApplyDTO, VisaApply $visaApply): RedirectResponse
    {

        UserPermission::isPermitted(Permissions::EDIT_VISA->value);

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
