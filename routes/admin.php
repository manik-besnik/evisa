<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AgencyController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\JobPostController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\VisaApplyController;
use Illuminate\Support\Facades\Route;


Route::prefix('admin')->middleware('guest')->group(function () {

    Route::get('login', [AuthController::class, 'create'])
        ->name('admin.login');

    Route::post('login/store', [AuthController::class, 'store'])
        ->name('admin.login.store');

});


Route::prefix('admin')->middleware(['auth', 'admin'])->name('admin.')->group(function () {

    Route::get('dashboard', [DashboardController::class, 'index'])
        ->name('dashboard.index');

    Route::resource('visa-applies', VisaApplyController::class);

    Route::get('admins', [AdminController::class, 'index'])->name('admins.index');

    Route::post('admins/store', [AdminController::class, 'store'])->name('admins.store');

    Route::put('admins/update/{id}', [AdminController::class, 'update'])->name('admins.update');

    Route::delete('admins/delete/{id}', [AdminController::class, 'destroy'])->name('admins.delete');

    Route::get('roles', [RoleController::class, 'index'])->name('roles.index');
    Route::post('roles/store', [RoleController::class, 'store'])->name('roles.store');
    Route::put('roles/update/{id}', [RoleController::class, 'update'])->name('roles.update');

    Route::resource('job-posts', JobPostController::class);

    Route::get('agencies', [AgencyController::class, 'index'])->name('agencies.index');

    Route::get('agencies/{id}', [AgencyController::class, 'show'])->name('agencies.show');

    Route::get('agencies/{id}/approve', [AgencyController::class, 'approve'])->name('agencies.approve');

    Route::get('users', [UserController::class, 'index'])->name('users.index');
    Route::get('users/create', [UserController::class, 'create'])->name('users.create');
    Route::post('users/store', [UserController::class, 'store'])->name('users.store');

});
