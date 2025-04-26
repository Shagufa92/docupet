<?php

namespace App\Http\Controllers;

use App\Models\PetType;
use Exception;
use Illuminate\Http\JsonResponse;

class PetTypeController extends Controller
{
    public function index(): JsonResponse {
        try {
            $types = PetType::with(['breeds'])->get();

            if ($types->isEmpty()) {
                return response()->json([
                    'success' => false,
                    'message' => 'No breeds found for this pet type',
                ], 404);
            }
        
            return response()->json([
                'success' => true,
                'data' => $types,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
