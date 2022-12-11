<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class Posts extends Controller
{
	public function index()
	{
		$posts = Post::all();
		return response()->json($posts);
	}

	public function store(Request $request)
	{
		$post = Post::create($request->validate([
			'category_id' => 'required',
			'title' => 'required | min: 4',
			'content' => 'required | min: 10',
		]));
		return $post;
	}

	public function show(Post $post)
	{
		return $post;
	}

	public function update(Request $request, Post $post)
	{
		$post->save($request->validated());
		return true;
	}

	public function destroy(Post $post)
	{
		$post->delete();
		return true;
	}
}
