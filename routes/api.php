<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ExtreactTextController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->name('api.')->group(function () {

    Route::post('user/store-info', [AuthController::class, 'storeInfo'])->name('user.store-info');
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('countries', function () {
    $data = [
        'countries' => \App\Supports\Country::get(),
        'languages' => \App\Models\Language::query()->get(),
    ];
    return \App\Supports\ApiResponse::success("Country and Language Data", $data);
});

Route::post('/login', [AuthController::class, 'store'])->name('api.login.store');

Route::post('extreact-image', ExtreactTextController::class)->name('extreact-text');
