$(document).ready(function(){
	var w = $(window).width;
	
	var scroll_start = 0;
	var startchange = $(' ... '); //div class
	var offset = startchange.offset();

	if(startchange.length){
		$(document).scroll(function() {
			scroll_start = $(this).scrollTop();
			if(scroll_start > offset.top) {
				
			} else {

			}
		});
	}
});