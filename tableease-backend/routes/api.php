<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ReservationController;

Route::post('/login', [AuthController::class, 'login']);

Route::post('/reservations', [
    ReservationController::class,
    'store'
]);

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/reservations', [
        ReservationController::class,
        'index'
    ]);

    Route::get('/reservations/{id}', [
        ReservationController::class,
        'show'
    ]);

    Route::patch('/reservations/{id}', [
        ReservationController::class,
        'update'
    ]);

    Route::delete('/reservations/{id}', [
        ReservationController::class,
        'destroy'
    ]);

    Route::post('/logout', [
        AuthController::class,
        'logout'
    ]);
});