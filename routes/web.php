<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


//Views
Route::get('/board', function () {
    return Inertia::render('Board');
})->name('board');
//TODO edit page
Route::get('/edit/{index}', function () {
    return Inertia::render('Edit');
})->name('board');

//Actions
Route::get('/getButtons',    [ButtonController::class, 'getButtons'])  ->name('get');
Route::post('/saveButton',   [ButtonController::class, 'saveButton'])  ->name('save');
Route::post('/deleteButton', [ButtonController::class, 'deleteButton'])->name('delete');


require __DIR__.'/auth.php';
