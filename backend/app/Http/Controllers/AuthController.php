<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // FIXME create single request
    public function login(Request $request): JsonResponse
    {
        if (
            Auth::attempt([
              'email' => $request->input('login'),
              'password' => $request->input('password'),
            ])
        ) {
            $user = Auth::user();

            return response()->json([
                'token' => Auth::user()->createToken('token')->plainTextToken,
                'user' => $user
            ]);
        }

        return response()->json([
            'message' => 'Unauthorized'
        ], 401);
    }
}
