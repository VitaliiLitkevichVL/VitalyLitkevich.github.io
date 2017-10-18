$(document).ready(function(){
	$('.slider').sly({
		horizontal: 1,
		smart: 1,
		touchDragging: 1,
		releaseSwing: 1,
		elasticBounds: 1,
		easing: 'swing',
		clickBar: 1,
		itemNav: 'basic',
		startAt: 0,
		speed: 500,
		next:'.next',
		prev:'.prev',
	});

	$('.clients-slider').sly({
		horizontal: 1,
		smart: 1,
		touchDragging: 1,
		releaseSwing: 1,
		elasticBounds: 1,
		easing: 'swing',
		clickBar: 1,
		itemNav: 'basic',
		startAt: 0,
		speed: 500,
		nextPage:'.next-2',
		prevPage:'.prev-2',
	});

	$('.slider-gallary').sly({
		horizontal: 1,
		smart: 1,
		touchDragging: 1,
		releaseSwing: 1,
		elasticBounds: 1,
		easing: 'swing',
		clickBar: 1,
		itemNav: 'basic',
		startAt: 0,
		speed: 500,
		nextPage:'.next-3',
		prevPage:'.prev-3',
	});

	$('.set-list-slider').sly({
		horizontal: 1,
		smart: 1,
		touchDragging: 1,
		releaseSwing: 1,
		elasticBounds: 1,
		easing: 'swing',
		clickBar: 1,
		itemNav: 'basic',
		startAt: 0,
		speed: 500,
		nextPage:'.next-4',
		prevPage:'.prev-4',
	});


	$('input').iCheck({
		checkboxClass: 'checkbox',
		radioClass: 'radio',
		increaseArea: '20%' // optional
	});

	$('.other-item-list').sly({
		horizontal: 1,
		smart: 1,
		touchDragging: 1,
		releaseSwing: 1,
		elasticBounds: 1,
		easing: 'swing',
		clickBar: 1,
		itemNav: 'basic',
		startAt: 0,
		speed: 500,
		nextPage:'.next-5',
		prevPage:'.prev-5',
	});
});