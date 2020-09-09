$(function(){
  //スムーススクロール
  $('a[href^="#"]').click(function(){
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({scrollTop: position}, 500, 'swing');
  });
  //SPメニュー
  $('.sp-global-nav').on('click', function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('#global-nav').show();
    } else {
      $('#global-nav').hide();
    }
    return false;
  });
  $(window).on('load resize', function(){
    var winW = $(window).width();
    var devW = 767;
    if (winW <= devW) {
      //767px以下の時の処理
      $('#service-content-btn').before($('#service-content-img-area'));
      $('#representative-content-btn').before($('#representative-content-img-area'));
    } else {
      //768pxより大きい時の処理
    }
  });
});
