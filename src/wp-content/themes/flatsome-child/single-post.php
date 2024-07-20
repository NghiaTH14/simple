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

[section class="j-single" padding="0px"]

[row]

[col span="8" span__sm="12" span__md="12"]
[ux_html]
[c_breadcrumbs]
[gap height="15px"]
[/ux_html]
[title text="$title" tag_name="h1" class="j-heading"]

[ux_html]

$content
[/ux_html]
[related_blog]
[/col]
[col span="4" span__sm="12" span__md="6"]
[gap height="15px"]
[block id="sidebar"]

[/col]

[/row]

[/section]
EOF;
echo do_shortcode($result);

get_footer();