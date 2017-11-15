$(document).ready(function() {
	$('.nav').slimmenu({
		resizeWidth: '820',
		collapserTitle: '',
		animSpeed:'sliw',
		indentChildren: true,
		childrenIndenter: '&raquo;'
	});

	$('.collapse-button').on('click', function(){
		$(this).toggleClass('open');
	});

	$('.map-holder__btn').on('click', function(e){
		e.preventDefault();
		$('.map-holder__map').slideToggle();
	});



	$(".nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top-$('.header').innerHeight();
		$('body,html').animate({scrollTop: top}, 1300);
		onScroll();
	});

	$(".logo__text").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top-$('.header').innerHeight();
		$('body,html').animate({scrollTop: top}, 1300);
		onScroll();
	});

	$(document).on("scroll", onScroll);
	caruselInit();
});


function onScroll(){
	var scroll_top = $(document).scrollTop();
	$('.nav__link').each(function(){
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top+92 && target.position().top + target.outerHeight() > scroll_top+92) {
			$('a.nav__link--active').removeClass("nav__link--active");
			$(this).addClass("nav__link--active");
		}
	});
}

function caruselInit() {
	$('.carusel-post').slick({
		slidesToShow: 2,
		centerPadding: '30px',
		responsive: [
		{
			breakpoint: 730,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		}
		]
	});

	$('.carusel-brands').slick({
		slidesToShow: 4,
		responsive: [
		{
			breakpoint: 730,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
			}
		}
		]
	});
}