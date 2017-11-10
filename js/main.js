$(document).ready(function() {
	setHeight();
	$('.info-box .btn').on('click', function(){
		$('.info-box').toggleClass('closed');
		$('.wrapper').toggleClass('all-width');
		setTimeout(setHeight, 1000);
	});
	$(".info-box .inner").mCustomScrollbar({
		  theme:"dark",
	});
	window.onresize = setHeight;
});

	function setHeight() {
		$('.mCustomScrollbar').height($(window).height()); 
		$('.portfolio-list-item').height($('.portfolio-list-item').width()-20 + 'px');
	}
