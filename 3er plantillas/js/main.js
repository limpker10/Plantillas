
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

    $(window).bind('scroll', function () {
      var navHeight = $(window).height() - 600;
      if ($(window).scrollTop() > navHeight) {
        $('.ul-bg').addClass('on');
      } else {
        $('.ul-bg').removeClass('on');
      }
    });



    // Hide nav on click

  }());
  function cerrarMenuDesplegable() {
    var navbarNav = document.getElementById('navbarNav');
    if (navbarNav.classList.contains('show')) {
      navbarNav.classList.remove('show');
    }
  }

  // Agrega este evento a cada enlace del menú para cerrar el menú desplegable cuando se haga clic
  document.querySelectorAll('.navbar-nav a').forEach(function(enlace) {
    enlace.addEventListener('click', cerrarMenuDesplegable);
  });


}
main();