document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('.carousel');
    var flkty = new Flickity(carousel, {
      cellAlign: 'center',
      contain: true,
      pageDots: false,
      prevNextButtons: false,
      draggable: false

    });
  });