

var menucount = 0;


function Inrange() {
  return  (menucount >= 0) && (menucount <=6);
}

function Up() {
  menucount --;
  if (Inrange()){

    console.log("clicku_triggered");
    $('.T12').addClass('T13');
    $('.T12').removeClass('T12');
    $('.T11').addClass('T12');
    $('.T11').removeClass('T11');
    $('.T10').addClass('T11');
    $('.T10').removeClass('T10');
    $('.T9').addClass('T10');
    $('.T9').removeClass('T9');
    $('.T8').addClass('T9');
    $('.T8').removeClass('T8');
    $('.T7').addClass('T8');
    $('.T7').removeClass('T7');
    $('.T6').addClass('T7');
    $('.T6').removeClass('T6');
    $('.T5').addClass('T6');
    $('.T5').removeClass('T5');
    $('.T4').addClass('T5');
    $('.T4').removeClass('T4');
    $('.T3').addClass('T4');
    $('.T3').removeClass('T3');
    $('.T2').addClass('T3');
    $('.T2').removeClass('T2');
    $('.T1').addClass('T2');
    $('.T1').removeClass('T1');
  } else {
    menucount ++;
  }
}  

function Down() {
  menucount ++;
  if (Inrange()){

    console.log("clickd_triggered");
    $('.T2').addClass('T1');
    $('.T2').removeClass('T2');
    $('.T3').addClass('T2');
    $('.T3').removeClass('T3');
    $('.T4').addClass('T3');
    $('.T4').removeClass('T4');
    $('.T5').addClass('T4');
    $('.T5').removeClass('T5');
    $('.T6').addClass('T5');
    $('.T6').removeClass('T6');
    $('.T7').addClass('T6');
    $('.T7').removeClass('T7');
    $('.T8').addClass('T7');
    $('.T8').removeClass('T8');
    $('.T9').addClass('T8');
    $('.T9').removeClass('T9');
    $('.T10').addClass('T9');
    $('.T10').removeClass('T10');
    $('.T11').addClass('T10');
    $('.T11').removeClass('T11');
    $('.T12').addClass('T11');
    $('.T12').removeClass('T12');
    $('.T13').addClass('T12');
    $('.T13').removeClass('T13'); 
  } else {
    menucount --;
  }
}  

function BBB() {
  console.log("click_triggered");
  $('.transform').toggleClass('transform-active');
};