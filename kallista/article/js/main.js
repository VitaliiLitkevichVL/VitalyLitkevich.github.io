$(document).ready(function(){
	$('#nav').slimmenu({
		resizeWidth: '640',
		collapserTitle: 'Главное меню',
		animSpeed:'sliw',
		indentChildren: true,
		childrenIndenter: '&raquo;'
	});

	$('.gallery').fadeGallery();
	$(".form-title").click(function(){
		var $wrap = $(this).closest(".item-cottage");
		$wrap.find('.form-cottage').slideToggle(1000);
	});
	initDatepicker();
	initUpload();
	initPopups();
	initClosePopups();
	// heightImg();
	// $(window).resize(function(){
	// 	heightImg();
	// });
});

function bildCover(){
	$(".ui-datepicker-calendar").wrap("<div class='calendar-cover'></div>");
}

function initDatepicker(){
	var datepicker = document.getElementById('datepicker');
	if(datepicker) {
		$('#datepicker').datepicker({
			showOtherMonths: true,
			showWeek: true,
			changeMonth: true,
			changeYear: true,
		});
	}
}

jQuery.fn.fadeGallery = function(_options){
	var _options = jQuery.extend({
		slideElements:'.gallery-visual > li',
		btnNext:'a.next',
		btnPrev:'a.prev',
		btnPlayPause:'a.play-pause',
		pausedClass:'paused',
		playClass:'playing',
		activeClass:'active',
		pauseOnHover:false,
		autoRotation:true,
		autoHeight:false,
		switchTime:0,
		duration:0,
		generatePagination: false,
		pagerList: '<ul>',
		pagerListItem: '<li><a href="#"></a></li>',
		pagerListItemText: 'a',
		pagerLinks: '.gallery-list li',
		event:'click'
	},_options);

	return this.each(function(){
		var _this = jQuery(this);
		var _slides = jQuery(_options.slideElements, _this);
		var _pagerLinks = jQuery(_options.pagerLinks, _this);
		var _btnPrev = jQuery(_options.btnPrev, _this);
		var _btnNext = jQuery(_options.btnNext, _this);
		var _btnPlayPause = jQuery(_options.btnPlayPause, _this);
		var _pauseOnHover = _options.pauseOnHover;
		var _autoRotation = _options.autoRotation;
		var _activeClass = _options.activeClass;
		var _pausedClass = _options.pausedClass;
		var _playClass = _options.playClass;
		var _autoHeight = _options.autoHeight;
		var _duration = _options.duration;
		var _switchTime = _options.switchTime;
		var _controlEvent = _options.event;

		var _hover = false;
		var _prevIndex = 0;
		var _currentIndex = 0;
		var _slideCount = _slides.length;
		var _timer;
		if(!_slideCount) return;
		_slides.hide().eq(_currentIndex).show();
		if(_autoRotation) _this.removeClass(_pausedClass).addClass(_playClass);
		else _this.removeClass(_playClass).addClass(_pausedClass);

		if(_btnPrev.length) {
			_btnPrev.bind(_controlEvent,function(){
				prevSlide();
				return false;
			});
		}
		if(_btnNext.length) {
			_btnNext.bind(_controlEvent,function(){
				nextSlide();
				return false;
			});
		}
		if(_pagerLinks.length) {
			_pagerLinks.each(function(_ind){
				jQuery(this).bind(_controlEvent,function(){
					if(_currentIndex != _ind) {
						_prevIndex = _currentIndex;
						_currentIndex = _ind;
						switchSlide();
					}
					return false;
				});
			});
		}

		if(_btnPlayPause.length) {
			_btnPlayPause.bind(_controlEvent,function(){
				if(_this.hasClass(_pausedClass)) {
					_this.removeClass(_pausedClass).addClass(_playClass);
					_autoRotation = true;
					autoSlide();
				} else {
					if(_timer) clearTimeout(_timer);
					_this.removeClass(_playClass).addClass(_pausedClass);
				}
				return false;
			});
		}

		function prevSlide() {
			_prevIndex = _currentIndex;
			if(_currentIndex > 0) _currentIndex--;
			else _currentIndex = _slideCount-1;
			switchSlide();
		}
		function nextSlide() {
			_prevIndex = _currentIndex;
			if(_currentIndex < _slideCount-1) _currentIndex++;
			else _currentIndex = 0;
			switchSlide();
		}
		function refreshStatus() {
			if(_pagerLinks.length) _pagerLinks.removeClass(_activeClass).eq(_currentIndex).addClass(_activeClass);
			_slides.eq(_prevIndex).removeClass(_activeClass);
			_slides.eq(_currentIndex).addClass(_activeClass);
		}
		function switchSlide() {
			_slides.eq(_prevIndex).fadeOut(_duration);
			_slides.eq(_currentIndex).fadeIn(_duration);
			refreshStatus();
		}

		refreshStatus();

	});
}

function initUpload(){

$(function(){
	var wrapper = $( ".upload-cover" ),
	inp = wrapper.find( "input" ),
	btn = wrapper.find( ".btn-upload" ),
	lbl = wrapper.find( ".upload-field" );

// Crutches for the :focus style:
inp.focus(function(){
	wrapper.addClass( "focus" );
}).blur(function(){
	wrapper.removeClass( "focus" );
});

var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

inp.change(function(){
	var file_name;
	if( file_api && inp[ 0 ].files[ 0 ] )
		file_name = inp[ 0 ].files[ 0 ].name;
	else
		file_name = inp.val().replace( "C:\\fakepath\\", '' );

	if( ! file_name.length )
		return;

	if( lbl.is( ":visible" ) ){
		lbl.text( file_name );
		btn.text( "обзор" );
	}else
	btn.text( file_name );
}).change();

});

$( window ).resize(function(){
	$( ".upload-cover input" ).triggerHandler( "change" );
});

};

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
	$('.popup-holder .popup .close-popup, .popup-holder .bg').click(function(){
		$(this).parents('.popup-holder').fadeOut(300, function(){
			$('.popup-holder').css({"left": "-9999px"}).height(0).show();
		});
		return false;
	});
}
function initPopups(){
	$('.add-photo').click(function(){
		popupbg();
		var _holder = $('#photo-popup');
		var _popup = _holder.children('.popup');
		_holder.css({"left": "-9999px"}).show();
		windowScroll(_popup.outerHeight());
		_holder.hide().css({"left": "0"});
		_popup.css('top',wScroll);
		_holder.fadeIn(300);
		return false;
	});
}


// function heightImg(){
// 	var items = document.querySelectorAll('.announcment-visual li');
// 	var maxHeight = 0;
// 	for (i=0; i<items.length; i++) {
// 		items[i].style.height = 'auto';
// 		if (items[i].clientHeight >= maxHeight) {
// 			maxHeight = items[i].clientHeight;
// 		}
// 		items[i].style.height = (maxHeight + 2)  + "px";
// 	}
// }
