<?php
require_once 'includes/index.php';
require_once 'shortcodes/index.php';
// require_once 'includes/auth/index.php';

define("WP_FLATSOME_ASSET_VERSION", time());
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap',
        [],
        WP_FLATSOME_ASSET_VERSION
    );
    wp_enqueue_style( 'j-style-css', get_stylesheet_directory_uri() . '/assets/css/j-style.css', [], WP_FLATSOME_ASSET_VERSION );
    wp_enqueue_style( 'j-responsive-css', get_stylesheet_directory_uri() . '/assets/css/j-responsive.css', [], WP_FLATSOME_ASSET_VERSION );
}, 999);

add_action( 'wp_footer', function () {
     wp_enqueue_script( 'j-script-js', get_stylesheet_directory_uri() . '/assets/js/j-script.js', [], WP_FLATSOME_ASSET_VERSION );
});
