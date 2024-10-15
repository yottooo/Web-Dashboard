<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/board', function () {
    return Inertia::render('Board');
})->name('board');
//TODO edit page
Route::get('/edit/{index}', function () {
    return Inertia::render('Edit');
})->name('board');


require __DIR__.'/auth.php';
