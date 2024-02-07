(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-item a');
    function closeNavbar() {
      var button = document.querySelector('.navbar-toggler');
      if (!button.classList.contains('collapsed')) {
        button.click();
      }
    }
    navLinks.forEach(function (link) {
      link.addEventListener('click', closeNavbar);
    });
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    // Configuraciones
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

  /**
 * Clients Slider
 */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 70
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 30
      }
    }
  });


  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})();