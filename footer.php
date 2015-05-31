<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package angelique jordan
 * @since angelique jordan 1.0
 */
?>
	</div><!-- #main .site-main -->
	
	<footer id="footer" class="site-footer" role="contentinfo">
			<?php if(is_front_page()): ?>
				<?php wp_nav_menu( array( 'depth' => 1, 'theme_location' => 'secondary', 'menu_class' => 'clearfix menu', 'container' => 'nav', 'container_class' => 'footer-navigation navigation' )); ?>			
			<?php endif; ?>

			<?php if ( is_singular( 'work' ) ):  ?>
				<div class="single-nav">

					<?php 
						if( get_adjacent_post(false, '', true) ) { 
							$prev_post = get_previous_post();
							if($prev_post) {
						   		$prev_title = strip_tags(str_replace('"', '', $prev_post->post_title));
							   	echo "\t" . '<a rel="prev" href="' . get_permalink($prev_post->ID) . '" title="' . $prev_title. '" class="prev-posts">Prev Project</a>' . "\n";
			                }
						} else { 
							$last = new WP_Query('post_type=work&posts_per_page=1&order=DESC&orderby=menu_order'); $last->the_post();
						    	echo '<a href="' . get_permalink() . '" class="prev-posts">Prev Project</a>';
						    wp_reset_query();							
						}; 
						    
						if( get_adjacent_post(false, '', false) ) { 
							$next_post = get_next_post();
							if($next_post) {
							   $next_title = strip_tags(str_replace('"', '', $next_post->post_title));
							   echo "\t" . '<a rel="next" href="' . get_permalink($next_post->ID) . '" title="' . $next_title. '" class="next-posts">Next Project</a>' . "\n";
			                }
						} else { 
						    $first = new WP_Query('post_type=work&posts_per_page=1&order=ASC&orderby=menu_order'); $first->the_post();
						    	echo '<a href="' . get_permalink() . '" class="next-posts">Next Project</a>';
						  	wp_reset_query();
						}; 
					?>

				</div>
			<?php endif; ?>

	</footer><!-- #footer .site-footer -->
</div><!-- #wrap -->

<?php wp_footer(); ?>
</body>
</html>