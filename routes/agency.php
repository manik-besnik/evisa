<?php

use App\Http\Controllers\Agency\DashboardController;
use Illuminate\Support\Facades\Route;

Route::prefix('agency')->name('agency.')->group(function () {

    Route::get('dashboard',[DashboardController::class,'index'])->name('admin.index');

})->middleware(['auth','agency']);
