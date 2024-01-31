
function main() {

  (function () {
    'use strict';



    // Show Menu on Book
    $(window).bind('scroll', function () {
      var navHeight = $(window).height() - 600;
      if ($(window).scrollTop() > navHeight) {
        $('.navbar-default').addClass('on');
      } else {
        $('.navbar-default').removeClass('on');
      }
    });



    // Hide nav on click

  }());


}
main();