<?php

use App\Http\Controllers\Agency\AgencyController;
use App\Http\Controllers\Agency\DashboardController;
use Illuminate\Support\Facades\Route;


Route::prefix('agency')->middleware('guest')->group(function () {

    Route::get('register', [AgencyController::class, 'login'])
        ->name('agency.register');

    Route::post('register', [AgencyController::class, 'store'])
        ->name('agency.register.store');

    Route::get('register/agency-info', [AgencyController::class, 'create'])
        ->name('agency.register.agency-info');


});


Route::prefix('agency')->name('agency.')->group(function () {

    Route::get('dashboard', [DashboardController::class, 'index'])->name('admin.index');

})->middleware(['auth', 'agency']);
