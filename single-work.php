<?php get_header(); ?>

<div id="single-work">
	<?php while ( have_posts() ) : the_post(); ?>


	<?php

	if( have_rows('work_content') ):
	    while ( have_rows('work_content') ) : the_row();
	        if( get_row_layout() == 'section' ): ?>

	        	<div class="section">
					<?php
					$rows = get_sub_field('slide');
					$count = count($rows);
					if( have_rows('slide') ):
					    while ( have_rows('slide') ) : the_row(); 
						$bgcolor = get_sub_field('background_color'); ?> 
							<?php if($count > 1): ?>
								<div class="slide" <?php if($bgcolor) {echo 'style="background-color: '.$bgcolor.'"';} ?>>
									<?php the_sub_field('content') ?>
								</div>								
							<?php else: ?>
								<?php the_sub_field('content') ?>
							<?php endif; ?>
					    <?php endwhile;
					endif; ?>
	        	</div>
	        <?php endif;
	    endwhile;	
	endif; ?>
	<?php 
		endwhile; 
		wp_reset_postdata();
		// end of the loop. 
	?>
</div><!-- #single -->
<?php include_module('related-posts'); ?>

<?php get_footer(); ?>
