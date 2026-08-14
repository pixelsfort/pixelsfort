# PixelsFort Domain & Directory Structure Architecture

This document outlines the official architectural structure for organizing frontend pages, components, layouts, backend controllers, and routes in **PixelsFort** into two distinct domain spaces: **`admin`** (Dashboard & CMS Settings) and **`public`** (Website & Marketing Pages).

---

## 1. Architectural Strategy & Domain Separation

To keep code maintainable as PixelsFort grows, application logic is divided cleanly by domain intent:

| Domain | Target Scope | Security / Access | Primary Layout | Primary Controllers |
| :--- | :--- | :--- | :--- | :--- |
| **`admin`** | Dashboard, CMS Content Management (Posts, Pages, Media), Admin & System Settings, User Management | Auth + Verification Required (`auth`, `verified`) | `AdminLayout` / `SettingsLayout` | `App\Http\Controllers\Admin\*` |
| **`public`** | Homepage, About, Contact, Services, Public Blog Archive & Posts, Legal Pages | Open Access (Guest/Public) | `PublicLayout` / `LandingLayout` | `App\Http\Controllers\Public\*` |
| **`auth`** | Passkey Login, Fortify 2FA, User Registration, Password Reset | Guest / Throttled (`guest`, `throttle`) | `AuthLayout` | Laravel Fortify Actions |

---

## 2. Complete Folder Structure Reference

### 2.1 Frontend Pages (`resources/js/pages/`)

All Inertia React page components are grouped under `admin/`, `public/`, or `auth/`.

```text
resources/js/pages/
├── admin/                         # 🔒 Admin Dashboard & CMS Settings
│   ├── dashboard.tsx              # Admin main overview dashboard
│   ├── cms/                       # CMS Content Management
│   │   ├── posts/
│   │   │   ├── index.tsx          # Post list & table view
│   │   │   ├── create.tsx         # Create post form
│   │   │   └── edit.tsx           # Edit post form
│   │   ├── pages/
│   │   │   ├── index.tsx          # Dynamic site pages table
│   │   │   └── edit.tsx           # Page builder / content editor
│   │   └── media/
│   │       └── index.tsx          # Media library asset browser
│   ├── settings/                  # System & User Configuration
│   │   ├── profile.tsx            # Admin profile details & password
│   │   ├── security.tsx           # 2FA setup & Passkey management
│   │   ├── appearance.tsx         # Color scheme / theme switcher
│   │   └── site.tsx               # General CMS site settings (SEO, analytics)
│   └── users/                     # User & Role Administration
│       ├── index.tsx              # Users list
│       └── edit.tsx               # Edit user roles/permissions
│
├── public/                        # 🌐 Public Website Pages
│   ├── home.tsx                   # Main Public Homepage (formerly welcome.tsx)
│   ├── about.tsx                  # Company About Us page
│   ├── contact.tsx                # Public Contact Us page
│   ├── blog/                      # Public Blog / News Section
│   │   ├── index.tsx              # Blog archive listing page
│   │   └── show.tsx               # Single blog post reader
│   ├── services/                  # Products & Services Showcase
│   │   ├── index.tsx
│   │   └── show.tsx
│   └── legal/                     # Terms & Privacy Policies
│       ├── privacy.tsx
│       └── terms.tsx
│
└── auth/                          # 🔑 Authentication Pages (Fortify)
    ├── login.tsx                  # Passkey / Email login
    ├── register.tsx               # Account registration
    ├── forgot-password.tsx        # Password reset request
    ├── reset-password.tsx         # Password reset form
    └── verify-email.tsx           # Email verification screen
```

---

### 2.2 Frontend Layouts (`resources/js/layouts/`)

Layouts are grouped to isolate public headers/footers from admin sidebar navigation.

```text
resources/js/layouts/
├── admin/                         # Dashboard & CMS Layouts
│   ├── admin-layout.tsx           # Sidebar navigation + header wrapper
│   └── settings-layout.tsx        # Tabbed navigation wrapper for settings
│
├── public/                        # Website Layouts
│   ├── public-layout.tsx          # Main header navbar + footer wrapper
│   └── landing-layout.tsx         # Full-width hero layout for marketing
│
└── auth/                          # Authentication Layout
    └── auth-layout.tsx            # Centered brand card container
```

---

### 2.3 Frontend Components (`resources/js/components/`)

