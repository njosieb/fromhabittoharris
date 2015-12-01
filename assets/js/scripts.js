(function($) {
  $(document).ready(function() {
    var doc = this;
    doc.sidebarVisible = false;

    var body = $('body');
    var sectionTopOffset = $('#about-us').offset().top;

    var firstWaypoint = new Waypoint({
      element: document.getElementById('about-us'),
      handler: function(direction) {
        if (direction == 'down') {
          body.removeClass('no-header');
        } else if (direction == 'up') {
          body.addClass('no-header');
        }
      },
      context: document.getElementById('page-body')
    });

    $('#menu-reveal').click(function() {
        doc.sidebarVisible = !doc.sidebarVisible;
        if (doc.sidebarVisible) {
          body.addClass('sidebar');
        } else {
          body.removeClass('sidebar');
        }
    })

    $('.section-link').click(function() {
      body.removeClass('sidebar');
      doc.sidebarVisible = false;
    })

    function isScrollEnough() {
      if (window.pageYOffset >= sectionTopOffset) {
        return true
      } else {
        return false
      }
    }

    if (isScrollEnough()) {
      body.removeClass('no-header');
    } else {
      body.addClass('no-header');
    }

    $('.photo')
    .on('openstart.fluidbox', function() {
      var overlay = $('.fluidbox__overlay');
      var positionTop = $('#page-body').scrollTop();
      // positionTop = positionTop - 100;
      body.addClass('no-header');
      overlay.css({'-webkit-transform': 'translateY(' + positionTop.toString() + 'px)', 'transform': 'translateY('+ positionTop.toString() + 'px)'});
    })
    .on('closestart.fluidbox', function() {
      body.removeClass('no-header');
    })
    .fluidbox();
  })
})(jQuery);
