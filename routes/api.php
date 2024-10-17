<?php

use App\Http\Controllers\ButtonController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Actions
Route::get('/getButton/{id}',[ButtonController::class, 'getButton'])   ->name('getOne');
Route::get('/getButtons',    [ButtonController::class, 'getButtons'])  ->name('getAll');
Route::post('/saveButton',   [ButtonController::class, 'saveButton'])  ->name('save');
Route::post('/deleteButton', [ButtonController::class, 'deleteButton'])->name('delete');
