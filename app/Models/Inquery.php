<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inquery extends Model
{
    protected $fillable = [
        'name',
        'email',
        'visa_type',
        'location',
        'phone',
        'phone_country',
        'whatsapp',
        'whatsapp_country',
        'message',
        'documents',
    ];

    protected $casts = [
        'documents' => 'array',
    ];
}
