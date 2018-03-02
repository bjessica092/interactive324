$(document).ready(function(){
	console.log("my js is working");


$("#second").hide(0, 'linear');

$("#div").on('click', function(event){

//for some reason it works when "hidden" instead of "visible".
	if($('.eng').is(':hidden')) {
		$('body').css('background', '#540048');
	}
	else if ($('.span').is(':hidden')) {
		$('body').css('background', 'maroon');
	};

	if($("#first").is(':visible')) {
		$('#first').hide();
		$('#second').show();
	}
	else {
		$('#second').hide();
		$('#first').show();
	};

});

//have to use this function in addition to the one in click function 
//so that there the correct background color when the page loads.
$(document).ready(function() {

	if($('.eng').is(':visible')) {
		$('body').css('background', '#540048');
	}
	else if ($('.span').is(':visible')) {
		$('body').css('background', 'maroon');
	}
});


});

