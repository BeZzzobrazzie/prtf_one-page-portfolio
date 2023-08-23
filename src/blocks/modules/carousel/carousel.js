

console.log('carousel');


$(document).ready(function(){
  $('.carousel').slick({
    prevArrow: '',
    nextArrow: '',

    infinity: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  });
});


