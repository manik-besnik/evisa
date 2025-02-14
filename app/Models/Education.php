<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


/**
 * @property int $id
 * @property int $user_id
 * @property int $mother_language
 * @property string $exam_name
 * @property string $passing_year
 * @property string $institute
 * @property string|null $result
 * @property string $computer_skill
 * @property string $driving_license
 * @property string $driving_license_issue_date
 * @property string $driving_license_expire_date
 * @property int $english_proficiency
 * @property int $arabic_proficiency
 * @property int $urdu_proficiency
 *
 * @mixin Model
 * @property Language $language
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
        'english_proficiency',
        'arabic_proficiency',
        'urdu_proficiency',
    ];

    public function language(): BelongsTo
    {
        return $this->belongsTo(Language::class,'mother_language','id');
    }


}
