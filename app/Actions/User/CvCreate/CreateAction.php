<?php

namespace App\Actions\User\CvCreate;

use App\Models\Language;
use App\Models\Location;
use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        return Inertia::render('UserCV/CvCreate', [
            'locations' => Location::query()->select(['id', 'name'])->get(),
            'languages' => Language::query()->select(['id', 'name'])->get(),
        ]);
    }
}
