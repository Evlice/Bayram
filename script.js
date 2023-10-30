$('.cstate').click(function(){
  $('.drapdown > ul').slideToggle();
})
$('.drapdown ul li').mouseenter(function(){
  $(this).find('.tooltip').stop().fadeIn(300).addClass('.active')
})
$('.drapdown ul li').mouseleave(function(){
  $(this).find('.tooltip').stop().fadeOut(300).removeClass('.active')
})