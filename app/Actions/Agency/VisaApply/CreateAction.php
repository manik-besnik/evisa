<?php

namespace App\Actions\Agency\VisaApply;

use App\Enums\Role;
use App\Models\User;
use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        $users = User::query()->select(['id', 'name'])
            ->where('role', Role::USER->value)
            ->where('is_signup_complete', 1)
            ->get();

        return Inertia::render('Agency/VisaApply/ApplyForm', [
            'users' => $users
        ]);
    }
}
