$(function() {
	var pagetop = $('#pagetop');	
	pagetop.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});
	pagetop.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});

