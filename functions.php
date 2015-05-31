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

add_filter( 'tiny_mce_before_init', 'my_mce_before_init_insert_formats' ); 

add_filter('body_class','custom_body_classes');

add_filter( 'embed_oembed_html', 'custom_oembed_filter', 10, 4 ) ;



// Custom Filters

add_filter( 'get_next_post_where', 'gist_adjacent_post_where' );

add_filter( 'get_previous_post_where', 'gist_adjacent_post_where' );

add_filter( 'get_next_post_sort', 'gist_adjacent_post_sort' );

add_filter( 'get_previous_post_sort', 'gist_adjacent_post_sort' );


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
					'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
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
	wp_enqueue_script('lettering', $template_directory_uri.'/js/plugins/jquery.lettering.js', array('jquery'), '', true);	

	if ( 'work' == get_post_type() ) {
		wp_enqueue_script('fullpage', $template_directory_uri.'/js/plugins/jquery.fullPage.min.js', array('jquery'), '', true);
		wp_enqueue_script('pep', $template_directory_uri.'/js/plugins/jquery.pep.js', array('jquery'), '', true);
	}

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


if ( !is_admin() ) add_filter( 'pre_get_posts', 'my_get_posts' );
function my_get_posts( $query ) {
	if ( is_front_page() ){

		$query->set( 'post_type', array( 'work', 'nav_menu_item') );
		$query->set('posts_per_page', 10);                       

	}
	return $query;
}

function content_by_id( $post_id=0, $more_link_text = null, $stripteaser = false ){
    global $post;
    $post = get_post($post_id);
    setup_postdata( $post, $more_link_text, $stripteaser );
    the_content();
    wp_reset_postdata( $post );
}

function my_mce_before_init_insert_formats( $init_array ) {  
	$style_formats = array(  
		// Each array child is a format with it's own settings
		array(  
			'title' => 'Subtitle',  
			'block' => 'span',  
			'classes' => 'subtitle',
			'wrapper' => true,
			
		),  		
		array(  
			'title' => 'Uppercase',  
			'block' => 'span',  
			'classes' => 'uppercase',
			'wrapper' => true,
		)	
	);  

	$init_array['style_formats'] = json_encode( $style_formats );  
	
	return $init_array;  
}

function custom_body_classes($classes) {
	if ( ! is_home()) {
		$classes[] = 'header-fixed';
	}
	return $classes;
}


function custom_oembed_filter($html, $url, $attr, $post_ID) {
    $return = '<div class="video-container">'.$html.'</div>';
    return $return;
}



/**
 * Customize Adjacent Post Link Order
 */
function gist_adjacent_post_where($sql) {
  if ( !is_main_query() || !is_singular() )
    return $sql;

  $the_post = get_post( get_the_ID() );
  $patterns = array();
  $patterns[] = '/post_date/';
  $patterns[] = '/\'[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}\'/';
  $replacements = array();
  $replacements[] = 'menu_order';
  $replacements[] = $the_post->menu_order;
  return preg_replace( $patterns, $replacements, $sql );
}

function gist_adjacent_post_sort($sql) {
  if ( !is_main_query() || !is_singular() )
    return $sql;

  $pattern = '/post_date/';
  $replacement = 'menu_order';
  return preg_replace( $pattern, $replacement, $sql );
}