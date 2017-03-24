$("#fixation").load("../html/external/fixation.html");

$("#fixation").on("mouseenter", ".i", function() {
		$(this).children('.t').css({
			display:"block",
			color:"#fff"
		});
		var _have = $(this).children(".service").context.className;
		if (_have == "i i1") {
			$('.service').css({
				display:"block"
			});
		}else if (_have == "i i4") {
			$('.attention').css({
				display:"block"
			});
		}else if (_have == "i i5") {
			$('.app').css({
				display:"block"
			});
		}
		$('.service-img').click(function() {
			$('.service').css({
				display:"none"
			});
		})
		
})

$("#fixation").on("mouseleave", ".i", function() {
		$(this).children('.t').css({
			display:"none"
		});
		$('.service').css({
			display:"none"
		});
		$('.attention').css({
			display:"none"
		});
		$('.app').css({
			display:"none"
		});
})

$(window).scroll(function() {
	var st = $(this).scrollTop();
	if (st >= 500) {
		$(".i7").show();
		$('.i7').css({'borderTop':'none'});
	} else if (st <= 500) {
		$(".i7").hide();
	}
})

$('.i7').click(function() {
	$('body').animate({scrollTop:0}, 100);
})