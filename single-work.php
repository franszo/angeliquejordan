<?php get_header(); ?>

<a href="#firstPage" class="work-title btn"><h2><?php single_post_title(); ?></h2></a>

<div id="single-work">
	<?php while ( have_posts() ) : the_post(); ?>

	<?php
	$i = 1;
	if( have_rows('work_content') ):
	    while ( have_rows('work_content') ) : the_row();
	        if( get_row_layout() == 'section' ): ?>

	        	<div class="section" <?php if($i == 1) { echo 'data-anchor="firstPage"'; } ?>>
	        		<div class="content">
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
	        	</div>
	        <?php endif;
	        $i++;
	    endwhile;	
	endif; ?>

	<?php // CREDITS ?>

	<?php if( have_rows('credits') ): ?>
		<div class="section">
			<div class="content credits">

				<div class="row headings">
					<div class="left-column">
			    		<?php the_field('project_name'); ?>
			    	</div>
			    	<div class="right-column">
			    		<?php the_field('year'); ?>
		    		</div>
			    </div>

			    <?php while ( have_rows('credits') ) : the_row(); ?>
					<div class="row">
						<div class="left-column">
							<?php the_sub_field('label'); ?>
						</div>
				    	<div class="right-column">
				    		<?php if(get_sub_field('url')): ?>
				    			<a href="<?php the_sub_field('url'); ?>" target="_blank"><?php the_sub_field('value'); ?></a>
				    		<?php else: ?>
								<?php the_sub_field('value'); ?>
				    		<?php endif; ?>
			    		</div>						
					</div>
			    <?php  endwhile; ?>
		    </div>
	    </div>
	<?php endif; ?>	

	<?php 
		endwhile; 
		wp_reset_postdata();
		// end of the loop. 
	?>
</div><!-- #single -->

<?php get_footer(); ?>
