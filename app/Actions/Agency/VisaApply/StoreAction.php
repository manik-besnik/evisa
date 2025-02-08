<?php

namespace App\Actions\Agency\VisaApply;

use App\DTOs\NotifyDTO;
use App\DTOs\VisaApplyDTO;
use App\Enums\Role;
use App\Models\User;
use App\Supports\Notify;
use App\Supports\VisaApplyAction;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;

class StoreAction
{
    public function execute(VisaApplyDTO $visaApplyDTO): RedirectResponse
    {
        DB::beginTransaction();

        try {

            $visaApply = VisaApplyAction::execute($visaApplyDTO);

            /** @var User $user */
            $user = auth()->user();
            $title = "{$user->name} Applied for new Visa";

            Notify::execute(new NotifyDTO(auth()->id(), 1, $title, 'visa_apply', Role::ADMIN->value, $visaApply->toArray()));

            DB::commit();

            return redirect()->back();

        } catch (\Exception $exception) {
            DB::rollBack();
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
