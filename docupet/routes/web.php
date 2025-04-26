<?php

use App\Http\Controllers\BreedController;
use App\Http\Controllers\PetController;
use App\Http\Controllers\PetTypeController;

use Illuminate\Support\Facades\Route;


Route::prefix('api')->group(function () {
    Route::get('/petTypes', [PetTypeController::class, 'index']);
    Route::get('/breeds/{pet_type_id}', [BreedController::class, 'getByPetType']);
    Route::post('/breed', [BreedController::class, 'create']);

    Route::get('/pets', [PetController::class, 'index']);
    Route::post('/pets', [PetController::class, 'create']);
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');