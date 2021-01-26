function SliderBox1__init() {
    $(".slider-box-1--1 > .slick").slick({
      dots: false,
      //autoplay: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: 0,
      arrows: true,
      prevArrow: ".slider-box-1--1 > .arrows > .btn-arrow-left",
      nextArrow: ".slider-box-1--1 > .arrows > .btn-arrow-right"
    });
  
    $(".slider-box-1--2 > .slick").slick({
      dots: false,
      //autoplay: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: 0,
      arrows: true,
      prevArrow: ".slider-box-1--2 > .arrows > .btn-arrow-left",
      nextArrow: ".slider-box-1--2 > .arrows > .btn-arrow-right"
    });
  }
  
  SliderBox1__init();
  