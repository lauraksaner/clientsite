<?php
/**
 * The template part for displaying single posts
 *
 * @package WordPress
 * @subpackage Basetheme
 * @since 1.0
 * @version 2.7
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'row' ); ?>>
	
	<div class="col-24">
		<header class="project-header">
			<h2>Projects</h2>
			<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		</header>

		<?php if ( has_post_thumbnail() ) : ?>
		<div class="entry-ft">
			<?php the_post_thumbnail(); ?>
		</div>
		<?php endif; ?>
	</div>

	
	<div class="col-24">
		<section class="entry">
			<?php the_content(); ?>
			
			<?php 
			$images = get_field('gallery_images');
			if( $images ): ?>
				<ul class="project-gallery">
					<?php foreach( $images as $image_id ): ?>
						<li>
							<img src="<?php echo $image_id['url'] ?>" />
						</li>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>
		</section>

	</div>
</article>
<?php wp_link_pages(); ?>
