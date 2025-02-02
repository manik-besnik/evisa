<?php

namespace App\Actions\Admin\Agency;

use App\Models\User;
use Inertia\Inertia;

class ShowAction
{
    public function execute(int $id): \Inertia\Response
    {
        return Inertia::render('Admin/Agency/Show', [
            'agency' => User::with('agency')->findOrFail($id)
        ]);
    }
}
