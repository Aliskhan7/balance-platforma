<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function products(): JsonResponse
    {
        $products = Product::getQuery()->get();

        return response()->json([
            Product::TYPE_GADGET => $products->where('type', Product::TYPE_GADGET),
            Product::TYPE_SUBSCRIPTION => $products->where('type', Product::TYPE_SUBSCRIPTION),
        ]);
    }
}
