$(document).ready(function(){
	$('.js--section-services').waypoint(function(direction){
		if(direction == "down"){
			$('nav').addClass("sticky-nav");
			console.log("ok")
		}else {
			$('nav').removeClass("sticky-nav");
		}
	}, {offset: "60px"});
});