<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function profile(Request $request): JsonResponse
    {
        return response()->json(Auth::user());
    }

    /**
     * @param int $top
     * @return JsonResponse
     */
    public function rating(int $top = 10): JsonResponse
    {
        $users_rating = User::getQuery()->orderByDesc('overall_score')->take($top)->get();

        return response()->json($users_rating);
    }
}
