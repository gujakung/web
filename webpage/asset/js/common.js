$(document).ready(function(){
	$(".scroll-box").scroll(function(){
		var st = $(this).scrollTop();
		var contScroll = $(this).scrollTop() + $(document).height();
		var scrollHeight = $(".scroll").height();
		var textHeight = $(".txt-box").height();
		var unit = contScroll / scrollHeight * 100;
		var percent = unit / 100 * textHeight;
		var scrollHalf = scrollHeight / 4;
		var scrollHalf2 = scrollHalf * 2;
	    var scrollHalf3 = scrollHalf * 3;
	    var scrollHalf4 = scrollHalf * 4;

		if( st > 0 ){
			$("#header , .cont1 .main-bg , .scroll").addClass("active");
		}else{
			$("#header , .cont1 .main-bg , .scroll").removeClass("active");
		}

		// 배경2
		if(contScroll >= 0 && contScroll < scrollHalf2){
			$(".main-bg , .main-txt").addClass("basic2");
			$(".main-bg , .main-txt").removeClass("basic3 basic4");
		// 배경3
		}else if(contScroll >= scrollHalf2 && contScroll < scrollHalf3){
			$(".main-bg , .main-txt").addClass("basic3");
			$(".main-bg , .main-txt").removeClass("basic2 basic4");
		// 배경4
		}else if(contScroll >= scrollHalf3 && contScroll < scrollHalf4){
			$(".main-bg , .main-txt").addClass("basic4");
			$(".main-bg , .main-txt").removeClass("basic2 basic3");
		}

		if(contScroll >= scrollHeight){
			$(".scroll-box , .cont1").addClass("hide");
			$(".cont.disabled").removeClass("disabled");
		}
	});
});

$(window).scroll(function(){
	var st = $(this).scrollTop();
	
	if(st == 0){
		$(".scroll-box , .cont1").removeClass("hide");
		$(".cont1").siblings().addClass("disabled");  
	}
});