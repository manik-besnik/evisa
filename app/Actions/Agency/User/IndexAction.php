<?php

namespace App\Actions\Agency\User;

use App\Enums\Role;
use App\Models\User;
use Inertia\Inertia;

class IndexAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('Agency/User/Index', [
            'users' => User::query()->where('added_by', auth()->id())->where('role', Role::USER->value)->paginate()
        ]);
    }
}
