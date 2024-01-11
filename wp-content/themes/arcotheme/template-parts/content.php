<?php
/**
 * The template part for displaying content
 *
 * @package WordPress
 * @subpackage Basetheme
 * @since 1.0
 * @version 2.7
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('col-24 col-md-12'); ?>>


	<section class="entry-image">
		<?php if ( has_post_thumbnail() ) :	?>
			<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_post_thumbnail('large'); ?></a>

		<?php else : ?>
			<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><img src="/wp-content/uploads/2023/08/blog-placeholder.jpg"/></a>

		<?php endif; ?>
	</section>

	<header class="entry-header">
		<?php the_title( sprintf( '<h3 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h3>' ); ?>
	</header>

	<section class="post-meta">
		<span class="post-meta-cats">
			<?php the_category( ', ' ); ?>
		</span>
	</section>

</article>
