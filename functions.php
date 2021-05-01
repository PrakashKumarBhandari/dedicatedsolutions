<?php
/**
 * dedicatedsolutions functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package dedicatedsolutions
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'dedicatedsolutions_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function dedicatedsolutions_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on dedicatedsolutions, use a find and replace
		 * to change 'dedicatedsolutions' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'dedicatedsolutions', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary menu', 'dedicatedsolutions' ),
				'footer'  => __( 'Secondary menu', 'dedicatedsolutions' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		/*
		add_theme_support(
			'custom-background',
			apply_filters(
				'dedicatedsolutions_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);
		*/

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		$logo_width  = 300;
		$logo_height = 100;

		add_theme_support(
			'custom-logo',
			array(
				'height'               => $logo_height,
				'width'                => $logo_width,
				'flex-width'           => true,
				'flex-height'          => true,
				'unlink-homepage-logo' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'dedicatedsolutions_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function dedicatedsolutions_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'dedicatedsolutions_content_width', 750 );
}
add_action( 'after_setup_theme', 'dedicatedsolutions_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function dedicatedsolutions_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'dedicatedsolutions' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'dedicatedsolutions' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'dedicatedsolutions_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function dedicatedsolutions_scripts() {
	wp_enqueue_style( 'ds-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'ds-style', 'rtl', 'replace' );

	// CSS Files
	wp_enqueue_style( 'ds-bootstrap', trailingslashit(get_template_directory_uri()) . 'assets/plugin/bootstrap/css/bootstrap.css', array(), NULL );
	wp_enqueue_style( 'ds-fullpage-style', trailingslashit(get_template_directory_uri()) . 'assets/css/fullpage.min.css', array(), wp_get_theme()->get( 'Version' ) );
	wp_enqueue_style( 'ds-style-main', trailingslashit(get_template_directory_uri()) . 'assets/css/style.css', array(), wp_get_theme()->get( 'Version' ) );

	// JS Scripts
	wp_enqueue_script(
		'ds-slim-script',
		trailingslashit(get_template_directory_uri()) . 'assets/js/jquery-3.3.1.slim.min.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
	wp_enqueue_script(
		'ds-propper-script',
		trailingslashit(get_template_directory_uri()) . 'assets/js/popper.min.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
	wp_enqueue_script(
		'ds-fullpage-script',
		trailingslashit(get_template_directory_uri()) . 'assets/js/fullpage.min.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
	wp_enqueue_script(
		'ds-shuffle-script',
		trailingslashit(get_template_directory_uri()) . 'assets/js/shuffle.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
	wp_enqueue_script(
		'ds-custom-js',
		trailingslashit(get_template_directory_uri()) . 'assets/js/custom.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);



	// wp_enqueue_script( 'dedicatedsolutions-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'dedicatedsolutions_scripts' );


/**
 * Implement the Custom Header feature.
 */
// require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/*  Advance Custom Fields */
require get_template_directory() . '/inc/acf/acf-init.php';

/* Menu functions and filters. */
require get_template_directory() . '/inc/menu-functions.php';



/**
 * Customizer additions.
 */
// require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
// if ( defined( 'JETPACK__VERSION' ) ) {
// 	require get_template_directory() . '/inc/jetpack.php';
// }




function required_custom_post_types(){
   
	// Services
	register_post_type('services', array(
		'labels' => array('name' => 'Our Services'),
		'public' => true,
		'menu_position'=> 24,
		'supports' => array('title','editor','thumbnail','excerpt'),
		'rewrite'=> array('slug'=> 'services'),
		'menu_icon' => 'dashicons-sos'
	));

	// Why Us
	register_post_type('why-us', array(
		'labels' => array('name' => 'Why Us'),
		'public' => true,
		'menu_position'=> 22,
		'supports' => array('title','editor','thumbnail','excerpt'),
		'rewrite'=> array('slug'=> 'services'),
		'menu_icon' => 'dashicons-awards'
	));

}
add_action('init','required_custom_post_types');

