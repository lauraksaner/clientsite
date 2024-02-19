<?php
/**
 * Output copyright with dynamic year.
 */
?>
<?php if ( function_exists( 'get_field' ) && get_field( 'footer_copyright', 'options' ) ) : ?>
<span class="copyright col-24 col-md-12">
	<?php echo esc_attr( str_ireplace( '%year%', date( 'Y' ), get_field( 'footer_copyright', 'options' ) ) ); ?>
</span>

<span class="col-24 col-md-12 justify-content-end copy-links">
	<a href="/privacy-policy">Privacy Policy</a> 
	<a href="https://transparency-in-coverage.uhc.com/" target="_blank">Health Insurance Transparency</a>
</span>
<?php endif; ?>
