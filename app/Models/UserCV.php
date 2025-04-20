<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


/**
 * @property int $id
 * @property int $user_id
 * @property int $mother_language
 * @property int $nationality
 * @property string $name
 * @property string $phone
 * @property string $email
 * @property string $shirt_size
 * @property string $pant_size
 * @property string $show_size
 * @property string $weight
 * @property string $height
 * @property string $nearest_airport
 * @property string $region
 * @property string $location
 * @property string|null $avatar
 * @property string|null $gender
 * @property string|null $religion
 * @property string|null $blood_group
 * @property string|null $marital_status
 * @property string|null $current_state
 * @property string|null $current_city
 * @property string|null $current_area
 * @property string|null $permanent_district
 * @property string|null $permanent_thana
 * @property string|null $permanent_village
 * @property string|null $passport_no
 * @property string|null $country_contact_no
 * @property string|null $visa_status
 * @property string|null $passport_expiry
 * @property string|null $visa_expiry
 * @property string|null $whatsapp_no
 * @property array|string $documents
 * @property array|string|null $experiences
 * @property array|string|null $references
 * @property array|string|null $educations
 * @property string $summary
 * @property string|null $website
 * @property string|null $personal_skills
 * @property string|null $interests
 * @property string|null $languages
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
 *
 * @property User|null $user
 *
 */
class UserCV extends Model
{
    protected $table = 'user_cvs';

    protected $fillable = [
        'user_id',
        'name',
        'phone',
        'email',
        'shirt_size',
        'pant_size',
        'show_size',
        'weight',
        'height',
        'nearest_airport',
        'region',
        'avatar',
        'gender',
        'religion',
        'location',
        'marital_status',
        'current_state',
        'current_city',
        'current_area',
        'permanent_district',
        'permanent_thana',
        'permanent_village',
        'passport_no',
        'passport_expiry',
        'country_contact_no',
        'visa_status',
        'visa_expiry',
        'blood_group',
        'whatsapp_no',
        'documents',
        'experiences',
        'summary',
    ];

    protected $casts = [
        'educations' => 'array',
        'references' => 'array',
        'experiences' => 'array',
    ];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }


}
