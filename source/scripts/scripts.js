$(document).ready(function() {
	
	// Гармошка
	$('.cb-questions__link').on('click' , function(e) {
		e.preventDefault();
		var thisEl = $(this),
			thisClosest = thisEl.closest('.cb-questions__elem');
			$('.cb-questions__elem').removeClass('active');
			thisClosest.addClass('active');
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

	
}); 


