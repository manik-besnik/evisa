<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ])->alias([
            'admin' => \App\Http\Middleware\Admin::class,
            'agency' => \App\Http\Middleware\Agency::class,
            'user' => \App\Http\Middleware\User::class,
        ]);

        //
    })
    ->withExceptions(function (Exceptions $exceptions) {

        $exceptions->respond(function (Illuminate\Http\Response|Illuminate\Http\RedirectResponse $response) {
            $status = $response->getStatusCode();

            return match ($status) {
                404 => Inertia::render('Errors/NotFound'),
                403 => Inertia::render('Errors/PermissionDenied'),
                default => $response
            };
        });


    })->create();
