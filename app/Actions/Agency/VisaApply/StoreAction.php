<?php

namespace App\Actions\Agency\VisaApply;

use App\DTOs\NotifyDTO;
use App\DTOs\VisaApplyDTO;
use App\Enums\NotificationType;
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

            Notify::execute(new NotifyDTO(auth()->id(), 1, $title, NotificationType::VISA_APPLY->value, Role::ADMIN->value, $visaApply->toArray()));

            DB::commit();

            return to_route('agency.visa-applies.index');

        } catch (\Exception $exception) {
            DB::rollBack();
            return redirect()->back()->withErrors(['message' => $exception->getMessage()]);
        }
    }
}
