#!/bin/bash

# Navigate to the project directory
cd /var/www/evisa || exit

# Checkout Production branch
git checkout production

# Discard any local changes and remove untracked files
git reset --hard
git clean -fd

# Pull latest changes from production branch
git pull origin production

# Run database migrations
php artisan migrate --force

# Clear and optimize cache
php artisan optimize:clear

# Generate Ziggy routes
php artisan ziggy:generate

# Build frontend assets
npm install
npm run build

# Optimize Laravel application
php artisan optimize

# Set correct permissions (optional, modify as needed)
chmod -R 775 storage bootstrap/cache

# Done
echo "Deployment completed successfully."
