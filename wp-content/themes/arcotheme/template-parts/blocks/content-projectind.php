<?php
/**
 * Block Name: Project Industries
 * Display a list of project industries with icons.
 */

// Create id attribute for specific styling.
$block_id = 'projectind-' . $block['id'];
$classes  = array( 'projectind' );

/**
 * Custom classes added in admin.
 */
if ( ! empty( $block['className'] ) ) {
	$classes[] = $block['className'];
} ?>


<div class="<?php echo esc_attr( implode( ' ', $classes ) ); ?>" id="<?php echo esc_attr( $block_id ); ?>">
	<ul class="projectind-list">
		<?php $terms = get_terms([
    		'taxonomy' => 'industry',
    		'hide_empty' => false,
		]);
		foreach ($terms as $term){
			$icon = get_field( 'industry_icon', $term->taxonomy . '_' . $term->term_id);
			// $page = get_field( 'detail_page', $term->taxonomy . '_' . $term->term_id);
			$page = "/projects/" . $term->slug;
			echo "<li>";
			echo "<a href='" . $page . "'>";
			echo "<img class='indicon' src='" . $icon . "' width='32' height='32'/> ";
			echo $term->name; ?>
			<img class="indarrow" src="<?php echo get_template_directory_uri(); ?>/img/white-arrow-right.svg" />
			<?php echo "</a></li>";
		} ?>
	</ul>
</div>
