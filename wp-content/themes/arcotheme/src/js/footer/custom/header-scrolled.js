/**
 * jQuery plugin to monitor scroll distance and add class to an element after document scrolls to a position.
 * This is used for sticky headers, primarily. The "scrolled" state can then be styled in CSS.
 */
( function( $ ) {
	$.fn.scrollclass = function( options ) {
		const opts = $.extend( {}, $.fn.scrollclass.defaults, options );
		const $this = this;
		let state2 = false;

		$( document )
			.scroll( function() {
				if ( false === state2 && $( this ).scrollTop() > opts.pos ) {
					state2 = true;
					$this.addClass( opts.class );
				} else if ( $( this ).scrollTop() < opts.pos ) {
					state2 = false;
					$this.removeClass( opts.class );
				}
			} )
			.trigger( 'scroll' );
	};

	// default options
	$.fn.scrollclass.defaults = {
		class: 'scrolled',
		pos: 50,
	};
}( jQuery ) );

/**
 * Use scrollclass plugin on #site-header if it exists.
 */
jQuery( document ).ready( function( $ ) {
	const $header = $( '#site-header' );
	if ( 0 < $header.length ) {
		$header.scrollclass( {
			pos: $header.outerHeight(),
		} );
	}

	gsap.registerPlugin(ScrollTrigger);

	let mm = gsap.matchMedia();

	mm.add("(min-width: 1228px)", () => {
		gsap.to(".home #site-header .logo", {
			scrollTrigger: {
				trigger: ".home #site-header",
				start: "top", 
				toggleActions: "play pause reverse",
				end: "+=225",
				scrub:true,
				pin: true
			},
			scale:.3
		} );
	});
	
	/* Search Menu */
	$(".search-icon").prepend('<form role="search" method="get" id="searchform" action="/" ><input type="search"  name="s"  placeholder="Search..." value/></form>');
	
});