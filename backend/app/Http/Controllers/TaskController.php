<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\JsonResponse;

class TaskController extends Controller
{
    public function tasks(): JsonResponse
    {
        $tasks = Task::getQuery()->get();

        return response()->json($tasks);
    }
}
