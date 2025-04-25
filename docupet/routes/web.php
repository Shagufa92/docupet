<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BreedController;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/breeds', [BreedController::class, 'index']);
Route::get('/breeds/{pet_type_id}', [BreedController::class, 'getByPetType']);