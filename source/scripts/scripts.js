$(document).ready(function() {
	
	// Гармошка
	$('.cb-questions__link').on('click' , function(e) {
		e.preventDefault();
		var thisEl = $(this),
			thisClosest = thisEl.closest('.cb-questions__elem');
			if (!(thisClosest.hasClass('active'))) {
				$('.cb-questions__elem').removeClass('active');
				thisClosest.addClass('active');
			} else {
				$('.cb-questions__elem').removeClass('active');
				thisClosest.removeClass('active');
			}

	});

	// подсветка карты
	var svg = document.querySelector("svg");
	var rects = document.querySelectorAll(".cb-map__redion");

	var i = rects.length;
	while(i--) {
	  rects[i].addEventListener("mouseenter", function(e) {
	    svg.appendChild(e.target);
	    svg.appendChild(e.target);
	  });
	}

	// чекбоксы работают по тапу на иконки

	// $('.cb-interview__elem').on('click', function(e) {
	// 	e.preventDefault();
	// 	var thisEl = $(this),
	// 		thisClosest = thisEl.closest('.cb-interview__elem'),
	// 		thisChildCekbox = thisClosest.find('.cb-interview__checkbox');

	// 		if(thisChildCekbox.prop("checked")) {  
	//             thisChildCekbox.prop('checked', false);
	//            // $(this).parent('.cb-interview__elem').addClass('active');
	//         } else {
	//             thisChildCekbox.prop('checked', true);
	//             // $(this).parent('.cb-interview__elem').removeClass('active');
	//         }
	// });

	$('.cb-interview__elem').click(function(e) {
		var $cbx = $(this).find('.cb-interview__checkbox');

		$cbx.prop("checked", !$cbx.prop("checked"));	
		$(this).toggleClass('active');
		
		e.preventDefault();
	});

	// чекбокс карты

	// $('.btn_transparent').on('click', function(e) {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	var thisEl = $(this);


	// 	$('.btn-block-checkbox__check').css('left', thisEl.position().left);
	// 	$('.btn-block-checkbox__check').css('width', thisEl.css('width'));
	// });

	
	

	// Верхнее меню
	$('.cb-header__link').click(function() {
		console.log('Пункт меню');
		$('.cb-header__item').removeClass('active');
		$(this).parent().addClass('active'); 

	}); 

	/*открытие попапа карты*/

	$('.cb-map__city-link').on('click', function(e) {
		e.preventDefault();

		$('#cb-popup-places').addClass('active');
	});

	$('.cb-places__photo').on('click', function(e) {
		e.preventDefault();

		$('#cb-popup-fotorama').addClass('active');
	});


	

	$('.cb-popup__close').on('click', function(e) {
		e.preventDefault();

		$('.cb-popup').removeClass('active');
	});



	$('.fotorama').fotorama({
	  width: '100%',
	  height: '500px',
	  ratio: 16/9,
	  allowfullscreen: true,
	  nav: 'thumbs',
	  loop:true,
	  cropToFit:true,
	  arrows: true,
	});

	$(".cb-slider-main").slick({
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$(".cb-slider-small").slick({
		dots: false,
		arrows: true,
		slidesToShow: 5,
		slidesToScroll: 5
	});





  
	
}); 


