<?php

namespace App\Enums;

enum VisaStatus: int
{
    case PENDING = 1;
    case PROCESSING = 2;
    case APPROVED = 3;
    case REJECT = 4;
}
