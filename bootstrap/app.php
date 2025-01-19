<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ])
            ->alias([
                'admin' => \App\Http\Middleware\Admin::class,
                'agency' => \App\Http\Middleware\Agency::class,
                'user' => \App\Http\Middleware\User::class,
            ]);

        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
