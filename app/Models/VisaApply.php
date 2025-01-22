<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * @property int $id
 * @property int $user_id
 * @property int $applied_by
 * @property int $processing_type
 * @property int $visa_type
 * @property int $group
 * @property string $name
 * @property string|array $documents
 * @property string|null $visa_document
 * @property int $status
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
        'name',
        'visa_document',
        'documents',
        'status',
    ];
}
