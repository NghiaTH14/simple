<?php
/**
 * The blog template file.
 *
 * @package          Flatsome\\Templates
 * @flatsome-version 3.16.0
 */

$html = <<<EOF
[section label="j-search" padding="0px" class="j-search"]

[row h_align="center"]

[col span="9" span__sm="12" class="pb-0"]

[ux_html]

[c_breadcrumbs]
[/ux_html]
[gap height="15px"]

[title style="center" text="Tìm kiếm" tag_name="h1" class="j-heading"]

[search style="flat"]

[/col]

[/row]

[/section]
[section label="j-search" class="j-search"]

[row h_align="center"]

[col span="9" span__sm="12"]

[c_search_posts style="normal" type="row" col_spacing="small" columns="3" columns__md="2" show_date="false" text_align="left" image_height="56.25%" class="j-post-search"]

[/col]

[/row]

[/section]
EOF;

get_header();
?>

<div id="content" class="blog-wrapper blog-archive page-wrapper">
	<?php echo do_shortcode($html); ?>
</div>


<?php get_footer(); ?>