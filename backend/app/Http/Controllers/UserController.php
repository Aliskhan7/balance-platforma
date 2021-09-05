<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Achievement;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
class UserController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function profile(Request $request): JsonResponse
    {
        $achievement_ids = DB::table('achievement_user')->where('achievement_user.user_id', Auth::user()->id)->pluck('achievement_id')->toArray();

        return response()->json([
            'user'=>User::getQuery()->where(User::TABLE.'.id',Auth::user()->id)->get(),
            'achievements'=> Achievement::whereIn('id', $achievement_ids)->get(),
        ]);
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
