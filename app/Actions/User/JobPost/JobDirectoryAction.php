<?php

namespace App\Actions\User\JobPost;

use App\Models\Location;
use Inertia\Inertia;

class JobDirectoryAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('JobDirectory', [
            'locations' => Location::query()->select('id', 'name')->get()
        ]);
    }
}
