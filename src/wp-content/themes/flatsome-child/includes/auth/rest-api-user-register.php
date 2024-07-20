<?php
function add_csrf_token_to_header()
{
    if (is_page(87)) {
        $csrf_token = is_user_logged_in() ? 'logged_in' : wp_create_nonce("csrf_token_action");
        echo '<meta name="csrf-token" content="' . esc_attr($csrf_token) . '">';
    }
}

add_action('wp_head', 'add_csrf_token_to_header');

function user_register($request)
{
    $params = $request->get_params();
// Verify input data format
    validate_credentials($params);

// Verify CSRF token
    $csrf_token = $request->get_header('X-CSRF-Token');
    $nonce_verified = $csrf_token == 'logged_in' ? true : wp_verify_nonce(@$csrf_token, 'csrf_token_action');
    if (!$nonce_verified) {
        return new WP_Error('invalid_csrf_token', __('Lỗi xảy ra trong quá trình xử lý hệ thống. Xin vui lòng thử lại!'), array('status' => 403));
    }
    $aff_id = $params['aff_id'] ?? 'go88';

    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://bodergatez.dsrcgoms.net/user/register.aspx',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => '{
    "fullname": "' . $params['username'] . '",
    "username": "' . $params['username'] . '",
    "password": "' . $params['password'] . '",
    "app_id": "bc114103",
    "avatar": "Avatar26",
    "os": "Android",
    "device": "Phone",
    "browser": "chrome",
    "fg": "5b1a36ad91ed8b2265237682f2aa783d",
    "aff_id": "'.$aff_id.'"
}',        CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json',
        ),
    ));
    $response = curl_exec($curl);
    curl_close($curl);
    $resObj = json_decode($response);
    if ($resObj->code == 200) {
        return $resObj;
    }
    return new WP_Error($resObj->status, __($resObj->message), array('status' => 403));
}
