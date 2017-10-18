$(document).ready(function(){
	initUpload();
	initSly();

	$('.btn-drop').click(function(e){
		$(this).toggleClass('active');
		e.preventDefault();
		var $wrap = $(this).parent();
		$wrap.find('.drop').slideToggle(300);
	});

});

function initSly(){
	
	var $frame2 = $('.main-filter');
	$frame2.each(function(){
			var $wrap2 = $(this).parent();
			$(this).sly({
			itemNav: 'basic',
			horizontal: 1,
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
		 	dynamicHandle: 1,
		 	clickBar: 1,
		 	activateOn: 'click',
			scrollBy: 1
			});
	});
};

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
