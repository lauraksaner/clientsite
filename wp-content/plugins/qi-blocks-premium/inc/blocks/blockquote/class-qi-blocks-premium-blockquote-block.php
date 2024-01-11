<?php

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'Qi_Blocks_Blockquote_Block' ) ) {
	class Qi_Blocks_Blockquote_Block extends Qi_Blocks_Blocks {
		private static $instance;

		public function __construct() {
			// Set block data
			$this->set_block_type( 'premium' );
			$this->set_block_name( 'blockquote' );
			$this->set_block_title( esc_html__( 'Blockquote', 'qi-blocks-premium' ) );
			$this->set_block_subcategory( esc_html__( 'Typography', 'qi-blocks-premium' ) );
			$this->set_block_demo_url( 'https://qodeinteractive.com/qi-blocks-for-gutenberg/blockquote/' );
			$this->set_block_documentation( 'https://qodeinteractive.com/qi-blocks-for-gutenberg/documentation/#blockquote' );
			$this->set_block_video( 'https://www.youtube.com/watch?v=s1P3IbZi56A' );

			parent::__construct();
		}

		/**
		 * @return Qi_Blocks_Blockquote_Block
		 */
		public static function get_instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}
	}

	Qi_Blocks_Blockquote_Block::get_instance();
}
