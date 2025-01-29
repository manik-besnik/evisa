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

        if (!$user->is_signup_complete && !$request->routeIs('agency.register.agency-info')) {
            return to_route('agency.register.agency-info');
        }

        return $next($request);
    }
}
