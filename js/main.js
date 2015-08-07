$( document ).ready(function() {

// Collapsible Content Sections
	$( '.contact' ).click(function() {
		$( '.contact_cont' ).slideToggle();
	});

	$( '.gift_cert' ).click(function() {
		$( '.gift_cont' ).slideToggle();
	});

	$( '.award' ).click(function() {
		$( '.award_cont' ).slideToggle();
	});

// Backstretch
	$( '.gallery' ).backstretch([
		"img/jjs-building.jpg",
		"img/jjs-menu.jpg",
		"img/jjs-wait.jpg",
		], {duration: 3000, fade: 750});

// MixItUp
	$( '#Container' ).mixItUp();

// StickUp
	if ( $( ".overlay" ).length ) {
		$('.overlay').chardinJs('start');
	}
});



