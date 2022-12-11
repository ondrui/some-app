<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class Categories extends Controller
{
	public function index()
	{
		$categories = Category::all();
		return response()->json($categories);
	}
}
