(function($) {
  
  var heroSlider = new Swiper('.ip-hero-slider', {
    effect: 'cards',
    grabCursor: true,
    initialSlide: 1,
    
  });

  var serisSlider = new Swiper('.ip-series-slider.slider-ltr', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 0,
      enabled: true,
    }
  });


  var serisSliderRtl = new Swiper('.ip-series-slider.slider-rtl', {
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


  // brand slider
  var brandSlider = new Swiper('.ip-brand-slider', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 0,
      enabled: true,
    },
  });



  
})(jQuery)











