<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * @property int $id
 * @property int $user_id
 * @property int $passport_issue_country
 * @property string $passport_type
 * @property string $passport_no
 * @property string $passport_issue_place
 * @property string $passport_issue_place_arabic
 * @property string $passport_issue_date
 * @property string $passport_expire_date
 */
class Passport extends Model
{
    protected $table = 'passports';

    protected $fillable = [
        'user_id',
        'passport_issue_country',
        'passport_type',
        'passport_no',
        'passport_issue_place',
        'passport_issue_place_arabic',
        'passport_issue_date',
        'passport_expire_date',
    ];
}
