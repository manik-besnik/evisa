<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Dubai Evisa Service') }}</title>
    
    <meta name="keywords" content="Online Visa, Evisa, Dubai, Dubai Evisa, Dubai Evisa Service, Evisa Service">

    <meta name="author" content="Dubai Evisa Service">
    @if (isset($page['props']['meta']))
        <meta property="og:title" content="{{ $page['props']['meta']['title'] }}" />
        <meta property="og:description" content="{{ $page['props']['meta']['requirements'] }}" />
        <meta property="og:image" content="{{ $page['props']['meta']['image'] }}" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="{{ $page['props']['meta']['url'] }}" />
        <meta property="og:type" content="article" />
    @endif

    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-X9M5Z49NXZ"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'G-X9M5Z49NXZ');
    </script>
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
