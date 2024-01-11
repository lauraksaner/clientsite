<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package WordPress
 * @subpackage Basetheme
 * @since 1.0
 * @version 2.7
 */

get_header(); ?>	
		<div class="container">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title"><?php esc_attr_e( 'Your Search: ', 'basetheme' ); ?> <?php printf( '%s', '<span>' . esc_html( get_search_query() ) . '</span>' ); ?></h1>
			</header><!-- .page-header -->

			<div class="row">
				<?php
				// Start the loop.
				while ( have_posts() ) :
					the_post();

					/**
					* Run the loop for the search to output the results.
					* If you want to overload this in a child theme then include a file
					* called content-search.php and that will be used instead.
					*/
					get_template_part( 'template-parts/content', 'search' );

					// End the loop.
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
			</div>

		<?php // If no content, include the "No posts found" template.
		else :
			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>
	</div>
<?php
get_footer();
