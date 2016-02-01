//bx slider

$(function(){
 $('.bxslider').bxSlider({
    speed: 200,
    controls: false,
    auto: true,
    minSlides: 1,
    maxSlides: 4,
    slideMargin: 0
 });
});

//smooth scrolling

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// subscription form

$('#subscription-form').on('submit', function(event) {
   event.preventDefault();

   if ( $('#email-text-input').val() == '' ) {
      alert('Please submit a valid e-mail address.');
   } else {
      alert('Thanks for subscribing!');
   }
});
