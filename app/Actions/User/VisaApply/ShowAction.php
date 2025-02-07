<?php

namespace App\Actions\User\VisaApply;

use App\Models\VisaApply;
use Inertia\Inertia;

class ShowAction
{
    public function execute(int $id): \Inertia\Response
    {
        $visaApply = VisaApply::query()
            ->with([
                'passport.issueCountry',
                'personInfo' => [
                    'currentNationality',
                    'prevNationality',
                    'birthCountry',
                ],
                'guarantor.guarantorNationality',
            ])->where('user_id', auth()->id())
            ->findOrFail($id);

        return Inertia::render('VisaDetails', [
            'visa_apply' => $visaApply
        ]);
    }

}
