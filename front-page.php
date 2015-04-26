<?php get_header(); ?>

<section id="front-page" class="archives">
	<?php
		global $paged, $wp_query, $wp;
		if  ( empty($paged) ) {
			if ( !empty( $_GET['paged'] ) ) {
				$paged = $_GET['paged'];
			} elseif ( !empty($wp->matched_query) && $args = wp_parse_args($wp->matched_query) ) {
				if ( !empty( $args['paged'] ) ) {
					$paged = $args['paged'];
				}
			}
			if ( !empty($paged) )
				$wp_query->set('paged', $paged);
		}	
		$temp = $wp_query;
		$wp_query= null;
		$wp_query = new WP_Query();

		$args = array(									
			'post_type'   => 'work',
			'posts_per_page' => 10,
			'order'       => 'ASC',
			'orderby'     => 'menu_order',
			'paged'		  =>  $paged
		);

		$wp_query = new WP_Query( $args ); 		
	?> 
	<ul class="grid">
		<?php while ($wp_query->have_posts()) : $wp_query->the_post(); ?>
		
			<?php 
				$img_w = get_field('front_page_image_size_width');
				$img_h = get_field('front_page_image_size_height');
				$image_size = array(
					'width' => $img_w ? $img_w : 450, 
					'height' => $img_h ? $img_h : 290
				);

				$position = get_field('position');
				$full_width = get_field('full_width');

				$class = array('wow fadeInUp');
				$class[] = ($full_width) ? 'full' : '';
			?>	

			<li class="<?php echo implode(' ', $class); ?>">
				<figure class="effect" <?php if($position) { echo 'style=" margin: '. $position .'"';}; ?>>
					<img src="<?php echo get_post_thumbnail_src($image_size); ?>" alt="<?php echo get_the_title(); ?>"/>
					<figcaption>
						<a href="<?php the_permalink(); ?>">
							<p class="title">
								<?php the_title(); ?>
								<span><?php echo get_the_excerpt(); ?></span>
							</p>
						</a>
					</figcaption>			
				</figure>						
			</li>
		    	
		<?php endwhile; ?>
	</ul>
	<div id="navbelow">
		<?php next_posts_link('Next &raquo;'); ?>			
	</div> 
	<?php $wp_query = null; $wp_query = $temp;?>
</section>
<?php get_footer(); ?>