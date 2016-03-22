var $overlay=$('.overlay'),
    $trigger=$('.circle');

$trigger.click(function(){
  $overlay.addClass('open');
  $trigger.addClass('open');
})

$('.close-button').click(function(){
  $overlay.removeClass('open');
  $trigger.removeClass('open');
})

$('.btn-send').click(function(){
  if($(this).valid()){
    document.getElementById("client").reset();
    $overlay.removeClass('open');
    $trigger.removeClass('open');/*
    $('.wrap').addClass('fly');*/
  }
})