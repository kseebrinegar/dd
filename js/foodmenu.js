$(document).ready(function() {
	var currentActiveLink;
	var dropDownMenuList = $('.food-drop-down-menu li');
	var menuHeaderChange = $('.menu-2 h2');
	var menuHeaderChange1 = $('.menu-2 h4');
	var moreMenusArrows = $('.food-menu-button-down, .food-menu-button-up');
	var foodDropDownMenu = $('.food-menu-button-down, .food-menu-button-up, .food-drop-down-menu');
	var foodOptionsArrow = $('.food-options-button-up, .food-options-button-down');
	var listOfMenus = $('.list-of-menus');

	moreMenusArrows.click(function() {
		foodDropDownMenu.toggleClass('hidden');

	});

	foodOptionsArrow.click(function() {
		foodOptionsArrow.toggleClass('hidden');
		$('.food-drop-down-menu-2').toggleClass('display-none-menu-2');
	});
	
	dropDownMenuList.on('click', function(event) {
		var clickedItem = event.target;
		
		dropDownMenuList.each(function(i) {
			
			if (listOfMenus.hasClass('active-menu')) {
				listOfMenus.eq(i).removeClass('active-menu');
				listOfMenus.eq(i).addClass('display-none-menu-2');
			}

			if (clickedItem == dropDownMenuList[i]) {
				listOfMenus.eq(i).removeClass('display-none-menu-2');
				listOfMenus.eq(i).addClass('active-menu');	
			}

			if ($(this).hasClass('active-link')) {
				currentActiveLink = $(this);
			}
		});
	});

	dropDownMenuList.on('click', function() {
		menuHeaderChange1.html('<h4 class="line-height-h4"><strong>' + $(this).text() + '</strong></h4>');
		menuHeaderChange.html($(this).text());
		console.log(menuHeaderChange);
		currentActiveLink.removeClass('active-link');

		$(this).addClass('active-link');

	});
	
});