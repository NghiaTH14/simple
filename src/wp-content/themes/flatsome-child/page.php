<?php
/**
 * The blog template file.
 *
 * @package          Flatsome\Templates
 * @flatsome-version 3.16.0
 */

get_header();

// the_title
ob_start();
the_title();
$title = ob_get_clean();

// the_content
ob_start();
the_content();
$content = ob_get_clean();

$result = <<<EOF
[section padding="0px"]

[row style="small"]

[col span__sm="12" class="pb-0"]

[ux_html]

[c_breadcrumbs]
[/ux_html]
[title text="$title" tag_name="h1" class="j-heading"]


[/col]

[/row]

[/section]
[section label="j-content" class="j-content"]

[row]

[col span__sm="12"]

[ux_html]

$content
[/ux_html]

[/col]

[/row]

[/section]
EOF;
echo do_shortcode($result);
get_footer();