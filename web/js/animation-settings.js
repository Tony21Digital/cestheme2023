// init
require([
  'jquery',
  'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/ScrollMagic.js'
], function($, ScrollMagic){
  var controller = new ScrollMagic.Controller({
      
  });
  
  // Animation Block Scene
  $(document).ready(function(){
    $(".has-animation").each(function() {
      
      new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.4,
        offset: -500,
        reverse: true
      })
      .setClassToggle(this, 'fade-in') // add class to element that has a class of 'has-animation'
      .addTo(controller);
    });
  });
});