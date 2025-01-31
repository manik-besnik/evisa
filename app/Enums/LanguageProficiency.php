<?php

namespace App\Enums;

enum LanguageProficiency: int
{
    case BEGINNER = 1;
    case INTERMEDIATE = 2;
    case ADVANCED = 3;
    case Fluent = 4;
    case NATIVE = 5;
}
