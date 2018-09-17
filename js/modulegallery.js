$(document).ready(function() {
	var gallery = $('.gallery');
	var topCover = $('.top-cover');
	var moduleClose = $('.module-close');
	var galleryModule = $('.img-responsive');
	var caption = $('.caption');
	var moduleImg = $('.module-img');
	var imgGallery = $('.img-gallery');
	var leftArrow = $('.glyphicon-menu-left');
	var rightArrow = $('.glyphicon-menu-right');
	var img;
	var newImg;

	
	imgGallery.on('click', function() {

		var dataValueClicked = $(this).attr('data-value');
		img = Number(dataValueClicked);
		topCover.css({'display': 'block'});

		moduleImg.each(function() {
			if (dataValueClicked === $(this).attr('data-value')) {
				$(this).removeClass('hide');
			}
		});
	});


	leftArrow.on('click', function() {
		if (img > 1) {
			newImg = img - 1;
			changeImage()
		}
	});


	rightArrow.on('click', function() {
		if (img < 12 ) {
			newImg = img + 1;
			changeImage();
		}
	});


	moduleClose.on('click', function() {
		topCover.css({'display': 'none'});
		moduleImg.addClass('hide');
	});


	galleryModule.hover(function() {
			caption.removeClass('hide');
		
		}, function() {
			caption.addClass('hide');
		}
	);


	function changeImage() {

		moduleImg.each(function() {
			if (Number($(this).attr('data-value')) === img) {
				$(this).addClass('hide');
			} else if ($(this).attr('data-value') == newImg) {
				$(this).removeClass('hide');
			}
		});

		img = newImg;
	}

});