<?php

namespace App\Actions\User\VisaApply;

use App\Models\Guarantor;
use App\Models\Passport;
use App\Models\PersonalInfo;
use Inertia\Inertia;

class CreateAction
{
    public function execute(): \Inertia\Response
    {
        $personInfo = PersonalInfo::query()->where('user_id', auth()->id())->first();
        $passport = Passport::query()->where('user_id', auth()->id())->first();
        $guarantor = Guarantor::query()->where('user_id', auth()->id())->first();


        return Inertia::render('VisaApply', [
            'person_info' => $personInfo,
            'passport' => $passport,
            'guarantor' => $guarantor,
        ]);
    }
}
