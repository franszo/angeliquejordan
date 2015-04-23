<?php

define('THEME_NAME', 'angeliquejordan');

$template_directory = get_template_directory();

$template_directory_uri = get_template_directory_uri();

require( $template_directory . '/inc/default/functions.php' );

require( $template_directory . '/inc/default/hooks.php' );

require( $template_directory . '/inc/default/shortcodes.php' );

// Custom Actions

add_action( 'after_setup_theme', 'custom_setup_theme' );

add_action( 'init', 'custom_init');

add_action( 'wp', 'custom_wp');

add_action( 'widgets_init', 'custom_widgets_init' );

add_action( 'wp_enqueue_scripts', 'custom_scripts', 30);

add_action( 'wp_print_styles', 'custom_styles', 30);


// Custom Filters


//Custom shortcodes


function custom_setup_theme() {
		
	add_theme_support( 'post-thumbnails' );
	
	add_theme_support( 'html5' );

	add_theme_support('editor_style');

	add_post_type_support('page', 'excerpt');


	register_nav_menus( array(
		'primary' => __( 'Primary', THEME_NAME ),
		'secondary' => __( 'Secondary', THEME_NAME )
	) );

	add_editor_style('css/editor-style.css');

}

function custom_init(){
	global $template_directory;

	require( $template_directory . '/inc/classes/bfi-thumb.php' );

	require( $template_directory . '/inc/classes/custom-post-type.php' );


	if(function_exists('get_field')) {
			
		$work_uri = get_page_uri(get_field('work_page', 'options'));

		//Works custom post type
		if ($work_uri) {

			$works = new Custom_Post_Type( 'Work', 
				array(
					'rewrite' => array('with_front' => false, 'slug' => $work_uri),
					'capability_type' => 'post',
					'publicly_queryable' => true,
					'has_archive' => true, 
					'hierarchical' => true,
					'menu_position' => null,
					'menu_icon' => 'dashicons-admin-generic',
					'supports' => array('title', 'editor', 'thumbnail'),
					'plural' => "Work",		
				)
			);

			$works->register_taxonomy("Work category",
				array(
					'name' => 'work-category',
					'rewrite' => array( 'slug' => 'work-category' ),
				),
				array(
					'plural' => "Categories"
				)
			);

			$works->register_post_type();			
		}	
	}
}

if( function_exists('acf_add_options_page') ) acf_add_options_page();

function custom_wp(){
	
}

function custom_widgets_init() {
	global $template_directory;

	require( $template_directory . '/inc/widgets/socials.php' );
	
	register_sidebar( array(
		'name' => __( 'Default', THEME_NAME ),
		'id' => 'default',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => '</aside>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',	
	) );
}

function custom_scripts() {
	global $template_directory_uri, $post;

	wp_enqueue_script('jquery');

	wp_enqueue_script('modernizr', $template_directory_uri.'/js/libs/modernizr.min.js', null, '', true);
	wp_enqueue_script('imagesloaded', $template_directory_uri.'/js/plugins/jquery.imagesloaded.js', array('jquery'), '', true);
	wp_enqueue_script( 'infinite_scroll',  get_template_directory_uri() . '/js/plugins/jquery.infinitescroll.min.js', array('jquery'),null,true );
	wp_enqueue_script('main', $template_directory_uri.'/js/main.js', array('jquery', 'modernizr'), '', true);

	wp_localize_script( 'main', 'url', array(
		'template' => $template_directory_uri,
		'base' => site_url(),
		'ajax' => admin_url('admin-ajax.php')
	));

	if( !empty($post) ) {
		wp_localize_script( 'main', 'post', array(
			'id' => $post->ID
		));
	}
}


function custom_styles() {
	global $wp_styles, $template_directory_uri;

	wp_enqueue_style( 'style', $template_directory_uri . '/css/style.css' );	
	wp_enqueue_style( 'fonts', '//fast.fonts.net/cssapi/c8dd5a72-8a06-4244-a1f4-9bc9a5259ee6.css' );

	wp_dequeue_style('gforms_formsmain_css');

}