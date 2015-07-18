(function($) {
  $(document).ready(function() {
    var doc = this;

    var sectionTopOffset = $('#about-us').offset().top;
    var body = $('body');

    function isScrollEnough() {
      if (window.pageYOffset >= sectionTopOffset) {
        return true
      } else {
        return false
      }
    }

    if (isScrollEnough()) {
      body.removeClass('no-header');
      doc.headerVisible = true;
    } else {
      body.addClass('no-header');
      doc.headerVisible = false;
    }

    $(window).scroll(function() {
      var set = isScrollEnough();

      if (set != doc.headerVisible) {
        if (set) {
          setTimeout(function() {
            body.removeClass('no-header');
          }, 250);
          doc.headerVisible = true;
        } else {
          setTimeout(function() {
            body.addClass('no-header');
          }, 250);
          doc.headerVisible = false;
        }
      }
    })
  })
})(jQuery);

// var animateHeader = (function() {
//
// 	var docElem = document.documentElement,
// 		body = $('body'),
// 		didScroll = false,
// 		changeHeaderOn = document.getElementById('about-us').offsetTop;
//
// 	function init() {
// 		window.addEventListener( 'scroll', function( event ) {
// 			if( !didScroll ) {
// 				didScroll = true;
// 				setTimeout( scrollPage, 250 );
// 			}
// 		}, false );
// 	}
//
// 	function scrollPage() {
// 		var sy = scrollY();
// 		if ( sy >= changeHeaderOn ) {
// 			body.removeClass('no-header');
// 		}
// 		else {
// 			body.addClass('no-header' );
// 		}
// 		didScroll = false;
// 	}
//
// 	function scrollY() {
// 		return window.pageYOffset || docElem.scrollTop;
// 	}
//
// 	init();
//
// })();
