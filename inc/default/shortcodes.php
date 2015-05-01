<?php 
function socials_func( ) {

	$output = '<div class="socials">';
	$output .= '<a href="https://www.behance.net/angeliquejordan" target="_blank" class="icon icon-behance"></a>';
	$output .= '<a href="https://www.linkedin.com/in/angeliquejordan" target="_blank" class="icon icon-linkedin"></a>';
	$output .= '<a href="https://instagram.com/lifeisartloveit/" class="icon icon-instagram" target="_blank"></a>';
	$output .= '<a href="https://www.pinterest.com/angeliquejordan/" class="icon icon-pinterest" target="_blank"></a>';
	$output .= '</div>';

    return $output;
}
add_shortcode( 'socials', 'socials_func' );
 ?>
