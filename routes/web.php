<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\User\JobPostController;
use App\Http\Controllers\User\VisaApplyController;
use App\Http\Controllers\User\JobDemandController;
use App\Http\Controllers\User\CvCreateController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('search-visa', SearchController::class)->name('search');

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('privacy-policy');

Route::get('/terms-conditions', function () {
    return Inertia::render('TermsConditions');
})->name('terms-conditions');

Route::get('facebook-deletion', function () {
    return \App\Supports\ApiResponse::success('Data has been deleted');
});

Route::get('/job-details', function () {
    return Inertia::render('JobDetails');
})->name('job-details');



// Route::get('job-demand', [JobPostController::class, 'index'])->name('job-demand');
// Route::get('job-demand/{job}', [JobPostController::class, 'show'])->name('job-demand.show');

Route::middleware(['auth', 'user'])->group(function () {

    Route::get('user-info', [ProfileController::class, 'userInfo'])->name('user.info');

    Route::put('store-user-info', [ProfileController::class, 'storeInfo'])->name('user.info.store');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('report', [VisaApplyController::class, 'index'])->name('visa-apply.index');
    Route::get('visa-apply/{id}/details', [VisaApplyController::class, 'show'])->name('visa-apply.show');

    Route::get('visa-apply', [VisaApplyController::class, 'create'])->name('visa-apply.create');
    Route::get('visa', [VisaApplyController::class, 'visa'])->name('visa.create');
    Route::get('job-demand', [JobDemandController::class, 'create'])->name('job-demand.create');
    Route::get('single-job-demand', [JobDemandController::class, 'singleJobDemand'])->name('single-job-demand.create');
    Route::get('more-job-demand', [JobDemandController::class, 'moreJobDemand'])->name('more-job-demand.create');
    Route::post('/job-demand', [JobDemandController::class, 'store'])->name('job-demand.store');

    Route::post('visa-apply/store', [VisaApplyController::class, 'store'])->name('visa-apply.store');

    Route::get('dashboard', [\App\Http\Controllers\User\DashboardController::class, 'index'])->name('user.dashboard.index');

    Route::get('job-apply', [JobPostController::class, 'create'])->name('job-posts.create');
    Route::get('job', [\App\Http\Controllers\User\JobPostController::class, 'job'])->name('job.create');
    Route::get('jobs/{id}/details', [\App\Http\Controllers\User\JobPostController::class, 'jobsDetails'])->name('job.details');
    Route::get('/job-pdf/{id}', [\App\Http\Controllers\User\JobPostController::class, 'generatePdf'])->name('job.pdf');
    Route::get('job-directory', [\App\Http\Controllers\User\JobPostController::class, 'jobDirectory'])->name('job.directory');
    Route::get('job-view', [\App\Http\Controllers\User\JobPostController::class, 'jobView'])->name('job.view');
    Route::post('job-apply/store', [JobPostController::class, 'store'])->name('job-posts.store');

    Route::get('job-applies', [JobPostController::class, 'jobApplyList'])->name('job-apply.list');

    //cvCreate
    Route::get('cv-create', [CvCreateController::class, 'create'])->name('cv.create');
});


Route::get('google/redirect3', function () {})->name('dashboard');
Route::get('google', function () {})->name('task.create');

Route::inertia('others', 'Other')->name('others');
Route::inertia('search', 'Search');

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/agency.php';
