<?php

namespace App\Enums;

enum Group: int
{
    case MAIN_PERSON = 1;
    case SON_OF_MAIN_PERSON = 2;
    case DAUGHTER_OF_MAIN_PERSON = 3;
    case WIFE_OF_MAIN_PERSON = 4;
}
