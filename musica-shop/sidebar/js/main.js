$(document).ready(function(){
	$('select').selecter({
		cover: true
	});

	// slider-range
	jQuery("#slider-range").slider({
		min: 0,
		max: 999,
		values: [0,999],
		range: true,
		stop: function(event, ui) {
			jQuery("input#minCost").val(jQuery("#slider-range").slider("values",0));
			jQuery("input#maxCost").val(jQuery("#slider-range").slider("values",1));
			var costText = jQuery("#price-text");
			var text = "Price: $" + jQuery("#slider-range").slider("values",0)+" - " + "$"+jQuery("#slider-range").slider("values",1);
			costText.text(text);
		},
		slide: function(event, ui){
			jQuery("input#minCost").val(jQuery("#slider-range").slider("values",0));
			jQuery("input#maxCost").val(jQuery("#slider-range").slider("values",1));
			var costText = jQuery("#price-text");
			var text = "Price: $" + jQuery("#slider-range").slider("values",0)+" - "+jQuery("#slider-range").slider("values",1);
			costText.text(text);
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

});