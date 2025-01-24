<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * @property int $id
 * @property int $user_id
 * @property int $mother_language
 * @property string $exam_name
 * @property string $passing_year
 * @property string $institute
 * @property string $computer_skill
 * @property string $driving_license
 * @property string $driving_license_issue_date
 * @property string $driving_license_expire_date
 * @property int $english_expertise
 * @property int $arabic_expertise
 * @property int $urdu_expertise
 */
class Education extends Model
{
    protected $table = 'educations';

    protected $fillable = [
        'user_id',
        'mother_language',
        'exam_name',
        'passing_year',
        'institute',
        'computer_skill',
        'driving_license',
        'driving_license_issue_date',
        'driving_license_expire_date',
        'english_expertise',
        'arabic_expertise',
        'urdu_expertise',
    ];


}
