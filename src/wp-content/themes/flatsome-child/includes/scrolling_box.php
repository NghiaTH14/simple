<?php

add_shortcode('scrolling_box', function ($atts, $content = null) {
    $content = '<div class="scrolling-box">' . do_shortcode($content) . '</div>';

    $css = <<<EOF
<style>
.scrolling-box {
    display: block;
    max-height: 440px;
    padding: 1em;
    overflow-y: auto;
    text-align: left;
    // margin-bottom: 1rem;
    background:#f3f3f3;
}
</style>
EOF;
    return $css . $content;
});