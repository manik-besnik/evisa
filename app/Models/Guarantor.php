<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $user_id
 * @property int $nationality
 * @property string $name
 * @property string|null $passport_no
 * @property string|null $phone
 * @property string $relation
 */
class Guarantor extends Model
{
    protected $table = 'guarantors';

    protected $fillable = [
        'user_id',
        'nationality',
        'name',
        'passport_no',
        'phone',
        'relation',
    ];

    public function guarantorNationality(): BelongsTo
    {
        return $this->belongsTo(Country::class, 'nationality', 'id');
    }
}
