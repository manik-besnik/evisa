<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property array|string|null $permissions
 * @property int|bool $is_super_admin
 */
class Role extends Model
{
    protected $table = 'roles';

    protected $fillable = ['name', 'permissions', 'is_super_admin'];

    protected $casts = [
        'permissions' => 'array',
        'is_super_admin' => 'boolean'
    ];
}
