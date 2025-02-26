FROM php:8.4-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev zip unzip git curl supervisor \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql opcache bcmath

# Install OPcache
COPY docker/php/opcache.ini /usr/local/etc/php/conf.d/opcache.ini

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Node.js & NPM
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Install Octane & Swoole
RUN pecl install swoole && docker-php-ext-enable swoole

# Set working directory
WORKDIR /var/www

# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader

CMD ["php", "artisan", "octane:start", "--server=swoole", "--watch"]
