<?php
/**
 * Block Name: Project Grid
 * Grid display of projects with blue overlay.
 */

// Create id attribute for specific styling.
$block_id = 'projectgrid-' . $block['id'];
$classes  = array( 'projectgrid' );
$pageid = get_the_ID();

/**
 * Custom classes added in admin.
 */
if ( ! empty( $block['className'] ) ) {
	$classes[] = $block['className'];
} ?>


<div class="<?php echo esc_attr( implode( ' ', $classes ) ); ?>" id="<?php echo esc_attr( $block_id ); ?>">
	<?php if( get_field('layout_type') == 'masonry') : 
		$args = array(
			'post_type'      => 'project',
			'posts_per_page' => 4,
		);
		$query = new WP_Query($args);?>
	
		<div class="row masonry-wrap" id="project-wrap-grid">

			<?php while ( $query->have_posts() ) :
				$query->the_post();
				$featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); 
				$industry = get_the_terms( get_the_ID(), 'industry' );
				$industies = join(', ', wp_list_pluck($industry, 'name'));
				if (get_field('construction_status', get_the_ID()) == NULL) :
					$status = '';
					$flag = "";
				else : 
					$status = 'under';
					$flag = "<div class='flag'><img src='/wp-content/themes/arcotheme/img/construction-flag.svg' /></div>";
				endif; ?>

				<div class="project masonry <?php echo $status; ?>"><a href="<?php the_permalink(); ?>">
					<?php echo $flag; ?>
					<img src="<?php echo $featured_img_url; ?>" class="project-img" />
					<div class="image-overlay">
					<div class="project-info">
						<p class="project-title"><?php the_title(); ?></p>
						<p class="project-type"><?php echo $industies; ?></p>
					</div></div>
				</a></div>

			<?php endwhile; ?>
			<div class="project masonry masonry-more">
				<p class="masonry-blurb">
					Interested in more projects? </p>
				<a href="/projects">
					<p class="masonry-button">
						<span class="button-text">SEE ALL</span>
						<span class="button-arrow">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" 
							aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
						</span>
					</p>
				</a>
			</div>
		</div>

		
	<?php elseif( get_field('layout_type') == 'grid') :
		$args = array(
			'post_type'      => 'project',
			'posts_per_page' => get_option( 'posts_per_page' ),
		);
		$query = new WP_Query($args); ?>

		<div class="row g-2" id="project-wrap-grid">
			<?php while ( $query->have_posts() ) :
				$query->the_post();
				$featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); 
				$industry = get_the_terms( get_the_ID(), 'industry' );
				$industies = join(', ', wp_list_pluck($industry, 'name')); 
				if (get_field('construction_status', get_the_ID()) == NULL) :
					$status = '';
					$flag = "";
				else : 
					$status = 'under';
					$flag = "<div class='flag'><img src='/wp-content/themes/arcotheme/img/construction-flag.svg' /></div>";
				endif; ?>
				<div class="col-24 col-md-11 col-lg-8 project grid <?php echo $status; ?>">
					<a href="<?php the_permalink(); ?>">
						<img src="<?php echo $featured_img_url; ?>" class="project-img" />
						<div class="image-overlay"></div>
						<div class="project-info">
							<p class="project-title"><?php the_title(); ?></p>
							<p class="project-type"><?php echo $industies; ?></p>
						</div>
					</a>
					<?php echo $flag; ?>
				</div>
			<?php endwhile; ?>
		</div>
		
		<div class="row g-2" id="project-wrap-grid">

			<?php echo do_shortcode('[ajax_load_more post_type="project" posts_per_page="9" offset="9" container_type="div"]'); ?>

		 </div>
		
	<?php elseif( get_field('layout_type') == 'preview') :
		$ptype = get_field('preview_type');
		if ($ptype == 'new') :
			$ind = get_field('industry_type');
			$args = array(
				'post_type' => 'project',
				'orderby' => 'ASC',
				'tax_query' => array(
					array(
						'taxonomy' => 'industry',
						'field' => 'term_id',
						'terms' => $ind,
					)
				),
				'posts_per_page' => 3,
			);
		else :
			$userposts = get_field('featured_project_selection');
			$args = array(
			'post_type'      => 'project',
			'post__in' => $userposts,
			);
		endif;
		$query = new WP_Query($args); ?>
			
		<div class="row" id="project-wrap-grid">
			<?php while ( $query->have_posts() ) :
				$query->the_post();
				$featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); 
				$industry = get_the_terms( get_the_ID(), 'industry' );
				$industies = join(', ', wp_list_pluck($industry, 'name')); 
				if (get_field('construction_status', get_the_ID()) == NULL) :
					$status = '';
					$flag = "";
				else : 
					$status = 'under';
					$flag = "<div class='flag'><img src='/wp-content/themes/arcotheme/img/construction-flag.svg' /></div>";
				endif; ?>
				<div class="col-24 col-md-11 col-lg-8 project preview <?php echo $status; ?>">
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
	
	<?php endif; ?> <!-- /Project Type -->
</div>
