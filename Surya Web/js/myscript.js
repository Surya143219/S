/*
preloader
=========
*/
$(window).on('load',function(){
 $('#preloader_status').fadeOut();
 $('#preloader').delay(350).fadeOut('slow');
});