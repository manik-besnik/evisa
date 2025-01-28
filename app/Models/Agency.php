<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $user_id
 * @property string $company_name
 * @property string|null $eid_no
 * @property string|null $passport_no
 * @property string|null $uid_no
 * @property string|null $bank_details
 * @property string|null $nominee_name
 * @property string|null $nominee_passport_no
 *
 * @mixin Model
 * @property User $user
 */
class Agency extends Model
{
    protected $table = 'agencies';

    protected $fillable = [
        'user_id',
        'company_name',
        'eid_no',
        'passport_no',
        'uid_no',
        'bank_details',
        'nominee_name',
        'nominee_passport_no',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
