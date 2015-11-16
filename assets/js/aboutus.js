(function($) {
  $(document).ready(function() {
    var selectHer = $('#select-her'),
        selectHim = $('#select-him'),
        selectMet = $('#select-met'),
        selectDating = $('#select-dating'),
        selectProposal = $('#select-proposal'),
        selectBlockIds = [selectHer, selectHim, selectMet, selectDating, selectProposal],
        selectBlocks = $('.selection-holder'),
        storySelection = $('#story-selection'),
        storyViewer = $('#story-viewer'),
        backButton = $('#back-text'),
        nextButton = $('#next-story-button'),
        storyHer = $('#story-about-her'),
        storyHim = $('#story-about-him'),
        storyMet = $('#story-how-met'),
        storyDating = $('#story-dating'),
        storyEngaged = $('#story-engaged'),
        storyIds = [storyHer, storyHim, storyMet, storyDating, storyEngaged],
        stories = $('.story');

    backButton.click(function(e) {
      cleanupStoryView();
    });

    var hideStories = function() {
      stories.each(function() {
        $(this).hide();
      })
    }

    var setupStoryView = function() {
      storySelection.css({'visibility': 'hidden'});
      storyViewer.css({'visibility': 'visible', 'opacity': 1});
      hideStories();
    }

    var cleanupStoryView = function() {
      storySelection.css({'visibility': 'visible'});
      storyViewer.css({'visibility': 'hidden', 'opacity': 0});
    }

    $.each(selectBlockIds, function(i, block) {
      block.children('.selection-box').click(function(e){
        setupStoryView();
        storyIds[i].show();
      })
    });
  });
})(jQuery)