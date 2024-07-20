<?php
require_once 'validate_credentials.php';
require_once 'rest-api-user-register.php';
require_once 'rest-api-user-login.php';

add_action('rest_api_init', function () {
    register_rest_route('wp/v2', '/user-register', array(
        'methods' => 'POST',
        'callback' => 'user_register',
    ));
    register_rest_route('wp/v2', '/user-login', array(
        'methods' => 'POST',
        'callback' => 'user_login',
    ));
});

add_action( 'wp_footer', function () {
    wp_enqueue_script('jquery-validate', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.20.0/jquery.validate.min.js', array('jquery'), WP_FLATSOME_ASSET_VERSION);
    wp_enqueue_script( 'c-auth-js', get_stylesheet_directory_uri() . '/includes/auth/script.js', [], WP_FLATSOME_ASSET_VERSION );
});
