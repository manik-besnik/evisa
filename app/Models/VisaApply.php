<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


/**
 * @property int $id
 * @property int $user_id
 * @property int $person_info_id
 * @property int $passport_id
 * @property int $guarantor_id
 * @property int $applied_by
 * @property int $processing_type
 * @property int $visa_type
 * @property int $group
 * @property string $app_id
 * @property string $name
 * @property string|array $documents
 * @property string|null $visa_document
 * @property int $status
 *
 * @mixin Model
 *
 * @property PersonalInfo|null $personInfo
 * @property Passport|null $passport
 * @property Guarantor|null $guarantor
 *
 */
class VisaApply extends Model
{
    protected $table = 'visa_applies';

    protected $fillable = [
        'user_id',
        'person_info_id',
        'passport_id',
        'guarantor_id',
        'applied_by',
        'processing_type',
        'visa_type',
        'group',
        'app_id',
        'name',
        'visa_document',
        'documents',
        'status',
    ];

    protected $casts = [
        'documents' => 'array'
    ];

    public function personalInfo(): BelongsTo
    {
        return $this->belongsTo(PersonalInfo::class, 'personal_info_id', 'id');
    }

    public function passport(): BelongsTo
    {
        return $this->belongsTo(Passport::class, 'passport_id', 'id');
    }

    public function guarantor(): BelongsTo
    {
        return $this->belongsTo(Guarantor::class, 'guarantor_id', 'id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
