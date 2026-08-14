# PixelsFort Asset & Image Management Guidelines

This document outlines the official strategy for managing, storing, and serving image assets in the **PixelsFort** dynamic company website built with **Laravel, Inertia.js (React), and Vite**.

---

## 1. Architectural Overview & Strategy Matrix

In a dynamic company website featuring a CMS backend, images are categorized into three distinct layers based on how they are updated and processed:

| Category | Storage Path | Access / URL | Managed By | Purpose / Best Used For |
| :--- | :--- | :--- | :--- | :--- |
| **CMS Dynamic Content** | `storage/app/public/` | `/storage/...` | Laravel Storage Disk (`public`) | User/Admin uploads via CMS forms (Portfolio items, Hero banners, Team photos, Client logos, Blog cover images). |
| **Theme & UI Static Assets** | `resources/images/` | Vite Asset Pipeline | Vite Bundler / React Imports | PixelsFort branding logos, static UI icons, structural graphics, and default fallback image placeholders. |
| **Root Meta Files** | `public/` | Direct Root (`/...`) | Web Server Direct Access | `favicon.ico`, `robots.txt`, `manifest.json`, default OpenGraph social cards (`og-image.png`). |

---

## 2. Layer 1: Dynamic CMS Uploads (`storage/app/public/`)

### Setup Requirement
Ensure the public storage directory is linked to the `public/` web directory:
```bash
php artisan storage:link
```
This creates a symbolic link from `storage/app/public` to `public/storage`.

### Backend Controller Implementation (Uploading via CMS)
When handling form submissions from the CMS admin panel:

```php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,webp,svg|max:4096',
        ]);

        // Stores in storage/app/public/projects/
        $path = $request->file('image')->store('projects', 'public');

        Project::create([
            'title' => $validated['title'],
            'image_path' => $path, // Stores relative path: "projects/random_hash.webp"
        ]);

        return redirect()->back()->with('success', 'Project created successfully.');
    }
}
```

### Frontend Inertia/React Component Rendering
Pass the relative path from your Eloquent model or Inertia page props and prefix with `/storage/`:

```tsx
import defaultPlaceholder from '@/images/placeholder-project.webp';

interface Project {
    id: number;
    title: string;
    image_path: string | null;
}

export function PortfolioCard({ project }: { project: Project }) {
    const imageUrl = project.image_path
        ? `/storage/${project.image_path}`
        : defaultPlaceholder;

    return (
        <article className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-zinc-900">
            <img
                src={imageUrl}
                alt={project.title}
                className="h-48 w-full object-cover"
                loading="lazy"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
        </article>
    );
}
```

---

## 3. Layer 2: Static UI & Theme Assets (`resources/images/`)

Static assets that form the visual structure of the PixelsFort site remain in `resources/images/`.

### Benefits of Vite Bundling
* **Content Hashing:** Vite automatically hashes assets on build (e.g., `logo.a3f9e8.svg`), preventing stale browser caches.
* **Build Validation:** Missing assets cause build-time errors rather than runtime broken links.

### Importing in React Components
```tsx
import companyLogo from '@/images/pixelsfort-logo.svg';

export function Header() {
    return (
        <header className="flex items-center justify-between p-6">
            <img src={companyLogo} alt="PixelsFort Logo" className="h-8 w-auto" />
        </header>
    );
}
```

### Referencing in CSS/Tailwind
```css
.hero-banner {
    background-image: url('@/images/hero-pattern.svg');
}
```

---

## 4. Layer 3: Root Static & Meta Files (`public/`)

Files stored directly in `public/` are served unmodified at the site domain root.

* `public/favicon.ico` $\rightarrow$ Accessible at `https://pixelsfort.com/favicon.ico`
* `public/robots.txt` $\rightarrow$ Accessible at `https://pixelsfort.com/robots.txt`
* `public/og-image.png` $\rightarrow$ Accessible at `https://pixelsfort.com/og-image.png`

---

## 5. Summary Checklist for PixelsFort Developers

1. **CMS Uploads:** Always use `Storage::disk('public')->store('folder', 'public')` for user/admin content.
2. **Never commit user uploads to Git:** Ensure `storage/app/public/*` is in `.gitignore` (except `.gitignore` file inside storage).
3. **Provide Fallback Placeholders:** Store generic fallback graphics in `resources/images/` to handle CMS items created without images.
4. **Image Formats:** Prefer `.webp` or optimized `.svg` for general web content; use `.png`/`.jpg` when lossless or transparency is needed.
