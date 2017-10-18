$(document).ready(function() {
	fishHandler();
	overflowHeight();
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage', '8thpage'],
		menu: '#nav ul',
		navigation:true,
		paddingTop: '100px',
		onLeave: function(index, nextIndex, direction){
			var sectionMain = $('#section3'),
			sectionFooter = $('#section7'),
			header = $('#header'),
			nav = $('#fp-nav'),
			innerSections = $('.inner');

			setTimeout(
				function (){
					if (sectionMain.hasClass('active')) {
						header.slideUp(600);
						nav.css('padding-top', '0');
					} else {
						header.slideDown(600);
						nav.css('padding-top', '100px');
					}
					if (sectionFooter.hasClass('active') || sectionMain.hasClass('active')) {
						nav.css('padding-top', '0');
					} else {
						nav.css('padding-top', '100px');
					}
				}, 400);
			setTimeout(function(){
				$.fn.fullpage.setAllowScrolling(true);
			}, 200);
			for (var i = 0; i < innerSections.length; i++) {
				if ($(innerSections[i]).hasClass('scroll-js')) {
					if (nextIndex === i+1) {
						$.fn.fullpage.setAllowScrolling(false);
						overflowHeight();
						setTimeout(function(){
							 $.fn.fullpage.setAllowScrolling(false);
						}, 500);
					}
				}
			}

			setTimeout(groupingPages, 400);
			setTimeout(sectionsBg, 400);

			if (nextIndex === 5) {
				setTimeout(function(){
					galeri('.portfolio-list li');
				}, 500);
			}

			if ($('.portfolio-list li').hasClass('visible')) {
				$('.portfolio-list li').removeClass('visible')
			}
		}
	}); // fullpage init end
	heightFirstSection();
	groupingPages();
	navPrompt();
	sectionsBg();
});

function fishHandler() {
	var fishHolder = $('.fish-holder'),
	fish1 = $('.fish1'),
	fish2 = $('.fish2'),
	fish3 = $('.fish3'),
	fish4 = $('.fish4'),
	fish5 = $('.fish5'),
	fish6 = $('.fish6'),
	fish7 = $('.fish7'),
	fish8 = $('.fish8'),
	fish9 = $('.fish9'),
	fishText = $('.fish-text'),
	fishTextSmall = $('.fish-text span'),
	inscroll = false,
	fishOn = true;
	$('#section3').on('mousewheel', function(event){
		$.fn.fullpage.setAllowScrolling(false);
		if(!inscroll) {
			inscroll = true;
			if(event.deltaY < 0) {
			fish1.css({'right':'-235px','bottom':'-164px', 'transform': 'scale(1.2, 1.2)'}); 
			fish2.css({'left':'314px','bottom':'-318px', 'transform': 'scale(1.2, 1.2)'});
			fish3.css({'left':'-107px','bottom':'-224px', 'transform': 'scale(1.2, 1.2)'});
			fish4.css({'left':'827px','top':'-70', 'transform': 'scale(1.2, 1.2)'});
			fish5.css({'left':'183px','top':'-155px', 'transform': 'scale(1.2, 1.2)'});
			fish6.css({'left':'-300px','top':'-150px', 'transform': 'scale(1.2, 1.2)'});
			fish7.css({'left':'-55px','top':'-207px', 'transform': 'scale(1.2, 1.2)'});
			fish8.css({'left':'-700px','top':'157px', 'opacity': '0.6'});
			fish9.css({'left':'900px','top':'250px', 'opacity': '0.6'});
			fishText.css({'left':'0','top':'139px'});
			fishTextSmall.css('opacity', '1');
			setTimeout(function(){
				fishOn = false;
			}, 1000);
		} else {
			fish1.css({'right':'52px','bottom':'208px', 'transform': 'scale(1, 1)'}); 
			fish2.css({'left':'310px','bottom':'137px', 'transform': 'scale(1, 1)'});
			fish3.css({'left':'254px','bottom':'212px', 'transform': 'scale(1, 1)'});
			fish4.css({'left':'346px','top':'4px', 'transform': 'scale(1, 1)'});
			fish5.css({'left':'177px','top':'106px', 'transform': 'scale(1, 1)'});
			fish6.css({'left':'42px','top':'42px', 'transform': 'scale(1, 1)'});
			fish7.css({'left':'333px','top':'101px', 'transform': 'scale(1, 1)'});
			fish8.css({'left':'-700px','top':'250px', 'opacity': '0'});
			fish9.css({'left':'900px','top':'150px', 'opacity': '0'});
			fishText.css({'left':'0','top':'373px'});
			fishTextSmall.css('opacity', '0');
			setTimeout(function(){
				fishOn = true;
			}, 1000);
		}
		if(event.deltaY > 0 && fishOn) {
			$.fn.fullpage.moveSectionUp();
			setTimeout(function(){
				$.fn.fullpage.setAllowScrolling(true);
			}, 400);
		}

		if(event.deltaY < 0 && !fishOn) {
			$.fn.fullpage.moveSectionDown();
			setTimeout(function(){
				$.fn.fullpage.setAllowScrolling(true);
			}, 400);
		}
	}
	setTimeout(function(){
		inscroll = false;
	},700);
});
}

