$(document).ready(function() {
	function setHeight() {
		$('.portfolio-list-item').height($('.portfolio-list-item').width()-20 + 'px');
	}

	setHeight();
	window.onresize = setHeight;
});