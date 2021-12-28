$(document).ready(function () {
    //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
      autoplay: 1600,
      loop: true,
      parallax: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      grabCursor: true,
      speed: 900,
      
      onTransitionStart(mySwiper) {
        if ($(".swiper-slide-active").hasClass("Car--riva")) {
          $("body").css("background-color", "#6D889F");
        } else {
          $("body").css("background-color", "#E74824");
        }
      }
    }); 
  });