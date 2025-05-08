<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Dubai Evisa Service') }}</title>
    <meta name="description" content="The Dubai eVisa is an electronic travel authorization that allows eligible foreign nationals to enter the United Arab Emirates (UAE) for tourism, business, or transit purposes. The application process is entirely online, offering a convenient and fast way to obtain a visa without visiting an embassy. Applicants must submit required documents such as a passport copy and photograph, and upon approval, the eVisa is sent via email. Depending on nationality and purpose of visit, various eVisa types are available, including 14-day, 30-day, and 90-day options.">

    <meta name="keywords" content="Online Visa, Evisa, Dubai, Dubai Evisa, Dubai Evisa Service, Evisa Service">

    <meta name="author" content="Dubai Evisa Service">
    <meta property="og:title" content="Dubai Evisa Service">
    @if (isset($page['props']['meta']))
    <meta property="og:title" content="{{ $page['props']['meta']['title'] }}" />
    <meta property="og:description" content="{{ $page['props']['meta']['requirements'] }}" />
    <meta property="og:image" content="{{ $page['props']['meta']['image'] }}" />
    <meta property="og:url" content="{{ $page['props']['meta']['url'] }}" />
   @endif

    <link rel="shortcut icon" href="{{asset('favicon.ico')}}" type="image/x-icon">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet"/>

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
