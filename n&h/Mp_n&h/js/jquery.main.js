$(document).ready(function(){
			$('.video-list').sly({
				horizontal: 0,
				smart: 1,
				mouseDragging: 1,
				touchDragging: 1,
				releaseSwing: 1,
				elasticBounds: 1,
				easing: 'swing',
				clickBar: 1,
				itemNav: 'basic',
		        startAt: 0,
		        speed: 500,
		        prevPage:'.prev',
		        nextPage:'.next'
			});
			$('.slider').sly({
				horizontal: 1,
				smart: 1,
				mouseDragging: 1,
				touchDragging: 1,
				releaseSwing: 1,
				elasticBounds: 1,
				easing: 'swing',
				clickBar: 1,
				itemNav: 'basic',
		        startAt: 0,
		        speed: 500,
				pagesBar:'.pages',
				activatePageOn:'click',
				draggedClass:'.item-plus'
			});
			
	initPopups();
	initClosePopups();
});

function popupbg(){
	if ($(window).height() < $("#wrapper").height()) {
		$(".popup-holder").css("height",$("#wrapper").height());
	} else {
		$(".popup-holder").css("height",$(window).height());
	}
}
function windowScroll(heightPopup){
	if ((($(window).height() - heightPopup)/2) > 0){
	wScroll = $(window).scrollTop() + (($(window).height() - heightPopup)/2);
	} else {
		wScroll = $(window).scrollTop() + 25;
	}
	if(($(".popup-holder").height()-wScroll-heightPopup) < 0){
		$(".popup-holder").height(wScroll+heightPopup + 20);
	}
}
function initClosePopups(){
	$('.popup-holder .close-popup, .popup-holder .bg').click(function(){
		$(this).parents('.popup-holder').fadeOut(300, function(){
			$('.popup-holder').css({"left": "-9999px"}).height(0).show();
			$('.popup-add').css({"display": "none"});
			$('.popup-enroll').css({"display": "none"});
			$('.popup-subscribe').css({"display": "none"});
		});
		return false;
	});
}
function initPopups(){
	var $popup1= $('.add-school').click(function(){
		popupbg();
		var _holder = $('#callback-popup');
		var _popup = _holder.children('.popup-add');
		_holder.css({"left": "-9999px"}).show();
		windowScroll(_popup.outerHeight());
		_holder.hide().css({"left": "0"});
		_popup.hide().css({"display": "block"});
		_popup.css('top',wScroll);
		_holder.fadeIn(300);
		return false;
	});
	
		var $popup2= $('.add-user').click(function(){
		popupbg();
		var _holder = $('#callback-popup');
		var _popup = _holder.children('.popup-enroll');
		_holder.css({"left": "-9999px"}).show();
		windowScroll(_popup.outerHeight());
		_holder.hide().css({"left": "0"});
		_popup.hide().css({"display": "block"});
		_popup.css('top',wScroll);
		_holder.fadeIn(300);
		return false;
	});
	
		var $popup3= $('.subscribe').click(function(){
		popupbg();
		var _holder = $('#callback-popup');
		var _popup = _holder.children('.popup-subscribe');
		_holder.css({"left": "-9999px"}).show();
		windowScroll(_popup.outerHeight());
		_holder.hide().css({"left": "0"});
		_popup.hide().css({"display": "block"});
		_popup.css('top',wScroll);
		_holder.fadeIn(300);
		return false;
	});
}
	jQuery(window).scroll(function(){
		if ( jQuery(document).scrollTop() > 100 ) {
			jQuery('.home').fadeIn('fast');
		} else {
			jQuery('.home').fadeOut('fast');
		}
	});

