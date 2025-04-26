<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\PetBreed;
use Exception;
use Illuminate\Validation\ValidationException;

class BreedController extends Controller
{
    public function getByPetType($id): JsonResponse {
        try {
            $breeds = PetBreed::where('pet_type_id', $id)->get();

            if ($breeds->isEmpty()) {
                return response()->json([
                    'success' => false,
                    'message' => 'No breeds found for this pet type',
                ], 404);
            }
        
            return response()->json([
                'success' => true,
                'data' => $breeds,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function create(Request $request): JsonResponse {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'pet_type_id' => 'required',
            ]);

            $breed = PetBreed::create($validated);

            return response()->json([
                'success' => true,
                'message' => 'Breed created successfully.',
                'data' => $breed,
            ], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed.',
                'errors' => $e->errors(),
            ], 422);

        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong.',
                'error' => $e->getMessage(),
            ], 500);

        }
    }
}
