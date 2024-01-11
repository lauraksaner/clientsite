<?php
/**
 * Display social icons from ACF fields.
 */
?>

<h3>Get In Touch</h3>
<span class="footer-phone"><?php the_field('footer_phone', 'option'); ?></span>
<span class="footer-email"><?php the_field('footer_email', 'option'); ?></span>
<?php if ( function_exists( 'bt_social_accounts_shortcode' ) ) {
	echo bt_social_accounts_shortcode();
}