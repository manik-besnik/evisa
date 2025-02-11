<?php

namespace App\Actions\Admin\Agency;

use App\Enums\Permissions;
use App\Models\Agency;
use App\Supports\UserPermission;
use Illuminate\Http\RedirectResponse;

class ApproveAction
{
    public function execute(int $id): RedirectResponse
    {
        UserPermission::isPermitted(Permissions::VIEW_AGENCY->value);

        /** @var Agency|null $agency */
        $agency = Agency::query()->where('user_id', $id)->first();

        if (!$agency) {
            return redirect()->back()->withErrors(['message' => 'Account Not Found']);
        }

        try {
            $agency->is_account_approved = 1;
            $agency->update();

            return redirect()->back()->with('success', 'Account Approved');
        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['message' => 'Account Approve Failed']);
        }

    }

}
