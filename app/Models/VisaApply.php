<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;


/**
 * @property int $id
 * @property int $user_id
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

    public function personInfo(): HasOne
    {
        return $this->hasOne(PersonalInfo::class, 'visa_apply_id', 'id');
    }

    public function passport(): HasOne
    {
        return $this->hasOne(Passport::class, 'visa_apply_id', 'id');
    }

    public function guarantor(): HasOne
    {
        return $this->hasOne(Guarantor::class, 'visa_apply_id', 'id');
    }
}
