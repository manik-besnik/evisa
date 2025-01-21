<?php

namespace App\Actions\Admin\Visa;

use App\DTOs\VisaApplyDTO;
use App\Supports\VisaApplyAction;

class StoreAction
{
    public function execute(VisaApplyDTO $visaApplyDTO)
    {
        VisaApplyAction::execute($visaApplyDTO);
    }
}
