<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    /**
     * Display the public blog archive page.
     */
    public function index(): Response
    {
        return Inertia::render('public/blog/blog');
    }

    /**
     * Display a single blog post.
     */
    public function show(string $slug): Response
    {
        return Inertia::render('public/blog/show', [
            'slug' => $slug,
        ]);
    }
}
