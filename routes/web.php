<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'user'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('dashboard', [\App\Http\Controllers\User\DashboardController::class, 'index'])->name('user.dashboard.index');
});

Route::get('google/redirect', function () {

})->name('google.redirect');

Route::get('google/redirect3', function () {

})->name('dashboard');
Route::get('google', function () {

})->name('task.create');

Route::inertia('user-login','Login');

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
