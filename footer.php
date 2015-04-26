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
						$prev_post = get_previous_post();
						if($prev_post) {
					   		$prev_title = strip_tags(str_replace('"', '', $prev_post->post_title));
						   	echo "\t" . '<a rel="prev" href="' . get_permalink($prev_post->ID) . '" title="' . $prev_title. '" class="prev-posts">Prev Project</a>' . "\n";
		                }
					?>

					<?php
						$next_post = get_next_post();
						if($next_post) {
						   $next_title = strip_tags(str_replace('"', '', $next_post->post_title));
						   echo "\t" . '<a rel="next" href="' . get_permalink($next_post->ID) . '" title="' . $next_title. '" class="next-posts">Next Project</a>' . "\n";
		                }
					?>
				</div>
			<?php endif; ?>

	</footer><!-- #footer .site-footer -->
</div><!-- #wrap -->

<?php wp_footer(); ?>
</body>
</html>