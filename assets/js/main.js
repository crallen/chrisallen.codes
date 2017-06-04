var $ = require('jquery');

$('.contact-field').on('input change', function() {
  var el = $(this);
  if(el.val().length) {
    el.addClass('filled');
  } else {
    el.removeClass('filled');
  }
});

$('#copyright-year').text(new Date().getFullYear());