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

$('.menu-toggle').on('click', function(e) {
  e.preventDefault();
  $('body').addClass('menu-open');
});

$('.menu-close').on('click', function(e) {
  e.preventDefault();
  $('.sub-open').removeClass('sub-open');
  $('body').removeClass('menu-open');
});

$('nav li:not(.sub) a').on('click', function(e) {
  e.preventDefault();
  $('body').removeClass('menu-open');
  document.location.href = e.target.href;
});

$('nav li.sub > a').on('click', function(e) {
  e.preventDefault();
  $(e.target).parent().toggleClass('sub-open');
});