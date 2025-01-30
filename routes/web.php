<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\VisaApplyController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'user'])->group(function () {

    Route::get('user-info', [ProfileController::class, 'userInfo'])->name('user.info');

    Route::put('store-user-info', [ProfileController::class, 'storeInfo'])->name('user.info.store');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('report', [VisaApplyController::class, 'index'])->name('visa-apply.index');

    Route::get('visa-apply', [VisaApplyController::class, 'create'])->name('visa-apply.create');

    Route::post('visa-apply/store', [VisaApplyController::class, 'store'])->name('visa-apply.store');

    Route::get('dashboard', [\App\Http\Controllers\User\DashboardController::class, 'index'])->name('user.dashboard.index');
});

Route::get('google/redirect', function () {

})->name('google.redirect');

Route::get('google/redirect3', function () {

})->name('dashboard');
Route::get('google', function () {

})->name('task.create');

Route::inertia('others', 'Other')->name('others');
Route::inertia('search', 'Search');

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/agency.php';
