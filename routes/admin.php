<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\VisaApplyController;
use Illuminate\Support\Facades\Route;

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

});
