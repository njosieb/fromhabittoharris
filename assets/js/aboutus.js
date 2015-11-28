(function($) {
  $(document).ready(function() {
    var selectHer = $('#select-about-her'),
        selectHim = $('#select-about-him'),
        selectMet = $('#select-how-met'),
        selectDating = $('#select-dating'),
        selectProposal = $('#select-engaged'),
        selectRing = $('#select-ring'),
        selectBlockIds = [selectHer, selectHim, selectMet, selectDating, selectProposal, selectRing],
        selectBlocks = $('.selection-holder'),
        storySelection = $('#story-selection'),
        storyViewer = $('#story-viewer'),
        backButton = $('.back-button'),
        nextButton = $('.next-story-button'),
        storyHer = $('#story-about-her'),
        storyHim = $('#story-about-him'),
        storyMet = $('#story-how-met'),
        storyDating = $('#story-dating'),
        storyEngaged = $('#story-engaged'),
        storyRing = $('#story-ring'),
        storyIds = [storyHer, storyHim, storyMet, storyDating, storyEngaged, storyRing],
        sectionHeader = $('#about-us .section-header'),
        scrollHer = $('#about-her-scroll'),
        scrollHim = $('#about-him-scroll'),
        scrollMet = $('#how-met-scroll'),
        scrollDating = $('#dating-scroll'),
        scrollEngaged = $('#engaged-scroll'),
        scrollRing = $('#ring-scroll'),
        scrollIds = [scrollHer, scrollHim, scrollMet, scrollDating, scrollEngaged, scrollRing],
        hoverInterval,
        stories = $('.story');

    backButton.each(function() {
      $(this).click(function(e) {
        cleanupStoryView();
      });
    });

    nextButton.each(function() {
      $(this).click(function(e) {
        changeStory(e.target);
      });
    });

    function hideStories() {
      stories.each(function() {
        $(this).hide();
      })
    }

    function changeStory(clickTarget) {
      var currentStoryId =  $(clickTarget).parents('.story').attr('id');
      pickNextStory(currentStoryId);
    }

    function setupStoryView() {
      storySelection.css({'visibility': 'hidden'});
      sectionHeader.css({'visibility': 'hidden', 'opacity': 0});
      storyViewer.css({'visibility': 'visible', 'opacity': 1});
      hideStories();
    }

    function cleanupStoryView() {
      storySelection.css({'visibility': 'visible'});
      sectionHeader.css({'visibility': 'visible', 'opacity': 1});
      storyViewer.css({'visibility': 'hidden', 'opacity': 0});
    }

    function pickNextStory(currentStory) {
      for (var i = 0; i < storyIds.length; i++) {
        if (storyIds[i].attr('id') === currentStory) {
          if (i == storyIds.length - 1) {
            // last story
            cleanupStoryView();
          } else {
            hideStories();
            storyIds[i + 1].show();
          }
        }
      }
    }

    function showStory(story) {
      story.show();
      story.find('.story-body').scrollLeft(0);
      setScrollButtonVisibility(story.find('.story-body'));
    }

    function scrollBody(el) {
      if (el != undefined) {
        var scrollStoryBody = el.parents('.story-scroll-buttons').siblings('.story-body');
        var newPosition = el.hasClass('scroll-right') ? (scrollStoryBody.scrollLeft() + 50) : (scrollStoryBody.scrollLeft() - 50);
        scrollStoryBody.scrollLeft(newPosition);
        setScrollButtonVisibility(scrollStoryBody);
      }
    };

    function canScrollRight(el) {
      return (el.scrollLeft() + el.width()) < el[0].scrollWidth;
    }

    function canScrollLeft(el) {
      return el.scrollLeft() > 0;
    }

    function setScrollButtonVisibility(ele) {
      if (canScrollRight(ele)) {
        ele.siblings('.story-scroll-buttons').find('.scroll-right').css({'visibility': 'visible', 'opacity': 1});
      } else {
        ele.siblings('.story-scroll-buttons').find('.scroll-right').css({'visibility': 'hidden', 'opacity': 0});
      }

      if (canScrollLeft(ele)) {
        ele.siblings('.story-scroll-buttons').find('.scroll-left').css({'visibility': 'visible', 'opacity': 1});
      } else {
        ele.siblings('.story-scroll-buttons').find('.scroll-left').css({'visibility': 'hidden', 'opacity': 0});
      }
    }

    $.each(scrollIds, function(i, story) {
      story.scroll(setScrollButtonVisibility(story));
    });

    $.each(selectBlockIds, function(i, block) {
      block.children('.selection-box').click(function(e){
        setupStoryView();
        showStory(storyIds[i]);
      })
    });

    $('.scroll-control').each(function() {
      $(this).hover(function() {
        var controlEle = $(this);
        hoverInterval = setInterval(function() {
          scrollBody(controlEle);
        }, 50);
      }, function(){
        clearInterval(hoverInterval);
      });

      $(this).click(scrollBody());
    });
  });
})(jQuery)