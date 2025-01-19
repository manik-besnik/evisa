<?php

use App\Http\Controllers\Admin\DashboardController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin.')->name('admin.')->group(function () {

    Route::get('dashboard',[DashboardController::class,'index'])
        ->name('dashboard.index');

})->middleware(['auth','admin']);
