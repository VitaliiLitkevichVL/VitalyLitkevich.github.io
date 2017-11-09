$(document).ready(function(){
	initSly();
	initTabs();
	buttonsHendler('news-category');
	buttonsHendler('city-category');
	buttonsHendler('article-category');

	$('#show-category').on('click', function(){
		if ($('#product-category').hasClass('open')) {
			$('#product-category').removeClass('open');
			$(this).html('показать категории');
		} else {
			$('#product-category').addClass('open');
			$(this).html('скрыть категории');
		}
	});
	
});

function initTabs(){
	(function(s) {
		var n;
		s(".tabs").on("click", "li:not(.active)", function() {
			n = s(this).parents(".tabs-block"), s(this).dmtabs(n)
		}), s.fn.dmtabs = function(n) {
			s(this).addClass("active").siblings().removeClass("active"), n.find(".box").eq(s(this).index()).show(1, function() {
				s(this).addClass("open-tab")
			}).siblings(".box").hide(1, function() {
				s(this).removeClass("open-tab")
			})
		}
	})(jQuery);
};

function buttonsHendler(name){
	function open(name){
		var item = $('#' + name);
		item.on('click', function(e){
			item.addClass('open');
		});
	}
	function close(name){
		var item = $('#' + name);
		$(document).mouseup(function (e){ 
			if (!item.is(e.target) && item.has(e.target).length === 0) {
				item.removeClass('open');
			}
		});
	}
	open(name);
	close(name);
};


function initSly(){
	var $frame2 = $('.category-news');
	$frame2.each(function(){
			var $wrap2 = $(this).parent();
			$(this).sly({
			itemNav: 'basic',
			horizontal: 0,
			smart: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			scrollBar: $wrap2.find('.scrollbar'),
			scrollBy: 100,
			speed: 200,
			elasticBounds: 1,
			easing: 'swing',
			dragHandle: 1,
		 	dynamicHandle: 0,
		 	clickBar: 1,
		 	activateOn: 'click',
			scrollBy: 1
			});
	});

	var $frame1 = $('.category-city');
	$frame1.each(function(){
			var $wrap1 = $(this).parent();
			$(this).sly({
			itemNav: 'basic',
			horizontal: 0,
			smart: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			scrollBar: $wrap1.find('.scrollbar'),
			scrollBy: 100,
			speed: 200,
			elasticBounds: 1,
			easing: 'swing',
			dragHandle: 1,
		 	dynamicHandle: 0,
		 	clickBar: 1,
		 	activateOn: 'click',
			scrollBy: 1
			});
	});

	var $frame3 = $('.switch');
	$frame3.each(function(){
			var $wrap3 = $(this).parent();
			$(this).sly({
			itemNav: 'basic',
			horizontal: 0,
			smart: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			scrollBar: $wrap3.find('.scrollbar'),
			scrollBy: 100,
			speed: 200,
			elasticBounds: 1,
			easing: 'swing',
			dragHandle: 1,
		 	dynamicHandle: 0,
		 	clickBar: 1,
		 	activateOn: 'click',
			scrollBy: 1
			});
	});

	var $frame4 = $('.vacancies-slider');
	$frame4.each(function(){
			var $wrap4 = $(this).parent();
			$(this).sly({
			itemNav: 'basic',
			horizontal: 1,
			smart: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			scrollBy: 100,
			speed: 1000,
			elasticBounds: 1,
			easing: 'swing',
			dragHandle: 1,
		 	dynamicHandle: 0,
		 	clickBar: 1,
		 	activateOn: 'click',
			scrollBy: 1,
			pagesBar: $wrap4.find('.pages'),
			activatePageOn:'click'
			});
	});

	var $frame5 = $('.category-article');
	$frame5.each(function(){
			var $wrap5 = $(this).parent();
			$(this).sly({
			itemNav: 'basic',
			horizontal: 0,
			smart: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			scrollBar: $wrap5.find('.scrollbar'),
			scrollBy: 100,
			speed: 200,
			elasticBounds: 1,
			easing: 'swing',
			dragHandle: 1,
		 	dynamicHandle: 0,
		 	clickBar: 1,
		 	activateOn: 'click',
			scrollBy: 1
			});
	});

	var $frame6 = $('.article-list');
	$frame6.each(function(){
			var $wrap6 = $(this).parent();
			$(this).sly({
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
			prevPage: $wrap6.find('.prev'),
			nextPage: $wrap6.find('.next'),
			});
	});

	var $frame7 = $('.ad-list');
	$frame7.each(function(){
			var $wrap7 = $(this).parent();
			$(this).sly({
			itemNav: 'basic',
			horizontal: 1,
			smart: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			scrollBy: 100,
			speed: 500,
			elasticBounds: 1,
			easing: 'swing',
			dragHandle: 1,
		 	dynamicHandle: 0,
		 	clickBar: 1,
		 	activateOn: 'click',
			scrollBy: 1,
			pagesBar: $wrap7.find('.pages'),
			activatePageOn:'click'
			});
	});

	var $frame8 = $('.tenders-slider');
	$frame8.each(function(){
			var $wrap8 = $(this).parent();
			$(this).sly({
			itemNav: 'basic',
			horizontal: 1,
			smart: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			scrollBy: 100,
			speed: 500,
			elasticBounds: 1,
			easing: 'swing',
			dragHandle: 1,
		 	dynamicHandle: 0,
		 	clickBar: 1,
		 	activateOn: 'click',
			scrollBy: 1,
			pagesBar: '.tenders-pages',
			activatePageOn:'click'
			});
	});
};

