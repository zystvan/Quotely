// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require users.js

$(document).ready(function() {
  $('.flash-msg').click(function() {
    $(this).fadeOut();
  });
  
  $('.overlay').delay(500).fadeOut(500);

  $('a').not('[data-method="delete"]').click(function(event) {
    if (event.ctrlKey == false) {
      event.preventDefault();
      var theLink = $(this);

      $('.overlay').fadeIn(500);

      window.setTimeout(function() {
        window.location.href = theLink.attr("href");
      }, 500);
    }
  });

  function submitForm(event) {
    if (event.keyCode == 13 || !event) {
      event.preventDefault();

      $('.overlay').fadeIn(500);

      setTimeout(function() {
        $('form').submit();
      }, 500);
    }
  }

  $('input[type="submit"]').click(submitForm);
  $(document).keypress(submitForm);
});