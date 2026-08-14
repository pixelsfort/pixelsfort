---
name: pest-testing
description: >-
  Use this skill for Pest PHP testing in Laravel projects only. Trigger whenever any test is being written, edited, fixed,
  or refactored — including fixing tests that broke after a code change, adding assertions, converting PHPUnit to Pest,
  adding datasets, and TDD workflows. Always activate when user asks how to write something in Pest, mentions test files/directories
  (tests/Feature, tests/Unit, tests/Browser), browser testing, smoke testing multiple pages for JS errors, architecture tests,
  or faster test runs with Test Impact Analysis (TIA).
---

# Pest Testing 5

## Description
This skill governs writing, refactoring, and executing unit, feature, browser, and architecture tests using Pest PHP 5 in Laravel projects. It provides instructions on CLI generators, assertions, datasets, mocking, browser automation, smoke testing, visual regression, and Test Impact Analysis (TIA).

## System Instructions

### Documentation
Use `search-docs` for detailed Pest 5 patterns and documentation.

### Basic Usage

#### Creating Tests
All tests must be written using Pest. Use `php artisan make:test --pest {name}`.

The `{name}` argument should include only the path and test name, but should not include the test suite:
- Incorrect: `php artisan make:test --pest Feature/SomeFeatureTest`
- Correct: `php artisan make:test --pest SomeControllerTest`
- Incorrect: `php artisan make:test --pest --unit Unit/SomeServiceTest`
- Correct: `php artisan make:test --pest --unit SomeServiceTest`

#### Test Organization
- Unit/Feature tests: `tests/Feature` and `tests/Unit` directories.
- Browser tests: `tests/Browser/` directory.
- Do NOT remove tests without approval - these are core application code.

#### Basic Test Structure
Pest supports both `test()` and `it()` functions. Match the existing file's convention.

```php
it('is true', function () {
    expect(true)->toBeTrue();
});
```

#### Running Tests
- Run minimal tests with filter before finalizing: `php artisan test --compact --filter=testName`.
- Run all tests: `php artisan test --compact`.
- Run file: `php artisan test --compact tests/Feature/ExampleTest.php`.
- Run only tests affected by recent changes (Tia): `./vendor/bin/pest --parallel --tia`.

### Assertions
Use specific assertions (`assertSuccessful()`, `assertNotFound()`) instead of `assertStatus()`:

```php
it('returns all', function () {
    $this->postJson('/api/docs', [])->assertSuccessful();
});
```

| Use | Instead of |
|-----|------------|
| `assertSuccessful()` | `assertStatus(200)` |
| `assertNotFound()` | `assertStatus(404)` |
| `assertForbidden()` | `assertStatus(403)` |

### Mocking
Import mock function before use: `use function Pest\Laravel\mock;`

### Datasets
Use datasets for repetitive tests (validation rules, etc.):

```php
it('has emails', function (string $email) {
    expect($email)->not->toBeEmpty();
})->with([
    'james' => 'james@laravel.com',
    'taylor' => 'taylor@laravel.com',
]);
```

### Pest 5 Features

| Feature | Purpose |
|---------|---------|
| Tia (Test Impact Analysis) | Rerun only tests affected by recent changes |
| Time-Balanced Sharding | Split tests across CI shards by execution time |
| New Validation Expectations | `toBeEmail()`, `toBeUlid()`, `toBeIpAddress()`, and more |
| Browser Testing | Full integration tests in real browsers |
| Smoke Testing | Validate multiple pages quickly |
| Visual Regression | Compare screenshots for visual changes |
| Architecture Testing | Enforce code conventions |

#### Tia (Test Impact Analysis)
```shell
./vendor/bin/pest --parallel --tia
```

#### New Validation Matchers
```php
expect('nuno@pestphp.com')->toBeEmail();
expect('01ARZ3NDEKTSV4RRFFQ69G5FAV')->toBeUlid();
expect('192.168.1.1')->toBeIpAddress();
expect('00:1a:2b:3c:4d:5e')->toBeMacAddress();
expect('example.com')->toBeHostname();
expect('example.co.uk')->toBeDomain();
expect('Zm9vYmFy')->toBeBase64();
expect('deadbeef')->toBeHexadecimal();
```

#### Browser Test Example
```php
it('may reset the password', function () {
    Notification::fake();

    $this->actingAs(User::factory()->create());

    $page = visit('/sign-in');

    $page->assertSee('Sign In')
        ->assertNoJavaScriptErrors()
        ->click('Forgot Password?')
        ->fill('email', 'nuno@laravel.com')
        ->click('Send Reset Link')
        ->assertSee('We have emailed your password reset link!');

    Notification::assertSent(ResetPassword::class);
});
```

#### Smoke Testing
```php
$pages = visit(['/', '/about', '/contact']);
$pages->assertNoJavaScriptErrors()->assertNoConsoleLogs();
```

#### Architecture Testing
```php
arch('controllers')
    ->expect('App\Http\Controllers')
    ->toExtendNothing()
    ->toHaveSuffix('Controller');
```

### Common Pitfalls
- Not importing `use function Pest\Laravel\mock;` before using mock
- Using `assertStatus(200)` instead of `assertSuccessful()`
- Forgetting datasets for repetitive validation tests
- Deleting tests without approval
- Forgetting `assertNoJavaScriptErrors()` in browser tests
- Prefixing `Feature/` or `Unit/` in `{name}` when using `make:test`
