<?php

namespace App\Http\Middleware;

use App\Enums\Role;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Agency
{
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request): (Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!auth()->check()) {
            return to_route('agency.login');
        }

        /** @var \App\Models\User $user */
        $user = auth()->user();

        if ($user->role !== Role::AGENCY->value) {
            return to_route('home');
        }

        $allowedSignupRoutes = [
            'agency.register.agency-info',
            'agency.register.agency-info.store',
            'agency.account-not-approved',
        ];

        if (!$user->is_signup_complete && !in_array($request->route()->getName(), $allowedSignupRoutes)) {
            return to_route('agency.register.agency-info');
        }

        if (!$user->is_signup_complete && in_array($request->route()->getName(), $allowedSignupRoutes)) {
            return $next($request);
        }

        if (!$user?->agency?->is_account_approved && !$request->routeIs('agency.account-not-approved')) {
            return to_route('agency.account-not-approved');
        }

        return $next($request);
    }
}
