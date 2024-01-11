<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Basetheme
 * @since 1.0
 * @version 2.7
 */

get_header(); ?>
<div class="container">
	<?php if ( have_posts() ) : ?>
		
		<div class="row ">

			<div class="col-24 col-md-12 archive-title">

				<?php if ( is_home() && ! is_front_page() ) : ?>
					<h1 class="page-title"><?php single_post_title(); ?></h1>
				<?php endif; ?>

			</div>

			<div class="col-24 col-md-12 justify-content-end d-flex align-items-center blog-social">

				<?php if ( is_home() && ! is_front_page() ) : ?>
					<?php if ( function_exists( 'bt_social_accounts_shortcode' ) ) {
						echo bt_social_accounts_shortcode();
					}
				endif; ?>

			</div>

		</div>
		
		<div class="row ">

			<div class="col-24 cat-list">

				<?php wp_list_categories( ); ?>

			</div>

		</div>
		
		<div class="row" id="featured">

			<?php
			// The Query
			$feat_args = array(
				'post_type' => 'post',
				'post_status' => 'publish',
				'posts_per_page'=>1,
				'order'=>'DESC',
				'orderby'=>'date',
			);
			$feat_query = new WP_Query( $feat_args );
			
			if ( $feat_query->have_posts() ) :
				while ( $feat_query->have_posts() ) :
					$feat_query->the_post();
					$feat_id = get_the_ID(); ?>
					<div class="col-24 col-md-14 featured-image">
						<?php if ( has_post_thumbnail() ) :	?>
							<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_post_thumbnail('large'); ?></a>

						<?php else : ?>
							<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><img src="/wp-content/uploads/2023/07/arco-office-reception.jpg"/></a>

						<?php endif; ?>
					</div>
					<div class="col-24 col-md-10 featured-content d-flex align-self-center flex-column">
						<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title("<h2>", "</h2>"); ?></a>
						<div class="feat-cat"><?php the_category( ', ' ); ?></div>
					</div>
				<?php endwhile;
			endif;
			wp_reset_postdata(); ?>

		</div>
		
		<div class="row">

			<div class="col-24 col-md-17">

				<div class="row">
					<?php
					// Start the loop.
					$i = 0;
			
					while ( have_posts() ) :						
						the_post();
						if ($i != 0) {

							/*
							* Include the Post-Format-specific template for the content.
							* If you want to override this in a child theme, then include a file
							* called content-___.php (where ___ is the Post Format name) and that will be used instead.
							*/

							get_template_part( 'template-parts/content', get_post_format() );
							
							// End the loop.
						
						} else {
							$i++;
						}
					endwhile; ?>
					</div>

					<div class="row" id="blog-pagination">

						<div class="col-24 text-center">

							<?php // Previous/next page navigation.
							the_posts_pagination(
								array(
									'prev_text'          => esc_attr__( 'Previous', 'basetheme' ),
									'next_text'          => esc_attr__( 'Next', 'basetheme' ),
									'before_page_number' => '<span class="meta-nav screen-reader-text">' . esc_attr__( 'Page', 'basetheme' ) . ' </span>',
								)
							); ?>

						</div>

					<?php // If no content, include the "No posts found" template.
				else :
					get_template_part( 'template-parts/content', 'none' );

				endif;

				?> </div>
			</div>

			<div class="col-24 col-md-7">

				<?php get_sidebar(); ?>
			</div>	
		</div>
</div>

		<?php echo advent_get_reusable_block( 12116 ); ?>

		<?php echo advent_get_reusable_block( 11912 ); ?>
<?php get_footer(); ?>