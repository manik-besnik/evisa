<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $user_id
 * @property int $current_nationality
 * @property int $prev_nationality
 * @property int $birth_country
 * @property string $name
 * @property string $name_arabic
 * @property int $gender
 * @property string $date_of_birth
 * @property int $marital_status
 * @property string $birth_place
 * @property string $birth_place_arabic
 * @property string|null $mother_name
 * @property string|null $mother_name_arabic
 * @property string|null $father_name
 * @property string|null $father_name_arabic
 * @property string|null $religion
 * @property string|null $faith
 * @property string|null $qualification
 * @property string|null $profession
 */
class PersonalInfo extends Model
{
    protected $table = 'personal_infos';

    protected $fillable = [
        'user_id',
        'current_nationality',
        'prev_nationality',
        'birth_country',
        'name',
        'name_arabic',
        'gender',
        'date_of_birth',
        'marital_status',
        'birth_place',
        'birth_place_arabic',
        'mother_name',
        'mother_name_arabic',
        'father_name',
        'father_name_arabic',
        'religion',
        'faith',
        'qualification',
        'profession',
    ];

    public function currentNationality(): BelongsTo
    {
        return $this->belongsTo(Country::class,'current_nationality','id');
    }
    public function prevNationality(): BelongsTo
    {
        return $this->belongsTo(Country::class,'prev_nationality','id');
    }
    public function birthCountry(): BelongsTo
    {
        return $this->belongsTo(Country::class,'birth_country','id');
    }
}
