<?php

namespace App\Supports;

use App\Models\VisaApply;
use Carbon\Carbon;

class VisaApplySearch
{
    public static function execute(): \Illuminate\Database\Eloquent\Collection
    {

        $appId = request()->input('app_id');
        $currentNationality = request()->input('current_nationality');
        $processingType = request()->input('processing_type');
        $visaType = request()->input('visa_type');
        $fromDate = request()->input('from_date');
        $toDate = request()->input('to_date');
        $personalName = request()->input('personal_name');
        $passportNo = request()->input('passport_no');
        $group = request()->input('group');
        $visaStatus = request()->input('visa_status');

        return VisaApply::query()
            ->with([
                'personalInfo' => ['currentNationality', 'prevNationality', 'birthCountry'],
                'passport' => ['issueCountry'],
                'guarantor' => ['guarantorNationality']
            ])
            ->where('user_id', auth()->id())
            ->when($appId, fn($query) => $query->where('app_id', $appId))
            ->when($processingType, fn($query) => $query->where('processing_type', $processingType))
            ->when($visaType, fn($query) => $query->where('visa_type', $visaType))
            ->when($fromDate, fn($query) => $query->whereDate('created_at', '>=', Carbon::parse($fromDate)->format('Y-m-d')))
            ->when($toDate, fn($query) => $query->whereDate('created_at', '<=', Carbon::parse($toDate)->format('Y-m-d')))
            ->when($group, fn($query) => $query->where('group', $group))
            ->when($visaStatus, fn($query) => $query->where('status', $visaStatus))
            ->when($personalName, fn($query) => $query->whereHas('personalInfo', fn($q) => $q->where('name', $personalName)))
            ->when($currentNationality, fn($query) => $query->whereHas('personalInfo', fn($q) => $q->where('current_nationality', $currentNationality)))
            ->when($passportNo, fn($query) => $query->whereHas('passport', fn($q) => $q->where('passport_no', $passportNo)))
            ->get();
    }
}
