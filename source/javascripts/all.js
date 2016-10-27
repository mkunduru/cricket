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

/**
 * @section Path Animation
 */

/* Offspin */

var fieldOffspin = document.querySelector('.field__offspin .field-ball');
var timingOffspin = {
  duration: 3000,
  iterations: Infinity,
  easing: 'ease-out'
};

fieldOffspin.animate([
  { motionOffset: 0, motionRotation: '0deg' },
  { motionOffset: '100%', motionRotation: '0deg' }
], timingOffspin);

/* Googly */

var fieldGoogly = document.querySelector('.field__googly .field-ball');
var timingGoogly = {
  duration: 3000,
  iterations: Infinity,
  fill: 'both',
  easing: 'ease-in-out'
};

fieldGoogly.animate([
  { motionOffset: 0, motionRotation: '0deg' },
  { motionOffset: '100%', motionRotation: '0deg' }
], timingGoogly);
