<?php
/**
 * Block Name: Horizontal Scroll Text
 * Text that scrolls horizontally as the user scrolls the page.
 */

// Create id attribute for specific styling.
$block_id = 'horizscrolltext-' . $block['id'];
$classes  = array( 'horizscrolltext' );

/**
 * Custom classes added in admin.
 */
if ( ! empty( $block['className'] ) ) {
	$classes[] = $block['className'];
}

$text = get_field('text_to_scroll') ?>

<div class="<?php echo esc_attr( implode( ' ', $classes ) ); ?>" id="<?php echo esc_attr( $block_id ); ?>">
	<section id="services" class="horiz-wrap">
		<div class="container-fluid scrolling-text d-none d-md-block">
			<p class="scrolling-text-content">
				<?php echo "<span class='horiz-outline'>" . $text['text_with_outline'] . "</span> <span class='horiz-fill'>" . $text['text_with_fill' ] . "</span>"; ?> 
				<?php echo "<span class='horiz-outline'>" . $text['text_with_outline'] . "</span> <span class='horiz-fill'>" . $text['text_with_fill' ] . "</span>"; ?> 
			</p>
		</div>
		<div class="container-fluid scrolling-text d-md-none static">
			<p class="scrolling-text-content">
				<?php echo "<span class='horiz-outline'>" . $text['text_with_outline'] . "</span> <span class='horiz-fill'>" . $text['text_with_fill' ] . "</span>"; ?> 
			</p>
		</div>
	</section>
</div>

