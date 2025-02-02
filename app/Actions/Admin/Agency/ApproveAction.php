<?php

namespace App\Actions\Admin\Agency;

use App\Models\Agency;

class ApproveAction
{
    public function execute(int $id): \Illuminate\Http\RedirectResponse
    {
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
