(function($) {
  
  var swiper = new Swiper('.ip-hero-slider', {
    effect: 'cards',
    grabCursor: true,
    initialSlide: 1,
    
  });

  var swiper = new Swiper('.ip-series-slider.slider-ltr', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 0,
      enabled: true,
    }
  });


  var swiper = new Swiper('.ip-series-slider.slider-rtl', {
    // direction: 'rtl',
    slidesPerView: 'auto',
    spaceBetween: 24,
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 0,
      enabled: true,
    },
  });



  
})(jQuery)











