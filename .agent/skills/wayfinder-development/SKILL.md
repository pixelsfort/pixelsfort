---
name: wayfinder-development
description: >-
  Use this skill for Laravel Wayfinder which auto-generates typed functions for Laravel controllers and routes.
  ALWAYS use this skill when frontend code needs to call backend routes or controller actions. Trigger when: connecting any
  React/Vue/Svelte/Inertia frontend to Laravel controllers, routes, building end-to-end features with both frontend and backend,
  wiring up forms or links to backend endpoints, fixing route-related TypeScript errors, importing from @/actions or @/routes,
  or running wayfinder:generate. Use Wayfinder route functions instead of hardcoded URLs.
---

# Wayfinder Development

## Description
This skill provides developer guidance for using Laravel Wayfinder to auto-generate type-safe TypeScript functions for Laravel controllers and routes. It covers CLI generation commands, tree-shaking import syntax, `.url()`, `.get()`, `.post()`, `.form()` helper methods, query parameters, route model binding, and Inertia integration.

## System Instructions

### Documentation
Use `search-docs` for detailed Wayfinder patterns and documentation.

### Quick Reference

#### Generate Routes
Run after route changes if Vite plugin isn't installed:
```bash
php artisan wayfinder:generate --no-interaction
```
For form helpers, use `--with-form` flag:
```bash
php artisan wayfinder:generate --with-form --no-interaction
```

#### Import Patterns
```typescript
// Named imports for tree-shaking (preferred)...
import { show, store, update } from '@/actions/App/Http/Controllers/PostController'

// Named route imports...
import { show as postShow } from '@/routes/post'
```

#### Common Methods
```typescript
// Get route object...
show(1) // { url: "/posts/1", method: "get" }

// Get URL string...
show.url(1) // "/posts/1"

// Specific HTTP methods...
show.get(1)
store.post()
update.patch(1)
destroy.delete(1)

// Form attributes for HTML forms...
store.form() // { action: "/posts", method: "post" }

// Query parameters...
show(1, { query: { page: 1 } }) // "/posts/1?page=1"
```

### Wayfinder + Inertia
Use Wayfinder with the `<Form>` component:
```typescript
<Form {...store.form()}><input name="title" /></Form>
```

### Verification
1. Run `php artisan wayfinder:generate` to regenerate routes if Vite plugin isn't installed
2. Check TypeScript imports resolve correctly
3. Verify route URLs match expected paths

### Common Pitfalls
- Using default imports instead of named imports (breaks tree-shaking)
- Forgetting to regenerate after route changes
- Not using type-safe parameter objects for route model binding
