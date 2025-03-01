<?php

namespace App\Http\Controllers;

use App\Models\VisaApply;
use App\Supports\ApiResponse;
use Illuminate\Http\JsonResponse;

class SearchController extends Controller
{
    public function __invoke(): JsonResponse
    {

        $currentNationality = request()->input('current_nationality');
        $passportNo = request()->input('passport_no');

        $visaApplies = VisaApply::query()
            ->select('id', 'name','status','personal_info_id','passport_id')
            ->with([
                'personalInfo:id,name',
                'passport:id,passport_no',
            ])
            ->when($currentNationality, fn($query) => $query->whereHas('personalInfo', fn($q) => $q->where('current_nationality', $currentNationality)))
            ->when($passportNo, fn($query) => $query->whereHas('passport', fn($q) => $q->where('passport_no', $passportNo)))
            ->get();

        return ApiResponse::success('visa apply list', ['visa_applies' => $visaApplies]);

    }
}
