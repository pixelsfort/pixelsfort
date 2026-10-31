<?php

use Inertia\Testing\AssertableInertia as Assert;

test('header navigation configuration file exists and has valid json format', function () {
    $filePath = resource_path('js/data/header-navigation.json');

    expect(file_exists($filePath))->toBeTrue();

    $content = file_get_contents($filePath);
    $data = json_decode($content, true);

    expect(json_last_error())->toBe(JSON_ERROR_NONE)
        ->and($data)->toBeArray()
        ->and(count($data))->toBeGreaterThan(0);
});

test('header navigation menus contain expected dropdowns and direct links', function () {
    $filePath = resource_path('js/data/header-navigation.json');
    $data = json_decode(file_get_contents($filePath), true);

    $ids = array_column($data, 'id');
    expect($ids)->toContain('services', 'solutions', 'company', 'blog');

    // Test services dropdown structure
    $services = collect($data)->firstWhere('id', 'services');
    expect($services)->not->toBeNull()
        ->and($services['label'])->toBe('Services')
        ->and($services['type'])->toBe('dropdown')
        ->and($services['items'])->toBeArray()
        ->and(count($services['items']))->toBe(6);

    foreach ($services['items'] as $item) {
        expect($item)->toHaveKeys(['label', 'href', 'icon', 'description']);
    }

    // Test solutions dropdown structure
    $solutions = collect($data)->firstWhere('id', 'solutions');
    expect($solutions)->not->toBeNull()
        ->and($solutions['label'])->toBe('Solutions')
        ->and($solutions['type'])->toBe('dropdown')
        ->and($solutions['items'])->toBeArray()
        ->and(count($solutions['items']))->toBe(4);

    foreach ($solutions['items'] as $item) {
        expect($item)->toHaveKeys(['label', 'href', 'icon', 'description']);
    }

    // Test company dropdown structure
    $company = collect($data)->firstWhere('id', 'company');
    expect($company)->not->toBeNull()
        ->and($company['label'])->toBe('Company')
        ->and($company['type'])->toBe('dropdown')
        ->and($company['items'])->toBeArray()
        ->and(count($company['items']))->toBe(5);

    foreach ($company['items'] as $item) {
        expect($item)->toHaveKeys(['label', 'href', 'icon', 'description']);
    }

    // Test direct links structure
    $directLinks = collect($data)->where('type', 'link');
    expect($directLinks->count())->toBe(1);

    foreach ($directLinks as $link) {
        expect($link)->toHaveKeys(['label', 'href', 'icon']);
    }
});

test('header components replace get started with contact us and remove login button', function () {
    $headerActionsContent = file_get_contents(resource_path('js/components/public/header/header-actions.tsx'));
    $mobileNavContent = file_get_contents(resource_path('js/components/public/header/mobile-nav.tsx'));

    // Verify Contact Us button exists in desktop and mobile header
    expect($headerActionsContent)->toContain('Contact Us')
        ->and($mobileNavContent)->toContain('Contact Us');

    // Verify Log in button is removed from header actions and mobile nav
    expect($headerActionsContent)->not->toContain('>Log in<')
        ->and($headerActionsContent)->not->toContain('login.url()')
        ->and($mobileNavContent)->not->toContain('>Log in<')
        ->and($mobileNavContent)->not->toContain('login.url()');

    // Verify Get Started button is removed from header actions and mobile nav
    expect($headerActionsContent)->not->toContain('Get Started')
        ->and($mobileNavContent)->not->toContain('Get Started');
});

test('home page renders with site header layout', function () {
    $response = $this->get(route('home'));

    $response->assertOk();
    $response->assertInertia(fn (Assert $page) => $page
        ->component('public/home/home')
    );
});
