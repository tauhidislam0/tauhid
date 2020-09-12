

$(document).ready(function () {
//Navigation Bar with collor chenge
  $(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
  })


  $("#wrapper").click(function () {
    $(".icon").toggleClass("close");
  })

//vedio 
  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

//portfollio
  var config = document.querySelector('.mymixcont');
  var mixer = mixitup(config, {
    animation: {
      duration: 1000,
    }
  });


//skill



  $('#bar1').barfiller({barColor: "#428bca",duration: 5000});
  $('#bar2').barfiller({barColor: "#428bca",duration: 5000});
  $('#bar3').barfiller({barColor: "#428bca",duration: 5000});
  $('#bar4').barfiller({barColor: "#428bca",duration: 5000});
  $('#bar5').barfiller({barColor: "#428bca",duration: 5000});
  $('#bar6').barfiller({barColor: "#428bca",duration: 5000});
  $('#bar7').barfiller({barColor: "#428bca",duration: 5000});
  $('#bar8').barfiller({barColor: "#428bca",duration: 5000});
  /*
* File: jquery.barfiller.js
* Version: 1.0.1
* Description: A plugin that fills bars with a percentage you set.
* Author: 9bit Studios
* Copyright 2012, 9bit Studios
* http://www.9bitstudios.com
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

(function ($) {

  $.fn.barfiller = function (options) {

      var defaults = $.extend({
          barColor: '#16b597',
          tooltip: true,
          duration: 1000,
          animateOnResize: true,
          symbol: "%"
      }, options);


      /******************************
      Private Variables
      *******************************/         

      var object = $(this);
      var settings = $.extend(defaults, options);
      var barWidth = object.width();
      var fill = object.find('.fill');
      var toolTip = object.find('.tip');
      var fillPercentage = fill.attr('data-percentage');
      var resizeTimeout;
      var transitionSupport = false;
      var transitionPrefix;

      /******************************
      Public Methods
      *******************************/         
      
      var methods = {

          init: function() {
              return this.each(function () {
                  if(methods.getTransitionSupport()) {
                      transitionSupport = true;
                      transitionPrefix = methods.getTransitionPrefix();
                  }

                  methods.appendHTML();
                  methods.setEventHandlers();
                  methods.initializeItems();
              });
          },

          /******************************
          Append HTML
          *******************************/			

          appendHTML: function() {
              fill.css('background', settings.barColor);

              if(!settings.tooltip) {
                  toolTip.css('display', 'none');
              }
              toolTip.text(fillPercentage + settings.symbol);
          },
          

          /******************************
          Set Event Handlers
          *******************************/
          setEventHandlers: function() {
              if(settings.animateOnResize) {
                  $(window).on("resize", function(event){
                      clearTimeout(resizeTimeout);
                      resizeTimeout = setTimeout(function() { 
                      methods.refill(); 
                      }, 300);
                  });				
              }
          },				

          /******************************
          Initialize
          *******************************/			

          initializeItems: function() {
          var pctWidth = methods.calculateFill(fillPercentage);
          object.find('.tipWrap').css({ display: 'inline' });

          if(transitionSupport)
              methods.transitionFill(pctWidth);
          else
              methods.animateFill(pctWidth);
          },

          getTransitionSupport: function() {

              var thisBody = document.body || document.documentElement,
              thisStyle = thisBody.style;
              var support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
              return support; 	
          },
              
          getTransitionPrefix: function() {
              if(/mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase())) {
                  return '-moz-transition';
              }
              if(/webkit/.test(navigator.userAgent.toLowerCase())) {
                  return '-webkit-transition';
              }
              if(/opera/.test(navigator.userAgent.toLowerCase())) {
                  return '-o-transition';
              }
              if (/msie/.test(navigator.userAgent.toLowerCase())) {
                  return '-ms-transition';
              }
              else {
                  return 'transition';
              }
          },

          getTransition: function(val, time, type) {

              var CSSObj;
              if(type === 'width') {
                  CSSObj = { width : val };
              }
              else if (type === 'left') {
                  CSSObj = { left: val };
              }

              time = time/1000;
              CSSObj[transitionPrefix] = type+' '+time+'s ease-in-out';		    
              return CSSObj;

          },				

          refill: function() {
              fill.css('width', 0);
              toolTip.css('left', 0);
              barWidth = object.width();
              methods.initializeItems();
          },

          calculateFill: function(percentage) {
              percentage = percentage *  0.01;
              var finalWidth = barWidth * percentage;
              return finalWidth;
          },       

          transitionFill: function(barWidth) {

              var toolTipOffset = barWidth - toolTip.width();
              fill.css( methods.getTransition(barWidth, settings.duration, 'width'));
              toolTip.css( methods.getTransition(toolTipOffset, settings.duration, 'left'));

          },	

          animateFill: function(barWidth) {
              var toolTipOffset = barWidth - toolTip.width();
              fill.stop().animate({width: '+=' + barWidth}, settings.duration);
              toolTip.stop().animate({left: '+=' + toolTipOffset}, settings.duration);
          }
    
      };
      
      if (methods[options]) { 	// $("#element").pluginName('methodName', 'arg1', 'arg2');
          return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof options === 'object' || !options) { 	// $("#element").pluginName({ option: 1, option:2 });
          return methods.init.apply(this);  
      } else {
          $.error( 'Method "' +  method + '" does not exist in barfiller plugin!');
      } 
  };

})(jQuery);



//TESTIMONIALS
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
       margin: 15, 
       items:3,
       loop:true,
       autoplay:true,
       autoplayTimeout:3000,
       responsiveClass:true,
       responsiveRefreshRate:true,
       responsive: {
           0: {
            items:1, 
           },
           768: {
            items:2, 
           },
            
           1000: {
            items:3, 
           },
            
            
       }
    });
})

// JQuery Plugin
AOS.init({

    duration: 1000,
});

$('a').smoothScroll();

})






























