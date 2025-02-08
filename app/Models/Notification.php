<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $notified_by
 * @property int $notify_to
 * @property string $title
 * @property string $type
 * @property int $user_type
 * @property array|string|null $payload
 * @property Carbon|string|null $seen_at
 */
class Notification extends Model
{
    protected $table = 'notifications';

    protected $fillable = [
        'notified_by',
        'notify_to',
        'title',
        'type',
        'user_type',
        'payload',
        'seen_at',
    ];
}
