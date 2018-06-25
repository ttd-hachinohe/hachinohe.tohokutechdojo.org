;$(function() {
    
    var window_height = $(window).height();
    $('.drawr').css('height', window_height);
    $('.toggle-btn').on('click', function(){
        $('.drawr').animate({width:'toggle'});
        $('#wraper').css({
            position:'fixed',
            width: '100%'
            });
    });
    $('.drawr a').on('click', function(){
        $('.drawr').animate({width:'toggle'});
        $('#wraper').attr( { style: '' } );
    });
    
    /**
    * pagetop button
    */
    var top_btn = $('.pagetop');    
    top_btn.hide();
    //スクロールが??に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > window_height) {
            top_btn.fadeIn();
        } else {
            top_btn.fadeOut();
        }
    });
    $(top_btn).on('click', function(){
		$('body, html').animate({scrollTop:0}, 'fast');
		return false;
	});
	
	//scroll
	$('a[href^=#]').click(function() {
      var speed = 500; 
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
    
});