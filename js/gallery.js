$(document).ready(function() {

	$(window).scroll(function() {
		var bodyTop = $(document).scrollTop();
	
		if (bodyTop > 0) {
			$('.gallery-cover').hide();
			$('.gallery-cover-p').stop().animate(
				{
       				top: '45%',
       				opacity: '0'
       			},
       			300
			);

		} else if (bodyTop === 0) {
			$('.gallery-cover').show();
			$('.gallery-cover-p').stop().animate(
       			{
       				top: '50%',
       				opacity: '1'
       			},
       			300
       		);
		}
	});
});


