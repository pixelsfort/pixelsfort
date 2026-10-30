<?php

use Inertia\Testing\AssertableInertia as Assert;

test('blog archive page can be rendered', function () {
    $response = $this->get(route('blog'));

    $response->assertOk();
    $response->assertInertia(fn (Assert $page) => $page
        ->component('public/blog/blog')
    );
});

test('single blog post page can be rendered with valid slug', function () {
    $response = $this->get(route('blog.show', ['slug' => 'scaling-laravel-octane-microservices-kafka']));

    $response->assertOk();
    $response->assertInertia(fn (Assert $page) => $page
        ->component('public/blog/show')
        ->where('slug', 'scaling-laravel-octane-microservices-kafka')
    );
});
