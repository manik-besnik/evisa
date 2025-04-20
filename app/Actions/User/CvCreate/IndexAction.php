<?php

namespace App\Actions\User\CvCreate;

use App\Models\UserCV;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class IndexAction
{
    public function execute(): RedirectResponse|Response
    {
        /** @var UserCV $cv */
        $cv = UserCv::query()->where('user_id', auth()->id())->first();

        if (!$cv) {
            return to_route('cv.create');
        }

        return Inertia::render('UserCV/Index', ['cv' => $cv]);
    }
}
