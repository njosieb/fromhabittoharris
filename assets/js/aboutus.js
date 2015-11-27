(function($) {
  $(document).ready(function() {
    var selectHer = $('#select-about-her'),
        selectHim = $('#select-about-him'),
        selectMet = $('#select-how-met'),
        selectDating = $('#select-dating'),
        selectProposal = $('#select-engaged'),
        selectBlockIds = [selectHer, selectHim, selectMet, selectDating, selectProposal],
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
        storyIds = [storyHer, storyHim, storyMet, storyDating, storyEngaged],
        sectionHeader = $('#about-us .section-header'),
        scrollHer = $('#about-her-scroll'),
        scrollHim = $('#about-him-scroll'),
        scrollMet = $('#how-met-scroll'),
        scrollDating = $('#dating-scroll'),
        scrollProposal = $('#engaged-scroll'),
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

    var hideStories = function() {
      stories.each(function() {
        $(this).hide();
      })
    }

    var changeStory = function(clickTarget) {
      var currentStoryId =  $(clickTarget).parents('.story').attr('id');
      pickNextStory(currentStoryId);
    }

    var setupStoryView = function() {
      storySelection.css({'visibility': 'hidden'});
      sectionHeader.css({'visibility': 'hidden', 'opacity': 0});
      storyViewer.css({'visibility': 'visible', 'opacity': 1});
      hideStories();
    }

    var cleanupStoryView = function() {
      storySelection.css({'visibility': 'visible'});
      sectionHeader.css({'visibility': 'visible', 'opacity': 1});
      storyViewer.css({'visibility': 'hidden', 'opacity': 0});
    }

    var pickNextStory = function(currentStory) {
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

    var canScroll = function(el) {
      (elt).innerWidth() > elt[0].scrollWidth;
    }

    $.each(selectBlockIds, function(i, block) {
      block.children('.selection-box').click(function(e){
        setupStoryView();
        storyIds[i].show();
      })
    });
  });
})(jQuery)