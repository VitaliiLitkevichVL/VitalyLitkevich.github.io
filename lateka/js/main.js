$(document).ready(function() {

// Селект
	$('select').selecter({
		cover:true,
	});

// Чекбоксы
	$('input').iCheck({
		checkboxClass: 'checkbox',
		radioClass: 'radio',
		increaseArea: '20%' // optional
	});

// slider-range
jQuery("#slider-range").slider({
	min: 0,
	max: 3500,
	values: [500,3500],
	range: true,
	stop: function(event, ui) {
		jQuery("input#minCost").val(jQuery("#slider-range").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider-range").slider("values",1));
		
	},
	slide: function(event, ui){
		jQuery("input#minCost").val(jQuery("#slider-range").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider-range").slider("values",1));
	}
});

jQuery("input#minCost").change(function(){

	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();

	if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		jQuery("input#minCost").val(value1);
	}
	jQuery("#slider-range").slider("values",0,value1);
});

	
jQuery("input#maxCost").change(function(){
		
	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();
	
	if (value2 > 3500) { value2 = 3500; jQuery("input#maxCost").val(3500)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		jQuery("input#maxCost").val(value2);
	}
	jQuery("#slider-range").slider("values",1,value2);
});

// фильтрация ввода в поля
	jQuery('input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});

// Nymber =================================>
	$(function() {
	var spinner = $( "#floor-from, #floor-to" ).spinner();

	$( "#disable" ).click(function() {
		if ( spinner.spinner( "option", "disabled" ) ) {
			spinner.spinner( "enable" );
		} else {
			spinner.spinner( "disable" );
	}
	});
	$( "#destroy" ).click(function() {
		if ( spinner.spinner( "instance" ) ) {
			spinner.spinner( "destroy" );
		} else {
			spinner.spinner();
		}
	});
	$( "#getvalue" ).click(function() {
		alert( spinner.spinner( "value" ) );
		});

	$( "#setvalue" ).click(function() {
		spinner.spinner( "value", 5 );
		});
	});
// Number end ================================>

	$(function(){
		$('.scroll-box').jScrollPane();
	});

	$('.slider-visual').sly({
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
		prevPage:'.prev',
		nextPage:'.next'
	});

});