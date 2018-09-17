$(document).ready(function() {

  $(window).on("scroll", function() {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    var offset = $('.event').offset();
    var navbarDisplay = $('body').scrollTop();

    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      $('.display-nav').stop().animate(
        {
          top: '0px',
          opacity: '1'
        },
        300
      );

    } 
     
    if ($(window).scrollTop() >= $('.event').position().top) {

      $('.unactive-link, .icons').css({'color': 'white'});
      $('.unactive-link:hover, .icons:hover').css({'color': 'orange'});

    } else {
      $('.unactive-link, .icons').css({'color': 'black'});
    }

  });
});

$(document).ready(function() {
  var restaurant = $('.restaurant');
  var catering = $('.catering');
  var backgroundImage1 = $('.background-image-container1');
  var backgroundImage2 = $('.background-image-container2');
    
  if (restaurant.hasClass('banner-active')) {
      backgroundImage2.addClass('z-index-3');

      catering.hover(function() {
      catering.addClass('banner-active');
      restaurant.removeClass('banner-active');

      backgroundImage2.stop().animate(
        {
          opacity: '0'
        },
        200,
        );

      }, function() {
        catering.removeClass('banner-active');
        restaurant.addClass('banner-active');

        backgroundImage2.stop().animate(
          {
            opacity: '1'
          },
          200,
          );
            

      });

  } else {
    backgroundImage1.addClass('z-index-3');

    restaurant.hover(function() {
      restaurant.addClass('banner-active');
      catering.removeClass('banner-active');

      backgroundImage1.stop().animate(
        {
          opacity: '0'
        },
        200,
        );

      }, function() {
        restaurant.removeClass('banner-active');
        catering.addClass('banner-active');

        backgroundImage1.stop().animate(
          {
            opacity: '1'
          },
          200,
          );
            

    });

  }
});



