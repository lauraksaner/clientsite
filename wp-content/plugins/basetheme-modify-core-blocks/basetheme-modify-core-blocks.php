<?php
/**
 * Plugin Name:     Basetheme - Modify Core Blocks
 * Plugin URI:      https://github.com/timstl/basetheme-modify-core-blocks
 * Description:     Modify core blocks: Remove and add styles, etc.
 * Version:         1.1
 * Author:          Tim Gieseking, timstl@gmail.com
 * Author URI:      http://timgweb.com
 * License:         GPL-2.0+
 * License URI:     http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:     basetheme
 *
 * @package WordPress
 * @subpackage Custom Post Types
 * @since 1.0
 * @version 1.0
 */

/* Abort! */
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Enqueue script.
 */
function bt_modify_core_blocks_enqueue() {
	wp_enqueue_script(
		'bt-modify-core-blocks',
		plugins_url( 'basetheme-modify-core-blocks.js', __FILE__ ),
		array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' )
	);
}
add_action( 'enqueue_block_editor_assets', 'bt_modify_core_blocks_enqueue' );

/**
 * Modify Tiny MCE Settings.
 * This is for ACF blocks that use the content editor.
 */
add_filter( 'mce_buttons_2', 'bt_add_mce_buttons' );
add_filter( 'tiny_mce_before_init', 'bt_modify_tiny_mce_style_formats' );

function bt_add_mce_buttons( $buttons ) {
	array_unshift( $buttons, 'styleselect' );
	return $buttons;
}

function bt_modify_tiny_mce_style_formats( $settings ) {

	$style_formats = array();

	foreach ( array( 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ) as $heading ) {
		$style_formats[] = array(
			'title'    => strtoupper( $heading ) . ' style',
			'classes'  => 'is-style-' . $heading,
			'selector' => 'p,h1,h2,h3,h4,h5,h6',
			'inline'   => false,
		);
	}

	$settings['style_formats'] = json_encode( $style_formats );

	return $settings;
}

