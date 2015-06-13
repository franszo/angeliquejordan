<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package angelique jordan
 * @since angelique jordan 1.0
 */
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html xmlns:fb="http://ogp.me/ns/fb#" class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 7]>         <html xmlns:fb="http://ogp.me/ns/fb#" class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html xmlns:fb="http://ogp.me/ns/fb#" class="no-js lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html xmlns:fb="http://ogp.me/ns/fb#" class="no-js lt-ie10"> <![endif]-->
<!--[if gt IE 9]><!--> <html xmlns:fb="http://ogp.me/ns/fb#" class="no-js"> <!--<![endif]-->
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width" />
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link href="<?php echo get_template_directory_uri(); ?>/images/misc/favicon.png" rel="shortcut icon" type="image/x-icon">

    <?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>
	<div class="border top"></div>
	<div class="border right"></div>
	<div class="border bottom"></div>
	<div class="border left"></div>

	<?php if( is_front_page()): ?>
		<div class="slideout left">
			<div class="content">
				<a class="btn">About</a>
				<div class="inner">
					<?php content_by_id(22); ?>
				</div>
			</div>
		</div>

		<div class="slideout right">
			<div class="content">
				<a class="btn">Contact</a>
				<div class="inner">
					<?php content_by_id(24); ?>			
				</div>
			</div>
		</div>			
	<?php endif; ?>	

<div id="tortilla">

	
	<header id="header" role="banner">
		<div id="mobile-nav">
			<a class="menu-btn btn" href="#"><?php _e('Menu'); ?></a>
			<ul class="slidedown">
				<li><a href="<?php bloginfo('url'); ?>" class="btn"><?php _e('Projects'); ?></a></li>
				<li><a class="btn about"><?php _e('About'); ?></a></li>
				<li><a class="btn contact"><?php _e('Contact'); ?></a></li>
			</ul>		
		</div>
		
		<div class="inner container">
			<div class="logo-container">
				<a class="logo icon" href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
					<svg version="1.1" id="ajlogo" <?php if(is_front_page()): ?>class="animate"<?php endif; ?> xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 width="268.373px" height="459.004px" viewBox="0 0 268.373 459.004" enable-background="new 0 0 268.373 459.004"
						 xml:space="preserve">
						<path class="szar" fill="none" stroke="#010101" stroke-miterlimit="10" d="M152.646,423.566l6.773-7.742c5.162-4.839,7.743-2.58,10.969,0.97
							c5.484,6.128,17.098,17.096,31.291,17.096c19.355,0,39.355-14.193,39.355-48.387V232.596c0-3.227,2.58-6.13,6.129-6.13h12.581
							c3.548,0,6.129,2.903,6.129,6.13v152.26c0,44.84-27.097,70.647-64.84,70.647c-28.065,0-43.55-17.099-49.034-23.872
							C150.388,429.051,150.709,425.824,152.646,423.566"/>
						<path class="dot" fill="none" stroke="#010101" stroke-miterlimit="10" d="M152.776,215.102c0,7.891-6.396,14.288-14.289,14.288
							c-7.89,0-14.287-6.397-14.287-14.288c0-7.892,6.397-14.288,14.287-14.288C146.38,200.813,152.776,207.21,152.776,215.102"/>
						<path class="szar" fill="none" stroke="#010101" stroke-miterlimit="10" d="M119.238,2.5h-12.519c-0.543,0-1.063,0.06-1.381,0.104
							c-2.343,0.382-3.92,2.026-4.487,3.444L84.886,42.134L3.146,223.091c-1.936,4.193,0.645,8.389,5.484,8.389h12.391
							c0.147-0.002,0.5-0.006,0.89-0.033c0.028-0.002,0.057-0.004,0.085-0.006v0.002c0.131-0.01,0.263-0.022,0.392-0.038
							c2.424-0.336,4.05-2.028,4.629-3.475l15.965-36.086l81.74-180.956C126.658,6.694,124.077,2.5,119.238,2.5"/>
					</svg>
				</a>
				<?php if(is_front_page()): ?>
					<h1 class="site-title">
						<span class="title"><?php bloginfo('title'); ?></span>
						<span class="sub"><?php _e('digital design') ?></span>
					</h1>
				<?php endif; ?>
			</div>	
		</div>
	</header><!-- #header -->

	<div id="main" class="site-main" role="main">
