<?php

use App\Http\Controllers\ButtonController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


//Views
Route::get('/board', function () {
    return Inertia::render('Board');
})->name('board');

Route::get('/edit/{index}', [ButtonController::class, 'edit'])->name('edit');

require __DIR__.'/auth.php';