```text
resources/js/components/
├── admin/                         # Admin-only Components
│   ├── app-sidebar.tsx            # Collapsible dashboard sidebar
│   ├── app-header.tsx             # Header bar with user dropdown & breadcrumbs
│   ├── breadcrumbs.tsx            # Dynamic route navigation path
│   ├── cms-editor.tsx             # Rich content text editor
│   └── stats-card.tsx             # Dashboard metric card widget
│
├── public/                        # Public-only Components
│   ├── site-header.tsx            # Website header navbar
│   ├── site-footer.tsx            # Footer navigation & social links
│   ├── hero-section.tsx           # Homepage banner showcase
│   └── contact-form.tsx           # Interactive contact form card
│
├── ui/                            # Primitive UI Controls (Shadcn / Tailwind)
│   ├── button.tsx
│   ├── input.tsx
│   ├── modal.tsx
│   ├── table.tsx
│   └── dropdown-menu.tsx
│
└── common/                        # Cross-Domain Utilities
    ├── alert-error.tsx
    ├── avatar.tsx
    └── logo.tsx
```

---

### 2.4 Backend Controllers (`app/Http/Controllers/`)

Backend controllers mirror the frontend directory structure:

```text
app/Http/Controllers/
├── Admin/                         # Admin & CMS Controllers
│   ├── DashboardController.php
│   ├── Cms/
│   │   ├── PostController.php
│   │   ├── PageController.php
│   │   └── MediaController.php
│   ├── Settings/
│   │   ├── ProfileController.php
│   │   ├── SecurityController.php
│   │   └── AppearanceController.php
│   └── UserController.php
│
├── Public/                        # Public Website Controllers
│   ├── HomeController.php
│   ├── BlogController.php
│   ├── ContactController.php
│   └── PageController.php
│
└── Auth/                          # Auth Controllers
```

---

### 2.5 Backend Route Files (`routes/`)

Organize routes into dedicated files to prevent `routes/web.php` from becoming bloated.

```text
routes/
├── web.php                        # Public website routes
├── admin.php                      # Admin dashboard & CMS settings routes
└── settings.php                   # Modular settings routes included in admin.php
```

---

## 3. Implementation Examples

### 3.1 Public Controller (`app/Http/Controllers/Public/HomeController.php`)

```php
namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('public/home', [
            'heroTitle' => 'Crafting High-Performance Digital Experiences',
        ]);
    }
}
```

### 3.2 Admin CMS Controller (`app/Http/Controllers/Admin/Cms/PostController.php`)

```php
namespace App\Http\Controllers\Admin\Cms;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/cms/posts/index', [
            'posts' => Post::latest()->paginate(10),
        ]);
    }
}
```

### 3.3 Route Definitions (`routes/web.php` & `routes/admin.php`)

#### Public Routes (`routes/web.php`):
```php
use App\Http\Controllers\Public\BlogController;
use App\Http\Controllers\Public\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}', [BlogController::class, 'show'])->name('blog.show');

require __DIR__ . '/admin.php';
```

#### Admin Routes (`routes/admin.php`):
```php
use App\Http\Controllers\Admin\Cms\PostController;
use App\Http\Controllers\Admin\DashboardController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->prefix('admin')->as('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('posts', PostController::class);

    require __DIR__ . '/settings.php';
});
```

---

## 4. Laravel Wayfinder Integration

Laravel Wayfinder generates type-safe TypeScript functions for controllers and named routes. When organizing controllers into `Admin` and `Public` namespaces, Wayfinder outputs corresponding imports:

```tsx
// Frontend Page (React)
import { index as getPosts } from '@/actions/admin/cms/post-controller';
import { index as getHome } from '@/actions/public/home-controller';
import { Link } from '@inertiajs/react';

export default function AdminNav() {
    return (
        <Link href={getPosts()}>Manage Posts</Link>
    );
}
```

After modifying controller namespaces or routes, regenerate Wayfinder actions:

```bash
pnpm wayfinder:generate
# Or via dev watcher (pnpm dev)
```

---

## 5. Summary Checklist for Migration

> [!NOTE]
> When moving existing files into this organized structure, update the following 4 areas:
> 1. **Inertia Page Paths**: Update `Inertia::render('welcome')` $\rightarrow$ `Inertia::render('public/home')`
> 2. **React Imports**: Update relative component/layout import paths in page components
> 3. **Controller Namespaces**: Move files into `App\Http\Controllers\Admin` or `App\Http\Controllers\Public`
> 4. **Wayfinder Types**: Run `pnpm wayfinder:generate` or ensure `pnpm dev` is running to regenerate `@/actions` and `@/routes` bindings.
