<?php

use Inertia\Testing\AssertableInertia as Assert;

test('about page can be rendered', function () {
    $response = $this->get(route('about'));

    $response->assertOk();
    $response->assertInertia(fn (Assert $page) => $page
        ->component('public/about/about')
    );
});
