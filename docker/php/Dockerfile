# Use an official PHP image with FPM
FROM php:8.4-fpm

# Set working directory
WORKDIR /var/www

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    git \
    curl \
    python3 \
    python3-venv \
    python3-pip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Install Swoole
RUN pecl install swoole && docker-php-ext-enable swoole

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Laravel Octane
RUN composer require laravel/octane

# Create a virtual environment for Python
RUN python3 -m venv /var/www/venv

# Activate the virtual environment and install Python dependencies
RUN /var/www/venv/bin/pip install --upgrade pip && \
    /var/www/venv/bin/pip install Pillow easyocr numpy pymupdf

# Copy application files
COPY . /var/www

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Expose port for Swoole
EXPOSE 8000

# Run Octane with Swoole
CMD ["php", "artisan", "octane:start", "--server=swoole", "--host=0.0.0.0", "--port=8000"]
