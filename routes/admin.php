<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\VisaApplyController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin.')->name('admin.')->group(function () {

    Route::get('dashboard', [DashboardController::class, 'index'])
        ->name('dashboard.index');

    Route::resource('visa-applies', VisaApplyController::class);

})->middleware(['auth', 'admin']);
