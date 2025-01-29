<?php

namespace App\Supports;

use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Cache;

class UserPermission
{
    public static function cacheKey(int|null $userId = null): string
    {
        if ($userId) {
            return "user_permission_" . $userId;
        }

        return "user_permission_" . auth()->id();
    }

    public static function set(int|null $userId = null): bool
    {
        /** @var User $user */
        $user = auth()->user();

        if (!$userId) {
            $userId = $user->id;
        }

        $role = Role::query()->find($user->role_id);

        return Cache::put(self::cacheKey($userId), $role, now()->addMinutes((int)config('session.lifetime')));
    }

    public static function get(int|null $userId = null)
    {
        /** @var User $user */
        $user = auth()->user();

        if (!$userId) {
            $userId = $user->id;
        }

        return Cache::remember(self::cacheKey($userId), now()->addMinutes((int)config('session.lifetime')), function () use ($user) {
            return Role::query()->find($user->role_id);
        });
    }


    public static function generate(int|null $userId = null): void
    {
        self::forget($userId);
        self::set($userId);
    }

    public static function forget(int|null $userId = null): bool
    {
        return Cache::delete(self::cacheKey($userId));
    }

    public static function isPermitted(string $permission): true
    {

        /** @var Role|null $role */
        $role = self::get(auth()->id());

        if (!auth()->check() || !$role) {
            abort(403);
        }

        if ($role->is_super_admin) {
            return true;
        }

        if (!in_array($permission, $role->permissions)) {
            abort(403);
        }

        return true;
    }
}
