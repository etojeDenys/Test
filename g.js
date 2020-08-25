 $('.card').on('click',function(){
   $('.container').toggleClass('container-origin');

});

$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu_nav').toggleClass('menu_nav_active');
    $('.menu-block').toggleClass('menu-block_active');

  });
$('.envelope').on('click',function(){
   $('.envelope_top').toggleClass('envelope_top__close');
   $('.paper').toggleClass('paper__close');
   
   
});