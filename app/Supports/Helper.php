<?php

namespace App\Supports;

class Helper
{
    public static function getJobCode(int $num): string
    {
        return str_pad($num, 8, '0', STR_PAD_LEFT);
    }

}
