<?php

namespace App\Enums;

enum VisaProcessingType: int
{
    case NORMAL = 1;
    case URGENT = 2;
    case A2A = 3;
    case RENEWAL = 4;
}
