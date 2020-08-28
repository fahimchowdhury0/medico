$(window).on("scroll",function(){
	if($(window).scrollTop()) {
	  $('nav').addClass('stickyNav');
	}

	else{
	  $('nav').removeClass('stickyNav');
	}
});
