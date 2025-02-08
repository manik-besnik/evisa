<?php

namespace App\DTOs;

readonly class NotifyDTO
{

    public function __construct(
        public int               $notifiedBy,
        public int               $notifyTo,
        public string            $title,
        public string|null       $type = null,
        public int|null          $userType = null,
        public array|string|null $payload = null,
    )
    {
    }
}
