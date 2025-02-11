<?php

namespace App\Supports;

use App\DTOs\NotifyDTO;
use App\Models\Notification;

class Notify
{
    public static function execute(NotifyDTO $notifyDTO): void
    {
        $notification = new Notification();

        $notification->notified_by = $notifyDTO->notifiedBy;
        $notification->notify_to = $notifyDTO->notifyTo;
        $notification->title = $notifyDTO->title;
        $notification->type = $notifyDTO->type;
        $notification->payload = $notifyDTO->payload;
        $notification->user_type = $notifyDTO->userType;
        $notification->save();

    }
}
