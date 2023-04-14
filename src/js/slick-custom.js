export function slickCustom() {

  //TOPスライド
  $('#js-top-mainvisual').slick({
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    dotsClass: 'slide-dots',
    arrows: false
  });

  //VOICEスライド
  $('#js-voice-list').slick({
    speed: 500,
    autoplay: false,
    dots: false,
    arrows: true,
    prevArrow: '<img src="img/common/ico_slide_arrow_left.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="img/common/ico_slide_arrow_right.svg" class="slide-arrow next-arrow">',
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 856,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
    ]
  });

    //VOICEスライド
    $('#js-voice-list-one').slick({
      speed: 500,
      autoplay: false,
      dots: false,
      arrows: true,
      prevArrow: '<img src="img/common/ico_slide_arrow_left.svg" class="slide-arrow prev-arrow">',
      nextArrow: '<img src="img/common/ico_slide_arrow_right.svg" class="slide-arrow next-arrow">',
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 856,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
      ]
    });


  //PCは静止・SPはスライド
   function sliderSetting(){
    let width = $(window).width();
    if(width <= 768){
      $('.voice-list-pc-unslick').not('.slick-initialized').slick({
        speed: 500,
        autoplay: false,
        dots: false,
        arrows: true,
        prevArrow: '<img src="img/common/ico_slide_arrow_left.svg" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="img/common/ico_slide_arrow_right.svg" class="slide-arrow next-arrow">',
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    } else {
      $('.voice-list-pc-unslick.slick-initialized').slick('unslick');
    }
  }

  sliderSetting();

  $(window).resize( function() {
    sliderSetting();
  });


}
