$(document).ready(function(){
	$('.header__navbar-menu-icon').click(function(){
		$(this).toggleClass('open');
		$('.header__menu').fadeToggle(400);
		$('.section').toggleClass('blur');
		$('body').toggleClass('menu_open');
	});
	
});