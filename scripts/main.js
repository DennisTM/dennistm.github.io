$(function(){
	$(document).foundation();
	$(".carousel").slick({
		dots: true,
  		infinite: false,
  		speed: 300,
  		mobileFirst: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		prevArrow: '<button type="button" class="slick-prev"><span class="show-for-sr">Previous</span></button>',
  		nextArrow: '<button type="button" class="slick-next"><span class="show-for-sr">Next</span></button>',
  		responsive: [
		    {
				breakpoint: 1024,
				settings: "unslick" 
		    }
	    ]
	});
});