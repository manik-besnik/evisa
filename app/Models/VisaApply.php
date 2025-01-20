<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * @property int $id
 * @property int $user_id
 * @property int $personal_info_id
 * @property int $passport_id
 * @property int $guarantor_id
 * @property int $processing_type
 * @property int $visa_type
 * @property int $group
 * @property string $name
 * @property string|array $documents
 */
class VisaApply extends Model
{
    protected $table = 'visa_applies';

    protected $fillable = [
        'user_id',
        'personal_info_id',
        'passport_id',
        'guarantor_id',
        'processing_type',
        'visa_type',
        'group',
        'name',
        'documents',
    ];
}
