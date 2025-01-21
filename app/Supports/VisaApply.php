<?php

namespace App\Supports;

use App\DTOs\VisaApplyDTO;
use App\Models\VisaApply as ApplyVisa;
class VisaApply
{
    public static function execute(VisaApplyDTO $visaApplyDTO): ApplyVisa
    {
        $visaApply = new ApplyVisa();

        $visaApply->applied_by = auth()->id();

        return $visaApply;
    }
}
