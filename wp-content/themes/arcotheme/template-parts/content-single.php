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
	
	<div class="col-24 post-header">
		<section class="post-meta">
			<span class="post-meta-cats">
				<?php the_category( ', ' ); ?>
			</span> | 
			<span class="post-meta-date">
				<?php the_time( 'F d, Y' ); ?>
			</span>
		</section>
		<header class="entry-header">
			<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		</header>

		<?php if ( has_post_thumbnail() ) : ?>
		<div class="entry-ft">
			<?php the_post_thumbnail(); ?>
		</div>
		<?php endif; ?>
	</div>

	
	<div class="col-24 col-md-16">
		<section class="entry">
			<?php the_content(); ?>
		</section>

		<section class="footer-post-meta row">
			<div class="col-24 col-md-12">
				<span class="post-meta-date">
					<h4>DATE</h4>
					<?php the_time( 'F d, Y' ); ?>
				</span>
			</div>
			<div class="col-24 col-md-12">
				<span class="post-meta-cats">
					<h4>CATEGORIES</h4>
					<?php the_category( ', ' ); ?>
				</span> 
				
				<span class="post-meta-tags">
					<h4>TAGS</h4>
					<?php the_tags( '', ', ', '' ); ?>
				</span>
			</div>
		</section>
	</div>
	<div class="col-24 col-md-6 blog-social">
		<?php if ( function_exists( 'bt_social_accounts_shortcode' ) ) {
			echo bt_social_accounts_shortcode();
		}?>
		<?php get_sidebar( 'single' ); ?>
	</div>
</article>
<?php wp_link_pages(); ?>
