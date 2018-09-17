$(document).ready(function() {
	var lastScrollTop = 0;

  $(window).scroll(function(event){
   	  var st = $(this).scrollTop();
   		if (st > lastScrollTop){
       		$('.display-nav').stop().animate(
       			{
       				top: '-25px',
       				opacity: '0'
       			},
       			300
       		);
   		} else {
      		$('.display-nav').stop().animate(
       			{
       				top: '0px',
       				opacity: '1'
       			},
       			300
       		);
   		}

   		lastScrollTop = st;
	});

	$('.nav-button').click(function() {
		$('.display-nav').hide();
		$('.module').show();
		$('.module ul').slideDown();	
    $('body').addClass('stop-scrolling');
	});

	$('.nav-close').click(function() {
		$('.module').hide()
		$('.display-nav').show();
		$('.module ul').hide();
    $('body').removeClass('stop-scrolling');
	});

  $(window).resize(function() {
    if (this.innerWidth > 768) {
      $('.module').hide()
      $('.display-nav').show();
      $('.module ul').hide();
      $('body').removeClass('stop-scrolling');
    }
  });

});


