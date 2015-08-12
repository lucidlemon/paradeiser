(function() {
  var paradeiser_open;

  paradeiser_open = false;

  $('.dropdown').on('click touch', function(event) {
    var paradeiser_link;
    event.preventDefault();
    console.log('clicking');
    paradeiser_link = $(this);
    if (paradeiser_link.is('.visible')) {
      paradeiser_open = false;
      paradeiser_link.find('.children').removeClass('visible');
      $('#paradeiser-greybox').remove();
    } else {
      paradeiser_open = true;
      paradeiser_link.find('.children').addClass('visible');
      $('<div id="paradeiser-greybox"></div>').insertAfter('.paradeiser').on('click touch', function(event) {
        if (paradeiser_open === true) {
          console.log('closing');
          $('#paradeiser-greybox').remove();
          $('.children').removeClass('visible');
        }
      });
    }
  });

}).call(this);