function initMap() {
	var map, marker;
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 55.762632, lng: 37.559485},
		zoom: 18,
		scrollwheel: false
	});
	marker = new google.maps.Marker({
		position: {lat: 55.762632, lng: 37.559485},
		map: map,
		title: 'Россия, Москва, ул. 1905 года, д. 7, стр. 1',
		icon: 'img/map_marker.png'
	});
}

function groupingPages() {
	var sections = $('.section'),
	nav = $('#fp-nav'),
	sectionsLeng = sections.length,
	section;
	for (var i = 0; i <= sectionsLeng; i++) {
		section = $(sections[i]);
		if (section.hasClass('active')) {
			nav.removeClass();
			nav.addClass('right');
			if (i < 3) {
				nav.addClass('first-group');
			} else if (i === 3) {
				nav.addClass('second-group');
			} else if (i === 4) {
				nav.addClass('third-group');
			} else if (i > 4 && i < 7) {
				nav.addClass('fourth-group');
			} else if (i >= 7) {
				nav.addClass('fifth-group');
			}
		}
	}
}

function navPrompt() {
	var arrTextMenu = ['награды и партнёры', 'факты и цифры', 'о студии',
	'главная', 'портфолио', 'услуги', 'клиент', 'контакты'],
	navArr = $('#fp-nav ul li');
	for (var i=0; i < navArr.length; i++) {
		$(navArr[i]).prepend('<span class="text">' + arrTextMenu[i] + '</span>');
		$(navArr[i]).addClass('nav' + i);
	}
}

function sectionsBg(){
	var container = $('#fullpage'),
		 sections = $('.section'),
		 bgSet = ['#ffe4ce', '#ffefd9', '#fffaf6', '#fff', '#fff', '#dcf3f4', '#f1f8f9', '#fff'];
		 for(var i=0; i<sections.length; i++) {
		 	if ($(sections[i]).hasClass('active')) {
		 		container.css('background', bgSet[i]);
		 	}
		 }
}

function galeri(block){
	var items = $(block),
		 i,
		 itemGroup;
		 setTimeout(inner, 500, 0);
		 setTimeout(inner, 1400, 4);
		 setTimeout(inner, 2100, 8);

	function inner(i){
		$(items[i]).addClass('visible');
		$(items[i]).nextAll("li:eq(0), li:eq(1), li:eq(2)").addClass('visible');
		$(items[i]).css('transition', 'opacity 1s, top 1s ease .5s');
		$(items[i]).nextAll("li:eq(0)").css('transition', 'opacity 1s, top 1s ease .8s');
		$(items[i]).nextAll("li:eq(1)").css('transition', 'opacity 1s, top 1s ease 1.1s');
		$(items[i]).nextAll("li:eq(2)").css('transition', 'opacity 1s, top 1s ease 1.3s');
		}
}


function overflowHeight(){
	var innerSections = $('.inner'),
		 coverHeight = $(window).height() - 200,
		 inscroll = false,
		 toTop = true,
		 toBottom = false;
		 innerSections.scrollTop(0);
		 for (var i = 0; i < innerSections.length; i++) {
			if ($(innerSections[i]).height() > coverHeight && !($(innerSections[i]).hasClass('no-scroll'))) {
				 $(innerSections[i]).addClass('scroll-js');
				 $(innerSections[i]).css('overflow-y', 'scroll');
				 $(innerSections[i]).height(coverHeight);
				 $(innerSections[i]).scroll(function(){
					if (this.scrollTop === 0) {
						toTop = true;
						toBottom = false;
					}
					if (this.scrollTop > 0 && (this.scrollTop < this.scrollHeight-this.clientHeight)) {
						toTop = false;
						toBottom = false;
					}
					if (this.scrollTop === this.scrollHeight-this.clientHeight) {
						toBottom = true;
						toTop = false;
					}
				}); // scroll() end
				$(innerSections[i]).on('mousewheel', function(element){
					if (!inscroll) {
						inscroll = true;
						if (toTop && element.deltaY > 0 && (this.scrollTop === 0)) {
							setTimeout(function(){
								$.fn.fullpage.moveSectionUp();
						}, 100);
						setTimeout(function(){
							$.fn.fullpage.setAllowScrolling(true);
						}, 600);
					} else if (toBottom && (element.deltaY < 0) && (this.scrollTop === this.scrollHeight-this.clientHeight)) {
						console.log(this.scrollHeight-this.clientHeight);
						setTimeout(function(){
							$.fn.fullpage.moveSectionDown();
						}, 100);
						setTimeout(function(){
							$.fn.fullpage.setAllowScrolling(true);
						}, 600);
					}
				}
				setTimeout(function(){
					inscroll = false;
				}, 200);
				}); // mousewheel() end
			}
		}
}

function heightFirstSection() {
	var sections = $('.inner');

	if ($(sections[0]).hasClass('scroll-js')) {
		$.fn.fullpage.setAllowScrolling(false);
		overflowHeight();
		setTimeout(function(){
			$.fn.fullpage.setAllowScrolling(false);
		}, 500);
	}
}
