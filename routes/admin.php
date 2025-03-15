<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AgencyController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\JobDemandController;
use App\Http\Controllers\Admin\JobPostController;
use App\Http\Controllers\Admin\NotificationController;
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

Route::get('visa-info/{user_id}', [VisaApplyController::class, 'visaInfo'])->name('visa-info');

Route::prefix('admin')->middleware(['auth', 'admin'])->name('admin.')->group(function () {

    Route::get('dashboard', [DashboardController::class, 'index'])
        ->name('dashboard.index');

    Route::post('visa-applies/{id}/add-document', [VisaApplyController::class, 'addDocument'])->name('visa-applies.add-document');

    Route::put('visa-applies/{id}/change-status', [VisaApplyController::class, 'changeStatus'])->name('visa-applies.change-status');

    Route::post('visa-applies/{visa_apply}', [VisaApplyController::class, 'update'])->name('visa-applies.update');
    Route::resource('visa-applies', VisaApplyController::class)->except(['update']);

    Route::get('visa-applies/download-pdf', [VisaApplyController::class, 'downloadPdf'])->name('visa-applies.download-pdf');

    Route::delete('visa-applies/{visa_apply}/document-delete', [VisaApplyController::class, 'deleteDocument'])->name('visa-applies.delete.document');

    Route::get('admins', [AdminController::class, 'index'])->name('admins.index');

    Route::post('admins/store', [AdminController::class, 'store'])->name('admins.store');

    Route::put('admins/update/{id}', [AdminController::class, 'update'])->name('admins.update');

    Route::delete('admins/delete/{id}', [AdminController::class, 'destroy'])->name('admins.delete');

    Route::get('roles', [RoleController::class, 'index'])->name('roles.index');
    Route::post('roles/store', [RoleController::class, 'store'])->name('roles.store');
    Route::put('roles/update/{id}', [RoleController::class, 'update'])->name('roles.update');

    Route::get('job-posts/applications', [JobPostController::class, 'applications'])->name('job-posts.applications');
    Route::get('job-demand/applications', [JobDemandController::class, 'jobDemandApplications'])->name('job-demand.applications');
    Route::resource('job-posts', JobPostController::class);
    Route::resource('job-demands', JobDemandController::class);

    Route::get('agencies', [AgencyController::class, 'index'])->name('agencies.index');

    Route::get('agencies/{id}', [AgencyController::class, 'show'])->name('agencies.show');

    Route::get('agencies/{id}/approve', [AgencyController::class, 'approve'])->name('agencies.approve');

    Route::get('users', [UserController::class, 'index'])->name('users.index');
    Route::get('users/create', [UserController::class, 'create'])->name('users.create');
    Route::post('users/store', [UserController::class, 'store'])->name('users.store');

    Route::get('notifications/{id}', [NotificationController::class, 'show'])->name('notifications.show');
});
