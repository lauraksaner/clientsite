<?php
/**
 * The template for displaying archive pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Basetheme
 * @since 1.0
 * @version 2.7
 */
get_header(); ?>

<style> <?php include 'dist/css/blocks/projectgrid.css'; ?> </style>
<?php if ( have_posts() ) : ?>

	<header class="page-header">
	    <?php $gblock = get_post( 12123 );
    	echo apply_filters( 'the_content', $gblock->post_content ); ?>
	</header><!-- .page-header -->

	<div class="container-wide">

		<div class="row" id="project-wrap-grid">
			<div class="col-24 col-md-18 project-filtering">
				<h2><?php single_term_title(); ?></h2>
			</div>
			<div class="col-24 col-md-6 justify-content-md-end d-flex project-filtering">
				<?php echo do_shortcode('[project_filter]'); ?>
			</div>
			<?php while ( have_posts() ) :
				the_post();
				$featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); 
				$industry = get_the_terms( get_the_ID(), 'industry' );
				$industies = join(', ', wp_list_pluck($industry, 'name'));
				if (get_field('construction_status', get_the_ID()) == NULL) :
					$status = '';
					$flag = "";
				else : 
					$status = 'under';
					$flag = "<div class='flag'><img src='/wp-content/themes/arcotheme/img/construction-flag.svg' /></div>";
				endif;  ?>
				<div class="col-24 col-sm-12 col-md-8 project grid <?php echo $status; ?>">
					<?php echo $flag; ?>
					<a href="<?php the_permalink(); ?>">
						<img src="<?php echo $featured_img_url; ?>" class="project-img" />
						<div class="image-overlay"></div>
						<div class="project-info">
							<p class="project-title"><?php the_title(); ?></p>
							<p class="project-type"><?php echo $industies; ?></p>
						</div>
					</a>
				</div>
			<?php endwhile; ?>
		</div>
		

		<div class="row" id="project-wrap-grid">

			<?php $tax_slug = get_query_var( 'industry' );
			echo do_shortcode('[ajax_load_more id="4578747237" container_type="div" post_type="project" posts_per_page="9" taxonomy="industry" taxonomy_terms=' . $tax_slug  . ' taxonomy_operator="IN" offset="9"]'); ?>

		 </div>
	</div>

	<?php // If no content, include the "No posts found" template.
else :
	get_template_part( 'template-parts/content', 'none' );

endif;
?>

<?php $gblock = get_post( 11912 );
echo apply_filters( 'the_content', $gblock->post_content ); ?>
<?php get_footer(); ?>
