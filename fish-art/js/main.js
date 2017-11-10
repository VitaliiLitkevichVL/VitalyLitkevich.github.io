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
			setTimeout(function(){
				$.fn.fullpage.setAllowScrolling(true);
			}, 200);
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

	$('.prev').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionUp();
	});

	$('.next').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
	});

	$('#nav').slimmenu({
		resizeWidth: '670',
		collapserTitle: '',
		animSpeed:'sliw',
		indentChildren: true,
		childrenIndenter: '&raquo;'
	});

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
	fishOn = true,
	myVar = false;
	positionElement1 = [50, 210],
	positionElement2 = [310, 140],
	positionElement3 = [255, 210],
	positionElement4 = [345, 5],
	positionElement5 = [175, 105],
	positionElement6 = [40, 40],
	positionElement7 = [335, 100],
	positionElement8 = [-700, 155, 0],
	positionElement9 = [900, 150, 0],
	positionText = [370],
	opacityText = 0;

	$('#section3').on('mousewheel', function(event){
		$.fn.fullpage.setAllowScrolling(false);
		if(!inscroll) {
			inscroll = true;
			if(event.deltaY < 0) {
				if (positionElement1[0] > -235) {
					fish1.css({'right': positionElement1[0]-57 + 'px','bottom': positionElement1[1]-75 + 'px'});
					positionElement1[0] = positionElement1[0]-57;
					positionElement1[1] = positionElement1[1]-75;
				}
				if (positionElement1[0] !== -235) {
					myVar = true;
				} else if (positionElement1[0] === -235) {
					setTimeout(function(){
						myVar = false;
					}, 400)
					fishOn = false;
				}
				if (positionElement2[0] < 315) {
					fish2.css({'left': positionElement2[0]+1 + 'px','bottom': positionElement2[1]-92 + 'px'});
					positionElement2[0] = positionElement2[0]+1;
					positionElement2[1] = positionElement2[1]-92;
				}
				if (positionElement3[0] > -110) {
					fish3.css({'left': positionElement3[0]-73 + 'px','bottom': positionElement3[1]-87 + 'px'});
					positionElement3[0] = positionElement3[0]-73;
					positionElement3[1] = positionElement3[1]-87;
				}
				if (positionElement4[0] < 830) {
					fish4.css({'left': positionElement4[0]+97 + 'px','top': positionElement4[1]-15 + 'px'}); 
					positionElement4[0] = positionElement4[0]+97;
					positionElement4[1] = positionElement4[1]-15;
				}
				if (positionElement5[0] < 185) {
					fish5.css({'left': positionElement5[0]+2 + 'px','top': positionElement5[1]-52 + 'px'}); 
					positionElement5[0] = positionElement5[0]+2;
					positionElement5[1] = positionElement5[1]-52;
				}
				if (positionElement6[0] > -300) {
					fish6.css({'left': positionElement6[0]-68 + 'px','top': positionElement6[1]-38 + 'px'}); 
					positionElement6[0] = positionElement6[0]-68;
					positionElement6[1] = positionElement6[1]-38;
				}
				if (positionElement7[0] > -55) {
					fish7.css({'left': positionElement7[0]-78 + 'px','top': positionElement7[1]-62 + 'px'});
					positionElement7[0] = positionElement7[0]-78;
					positionElement7[1] = positionElement7[1]-62;
				}
				if (positionElement8[1] < 255) {
					fish8.css({'top': positionElement8[1]+20 + 'px', 'opacity': positionElement8[2]+0.05}); 
					positionElement8[1] = positionElement8[1]+20;
					positionElement8[2] = positionElement8[2]+0.05;
				}
				if (positionElement9[1] > 50) {
					fish9.css({'top': positionElement9[1]-20 + 'px', 'opacity': positionElement8[2]+0.05});
					positionElement9[1] = positionElement9[1]-20;
					positionElement8[2] = positionElement8[2]+0.05;
				}
				if (positionText[0] > 140) {
					fishText.css({'top': positionText[0]-46 + 'px'});
					positionText[0] = positionText[0]-46;
					fishTextSmall.css({'opacity': opacityText+0.2});
					opacityText = opacityText + 0.2;
				}
			} else {
				if (positionElement1[0] !== 50) {
					myVar = true;
				} else if (positionElement1[0] === 50) {
					fishOn = true;
					myVar = false;
				}
				if (positionElement1[0] < 50) {
					fish1.css({'right': positionElement1[0]+57 + 'px','bottom': positionElement1[1]+75 + 'px'});
					positionElement1[0] = positionElement1[0]+57;
					positionElement1[1] = positionElement1[1]+75;
				}
				if (positionElement2[0] > 310) {
					fish2.css({'left': positionElement2[0]-1 + 'px','bottom': positionElement2[1]+92 + 'px'});
					positionElement2[0] = positionElement2[0]-1;
					positionElement2[1] = positionElement2[1]+92;
				}
				if (positionElement3[0] < 255) {
					fish3.css({'left': positionElement3[0]+73 + 'px','bottom': positionElement3[1]+ 87 + 'px'}); 
					positionElement3[0] = positionElement3[0]+73;
					positionElement3[1] = positionElement3[1]+87;
				}
				if (positionElement4[0] > 345) {
					fish4.css({'left': positionElement4[0]-97 + 'px','top': positionElement4[1]+15 + 'px'}); 
					positionElement4[0] = positionElement4[0]-97;
					positionElement4[1] = positionElement4[1]+15;
				}
				if (positionElement5[0] > 175) {
					fish5.css({'left': positionElement5[0]-2 + 'px','top': positionElement5[1]+52 + 'px'}); 
					positionElement5[0] = positionElement5[0]-2;
					positionElement5[1] = positionElement5[1]+52;
				}
				if (positionElement6[0] < 40) {
					fish6.css({'left': positionElement6[0]+68 + 'px','top': positionElement6[1]+38 + 'px'}); 
					positionElement6[0] = positionElement6[0]+68;
					positionElement6[1] = positionElement6[1]+38;
				}
				if (positionElement7[0] < 335) {
					fish7.css({'left': positionElement7[0]+78 + 'px','top': positionElement7[1]+62 + 'px'}); 
					positionElement7[0] = positionElement7[0]+78;
					positionElement7[1] = positionElement7[1]+62;
				}
				if (positionElement8[1] > 155) {
					fish8.css({'top': positionElement8[1]-20 + 'px', 'opacity': positionElement8[2]-0.05}); 
					positionElement8[1] = positionElement8[1]-20;
					positionElement8[2] = positionElement8[2]-0.05;
				}
				if (positionElement9[1] < 150) {
					fish9.css({'top': positionElement9[1]+20 + 'px', 'opacity': positionElement8[2]-0.05}); 
					positionElement9[1] = positionElement9[1]+20;
					positionElement8[2] = positionElement8[2]-0.05;
				}
				if (positionText[0] < 370) {
					fishText.css({'top': positionText[0] + 46 + 'px'});
					positionText[0] = positionText[0]+46;
					fishTextSmall.css({'opacity': opacityText-0.2});
					opacityText = opacityText - 0.2;
				}
			}
			if(event.deltaY > 0 && fishOn && !myVar) {
				$.fn.fullpage.moveSectionUp();
				setTimeout(function(){
					$.fn.fullpage.setAllowScrolling(true);
				}, 400);
			}
			if(event.deltaY < 0 && !fishOn && !myVar) {
				$.fn.fullpage.moveSectionDown();
				setTimeout(function(){
					$.fn.fullpage.setAllowScrolling(true);
				}, 400);
			}
		}
		setTimeout(function(){
			inscroll = false;
		}, 300);
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

