  /*
  Caleb Johnson
  Web Programming 2
  bootstrap/jquery
  
  The rest of my Jquery is embedded at the bottom of the HTML
  */
// make function to create variable with active property that passes onto the next img with interval rate of 3000
function slider(){
	$current = $('.slider img.active');
	if($current.length==0){
		$('.slider img:first-child').addClass('active');
	}else{
		$next = $current.removeClass('active').next();
		if($next.length==0){
			$('.slider img:first-child').addClass('active');
		}else{
			$next.addClass('active');
		}
	}
}
setInterval(slider,1500);	