<?php

namespace App\Supports;

use Illuminate\Support\Facades\Cache;

class Country
{
    public static function get()
    {
        return Cache::rememberForever('countries', function () {
            return \App\Models\Country::query()->select(['id','name','nationality'])->get();
        });
    }
}
