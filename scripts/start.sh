#!/usr/bin/env bash

# Exit immediately if any command fails
set -eo pipefail

echo "🚀 Starting Laravel project initialization..."

# 1. Ensure Docker daemon is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Error: Docker daemon is not running. Please start Docker Desktop and try again."
    exit 1
fi

# 2. Create .env file if it does not exist yet
if [ ! -f .env ]; then
    echo "📄 Copying .env.example to .env..."
    cp .env.example .env
fi

# 3. Detect available JavaScript Package Manager
if command -v pnpm &> /dev/null; then
    PKG_MANAGER="pnpm"
elif command -v npx &> /dev/null; then
    PKG_MANAGER="npx pnpm"
elif command -v npm &> /dev/null; then
    PKG_MANAGER="npm"
else
    PKG_MANAGER=""
fi

# 4. Install PHP & JS dependencies
echo "📦 Installing packages..."
if command -v composer &> /dev/null && command -v php &> /dev/null; then
    composer install
else
    echo "ℹ️ PHP/Composer not detected on host CLI. Dependencies will be handled via Sail."
fi

if [ -n "$PKG_MANAGER" ]; then
    $PKG_MANAGER install
fi

# 5. Spin up Laravel Sail detached containers
echo "🐳 Starting Laravel Sail containers..."
if [ -f ./vendor/bin/sail ]; then
    ./vendor/bin/sail up -d
else
    echo "❌ Error: ./vendor/bin/sail not found. Running composer install via docker..."
    docker run --rm -u "$(id -u):$(id -g)" -v "$(pwd):/var/www/html" -w /var/www/html laravelsail/php85-composer:latest composer install --ignore-platform-reqs
    ./vendor/bin/sail up -d
fi

# Ensure composer dependencies inside container if vendor/autoload.php is missing
if [ ! -f vendor/autoload.php ]; then
    echo "📦 Running composer install inside Sail container..."
    ./vendor/bin/sail composer install
fi

# 6. Generate Application Security Key
echo "🔑 Ensuring app encryption key..."
./vendor/bin/sail artisan key:generate --force

# 7. Build frontend assets
echo "⚡ Building frontend assets..."
if [ -n "$PKG_MANAGER" ]; then
    $PKG_MANAGER run build
else
    ./vendor/bin/sail npm run build
fi

# 8. Wait safely for MySQL database container to accept connections
echo "⏳ Waiting for database service to fully boot..."
MAX_TRIES=30
COUNT=0
until ./vendor/bin/sail artisan db:show > /dev/null 2>&1 || [ $COUNT -eq $MAX_TRIES ]; do
    echo "  Waiting for database connection... ($((COUNT+1))/$MAX_TRIES)"
    sleep 2
    COUNT=$((COUNT+1))
done

if [ $COUNT -eq $MAX_TRIES ]; then
    echo "❌ Error: Database service failed to accept connections within timeout."
    exit 1
fi
echo "🟢 Database is ready!"

# 9. Run Database Migrations and seed testing data
echo "🗄️ Running migrations and database seeding..."
./vendor/bin/sail artisan migrate:fresh --seed --force

echo "✅ Project setup complete! Access your application via http://localhost"
