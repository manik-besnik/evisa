<?php

use App\Http\Controllers\Agency\AuthController;
use App\Http\Controllers\Agency\DashboardController;
use App\Http\Controllers\Agency\UserController;
use App\Http\Controllers\Agency\VisaApplyController;
use Illuminate\Support\Facades\Route;


Route::prefix('agency')->middleware('guest')->group(function () {

    Route::get('register', [AuthController::class, 'create'])
        ->name('agency.register');

    Route::post('register', [AuthController::class, 'store'])
        ->name('agency.register.store');


    Route::get('login', [AuthController::class, 'login'])
        ->name('agency.login');

});


Route::prefix('agency')->middleware(['auth', 'agency'])->name('agency.')->group(function () {

    Route::get('account-not-approved', [DashboardController::class, 'accountNotApproved'])->name('account-not-approved');

    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard.index');

    Route::get('register/info', [AuthController::class, 'agencyInfo'])
        ->name('register.agency-info');


    Route::post('register/info-store', [AuthController::class, 'agencyInfoStore'])
        ->name('register.agency-info.store');

    Route::post('visa-applies/{visa_apply}', [VisaApplyController::class,'update'])->name('visa-applies.update');
    Route::resource('visa-applies', VisaApplyController::class)->except(['update']);

    Route::get('users', [UserController::class, 'index'])->name('users.index');
    Route::get('users/create', [UserController::class, 'create'])->name('users.create');

    Route::post('users/store', [UserController::class, 'store'])->name('users.store');

});
