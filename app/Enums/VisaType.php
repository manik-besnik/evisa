<?php

namespace App\Enums;

enum VisaType: int
{
    case SHORT_TERM = 1;
    case LONG_TERM = 2;
    case MULTIPLE_30_DAYS = 3;
    case ONLY_14_DAYS = 4;
    case ONLY_96_HOURS = 5;
}
