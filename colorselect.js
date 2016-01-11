$(function(){
	colorChange();
	$('.red').on('input', colorChange);

	$('.green').on('input', colorChange);

	$('.blue').on('input',colorChange);

	$('.alpha').on('input', colorChange);

	function colorChange (){
		var color = "rgba(" + $('.red').val() + "," + $('.green').val() + ","
			+ $('.blue').val() + ","+  $('.alpha').val() + ")";
		$('#color_text').text(color);
		$('body').css('background',color);
	}
});

