jQuery(document).ready(function($) {
	$('.hover-boxes .kb-section-link-overlay').on("mouseover", function () {
		$(this).parent().find('.kt-inside-inner-col > .wp-block-group > figure.wp-block-image').css("margin-right", "-10px");
	});
	$('.hover-boxes .kb-section-link-overlay').on("mouseout", function () {
		$(this).parent().find('.kt-inside-inner-col > .wp-block-group > figure.wp-block-image').css("margin-right", "0");
	});


});