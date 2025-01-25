<?php

namespace App\Supports;

use Illuminate\Support\Facades\Cache;

class Country
{
    public static function get()
    {
        return Cache::remember('countries', now()->addDays(5), function () {
            return \App\Models\Country::query()->get();
        });
    }
}
