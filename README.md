# PixelsFort Website

![PHP](https://img.shields.io/badge/PHP-8.3%2B-777BB4?style=flat-square&logo=php&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-13.x-FF2D20?style=flat-square&logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)
![Inertia.js](https://img.shields.io/badge/Inertia.js-v3-9553E9?style=flat-square&logo=inertia&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Sail-2496ED?style=flat-square&logo=docker&logoColor=white)
![Pest](https://img.shields.io/badge/Pest-v5-48B0F7?style=flat-square&logo=pest&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-9.x-F69220?style=flat-square&logo=pnpm&logoColor=white)

PixelsFort is a modern, high-performance web application built with **Laravel 13**, **React 19**, **Inertia.js v3**, and **Tailwind CSS v4**. It features an enterprise-ready architecture with passwordless Passkey authentication, Two-Factor Authentication (2FA), end-to-end TypeScript routing via Laravel Wayfinder, and a pre-configured Docker development environment powered by Laravel Sail.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
    - [Option A: Docker & Laravel Sail (Recommended)](#option-a-docker--laravel-sail-recommended)
    - [Option B: Native Local Setup](#option-b-native-local-setup)
- [Available Scripts](#-available-scripts)
- [Project Architecture](#-project-architecture)
- [Authentication & Passkeys](#-authentication--passkeys)
- [Testing & Quality Assurance](#-testing--quality-assurance)
- [License](#-license)

---

## ✨ Features

- ⚡ **Inertia.js v3 + React 19 SPA**: Enjoy single-page application responsiveness combined with server-side routing simplicity and zero API glue code.
- 🔑 **Passkey & 2FA Security**: Advanced authentication suite featuring passwordless Passkey (WebAuthn) enrollment and Two-Factor Authentication powered by Laravel Fortify.
- 🗺️ **Laravel Wayfinder**: Automatically generates type-safe TypeScript helper functions (`@/routes` & `@/actions`) directly from backend Laravel routes and controllers.
- 🎨 **Modern Design System**: Styled with Tailwind CSS v4, Radix UI accessible primitives, Lucide React icons, and Sonner toast notifications.
- 🐳 **Docker-Ready (Sail)**: Instant containerized development environment with PHP 8.5 runtime and MySQL 8.4 database pre-configured.
- 🧪 **Automated Testing & Linting**: Built-in test suite using Pest PHP 5, static analysis with Larastan, formatting via Laravel Pint, ESLint, and Prettier.

---

## 🛠 Tech Stack

| Layer                     | Technology                                                                                                               | Description                                      |
| :------------------------ | :----------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------- |
| **Backend**               | [Laravel 13](https://laravel.com/)                                                                                       | Modern PHP framework                             |
| **Frontend Framework**    | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)                                           | Component-based UI with strong typing            |
| **SPA Bridge**            | [Inertia.js v3](https://inertiajs.com/)                                                                                  | Seamless server-driven SPA builder               |
| **Authentication**        | [Laravel Fortify](https://laravel.com/docs/fortify) + [Passkeys](https://github.com/laravel/passkeys)                    | Secure Auth with WebAuthn & 2FA                  |
| **Type Safe Routing**     | [Laravel Wayfinder](https://github.com/laravel/wayfinder)                                                                | Backend-to-Frontend TypeScript routes            |
| **Styling & UI**          | [Tailwind CSS v4](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/)                                      | Utility-first styling & accessible UI components |
| **Icons & Notifications** | [Lucide React](https://lucide.dev/) & [Sonner](https://sonner.emilkowal.si/)                                             | Crisp icons & toast notification system          |
| **Package Manager**       | [pnpm](https://pnpm.io/)                                                                                                 | Fast, disk space efficient package manager       |
| **Dev Environment**       | [Laravel Sail](https://laravel.com/docs/sail) (Docker)                                                                   | Containerized development environment            |
| **Testing**               | [Pest PHP 5](https://pestphp.com/)                                                                                       | Elegant PHP testing framework                    |
| **Code Quality**          | [Pint](https://laravel.com/docs/pint) + [Larastan](https://github.com/larastan/larastan) + [ESLint](https://eslint.org/) | Code formatting, static analysis & linting       |

---

## 📌 Prerequisites

Before installing the project, ensure you have the following installed on your environment:

- **Docker Desktop** (Required for Docker / Sail setup)
- **Node.js** `>= 20.x` and **pnpm** `>= 9.x` (For native local setup)
- **PHP** `>= 8.3` and **Composer** `>= 2.x` (For native local setup)
- **MySQL** `>= 8.0` or **SQLite** (For native database option)

---

## 🚀 Getting Started

### Option A: Docker & Laravel Sail (Recommended)

> [!TIP]
> **Pro Tip: Create a Sail Alias**  
> Avoid typing `./vendor/bin/sail` every time by adding a shell alias to your `~/.zshrc` or `~/.bashrc`:
>
> ```bash
> alias sail='[ -f sail ] && sh sail || ./vendor/bin/sail'
> ```
>
> Once configured, you can execute all Sail commands cleanly (e.g., `sail up -d`, `sail artisan migrate`, `sail pnpm dev`).

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/pixelsfort.git
    cd pixelsfort
    ```

2. **Configure Environment**

    ```bash
    cp .env.example .env
    ```

3. **Start Docker Containers**

    ```bash
    ./vendor/bin/sail up -d
    ```

4. **Initialize Application & Database**

    ```bash
    ./vendor/bin/sail artisan key:generate
    ./vendor/bin/sail artisan migrate
    ./vendor/bin/sail pnpm install
    ```

5. **Start Frontend Development Server**

    ```bash
    ./vendor/bin/sail pnpm dev
    ```

    Visit the application at `http://localhost`.

---

### Option B: Native Local Setup

1. **Clone & Install Dependencies**

    ```bash
    git clone https://github.com/your-username/pixelsfort.git
    cd pixelsfort
    composer install
    pnpm install
    ```

2. **Configure Environment**

    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

3. **Database Migration**
   Ensure database connection details in `.env` match your local MySQL configuration (or set `DB_CONNECTION=sqlite`), then run:

    ```bash
    php artisan migrate
    ```

4. **Run Development Stack**

    ```bash
    composer run dev
    ```

    _This command concurrently starts the Laravel dev server and the Vite dev server._

    Visit the application at `http://localhost:8000`.

---

## 📜 Available Scripts

### Composer Scripts

| Command                    | Action                                                           |
| :------------------------- | :--------------------------------------------------------------- |
| `composer run dev`         | Starts Laravel app server and Vite asset server concurrently     |
| `composer run setup`       | Executes full initial project setup sequence                     |
| `composer run test`        | Clears config, runs linter, type checks, and executes Pest tests |
| `composer run lint`        | Runs Laravel Pint formatter                                      |
| `composer run types:check` | Runs PHPStan/Larastan static code analysis                       |
| `composer run ci:check`    | Runs all formatting, TypeScript, linting, and Pest test checks   |

### pnpm Scripts

| Command               | Action                                                  |
| :-------------------- | :------------------------------------------------------ |
| `pnpm dev`            | Runs Vite dev server with Wayfinder routing watcher     |
| `pnpm build`          | Builds client assets for production                     |
| `pnpm build:ssr`      | Builds client and SSR bundles for server-side rendering |
| `pnpm lint`           | Runs ESLint and auto-fixes JavaScript/TypeScript issues |
| `pnpm format`         | Runs Prettier to format source files                    |
| `pnpm types:check`    | Runs TypeScript compiler type check (`tsc --noEmit`)    |

---

## 🏗 Project Architecture

```
pixelsfort/
├── app/
│   ├── Http/Controllers/    # Application controllers (Profile, Security, Auth)
│   ├── Models/              # Eloquent models (User model with Passkey & 2FA traits)
│   └── Providers/           # App & Fortify service providers
├── config/                  # Framework & package configuration files
├── database/
│   ├── factories/           # Model factories for testing
│   ├── migrations/          # Schema migrations (users, passkeys, 2FA, jobs, cache)
│   └── seeders/             # Database seeders
├── resources/
│   ├── css/                 # App CSS entry point with Tailwind CSS v4 setup
│   └── js/
│       ├── actions/         # Auto-generated Wayfinder controller action helpers
│       ├── components/      # UI components built with Radix UI & Lucide React
│       ├── layouts/         # Layout components (App Layout, Auth Layout, Settings Layout)
│       ├── pages/           # Inertia React page components (Welcome, Dashboard, Settings)
│       ├── routes/          # Auto-generated Wayfinder named route helpers
│       └── types/           # Global TypeScript type definitions
├── routes/
│   ├── web.php              # Web routes and Inertia page definitions
│   └── settings.php         # Profile & security settings routes
└── tests/                   # Pest PHP unit and feature test suites
```

---

## 🔒 Authentication & Passkeys

PixelsFort provides built-in support for secure credential management:

- **Passkeys (WebAuthn)**: Registered users can enroll biometric authenticators or security keys (Touch ID, Face ID, YubiKey) for passwordless login.
- **Two-Factor Authentication (2FA)**: TOTP-based multi-factor authentication powered by Laravel Fortify with recovery code generation.
- **Passkey Endpoint Discovery**: Exposes standardized WebAuthn endpoint metadata via `.well-known/passkey-endpoints`.

---

## 🧪 Testing & Quality Assurance

To maintain high code quality across backend and frontend, run the automated verification pipeline:

```bash
# Run PHP Pest tests
./vendor/bin/sail artisan test

# Check PHP static analysis (Larastan)
./vendor/bin/sail composer run types:check

# Fix PHP code formatting (Laravel Pint)
./vendor/bin/sail composer run lint

# Run full CI validation pipeline
./vendor/bin/sail composer run ci:check
```

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).
