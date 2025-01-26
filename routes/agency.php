<?php

use App\Http\Controllers\Agency\AgencyController;
use App\Http\Controllers\Agency\AuthController;
use App\Http\Controllers\Agency\DashboardController;
use Illuminate\Support\Facades\Route;


Route::prefix('agency')->group(function () {

    Route::get('register', [AuthController::class, 'create'])
        ->name('agency.register');

    Route::post('register', [AuthController::class, 'store'])
        ->name('agency.register.store');


})->middleware('guest');


Route::prefix('agency')->name('agency.')->group(function () {

    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard.index');

    Route::get('register/info', [AuthController::class, 'agencyInfo'])
        ->name('register.agency-info');
    Route::post('register/info-store', [AuthController::class, 'agencyInfo'])
        ->name('register.agency-info.store');

})->middleware(['auth', 'agency']);
