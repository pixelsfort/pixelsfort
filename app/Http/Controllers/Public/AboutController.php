<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    /**
     * Display the public about us page.
     */
    public function index(): Response
    {
        return Inertia::render('public/about/about');
    }
}
