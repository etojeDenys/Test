 $('.card').on('click',function(){
   $('.container').toggleClass('container-origin');

});

$('.menu-btn__1').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn__1_active');
    $('.menu_nav').toggleClass('menu_nav_active');
    $('.menu-block').toggleClass('menu-block_active');

  });
$('.envelope').on('click',function(){
   $('.envelope_top').toggleClass('envelope_top__close');
   $('.paper').toggleClass('paper__close');
   
   
});
$('.cardd').on('click',function () {
  $('.front').toggleClass('front_active');
  $('.back').toggleClass('back_active');

});
$('.menu-btn__2').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn__2__active');
  $('.menu_nav__2').toggleClass('menu_nav__2__active');

});