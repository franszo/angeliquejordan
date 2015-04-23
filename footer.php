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
		<div class="inner container">
			<?php wp_nav_menu( array( 'depth' => 1, 'theme_location' => 'secondary', 'menu_class' => 'clearfix menu', 'container' => 'nav', 'container_class' => 'footer-navigation navigation' )); ?>
		</div>

	</footer><!-- #footer .site-footer -->
</div><!-- #wrap -->

<?php wp_footer(); ?>
</body>
</html>