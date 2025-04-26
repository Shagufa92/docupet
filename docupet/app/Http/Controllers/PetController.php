<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class PetController extends Controller
{

    public function index(): JsonResponse {
        $pets = Pet::with(['petType', 'petBreed'])->get();

        $formatted = $pets->map(function ($pet) {
            return [
                'id' => $pet->id,
                'name' => $pet->name,
                'age' => $pet->age,
                'dob' => $pet->dob,
                'gender' => $pet->gender,
                'pet_type' => $pet->petType->name ?? null,
                'breed' => $pet->petBreed->name ?? null,
                'is_dangerous' => $pet->petBreed->is_dangerous ?? false,
            ];
        });

        return response()->json([
            'success' => true,
            'data' => $formatted,
        ]);
    }

    public function create(Request $request): JsonResponse {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'age' => 'required|integer|min:0',
                'dob' => 'date|nullable',
                'gender' => 'required|in:Male,Female',
                'pet_type_id' => 'required',
                'breed_id' => 'nullable|integer|min:1',
            ]);

            $pet = Pet::create($validated);

            return response()->json([
                'success' => true,
                'message' => 'Pet created successfully.',
                'data' => $pet,
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
