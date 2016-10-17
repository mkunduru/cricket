/**
 * Cricket
 *
 * Slider JavaScript
 */

/**
 * @section Modules
 */

//= require 'jquery-3.1.1.min'
//= require 'slick.min'

/**
 * @section Slider
 */

$(document).ready(function() {
  $('.slider .slider-slides').slick({
    nextArrow: $('.slider-nav-next'),
    prevArrow: $('.slider-nav-prev'),
    swipeToSlide: true
  });
  $('.slider-nav-next, .slider-nav-prev').click(function(e) {
    var $this = $(this);
    $this.addClass('is-sliding');
    setTimeout(function() {
      $this.removeClass('is-sliding');
    }, 200);
  });
});
