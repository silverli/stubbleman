
var $menuTrigger = $('.menu-trigger'),
    $triggerWord = $('.trigger-status'),
    $primaryMenu = $('.primary-navigation'),
    $utilityTrigger = $('.utility-trigger'),
    $utilityMenu = $('.utility-navigation');

function toggleTriggerClass() {
  if (!$menuTrigger.hasClass('is-active')) {
    $menuTrigger.addClass('is-active');
    $menuTrigger.attr("aria-expanded","true");
  } else {
    $menuTrigger.removeClass('is-active');
    $menuTrigger.attr("aria-expanded","false");
  }
};

function toggleTriggerWord() {
  if ($triggerWord.hasClass('closed')) {
    $triggerWord.removeClass('closed');
    $triggerWord.addClass('open');
    $triggerWord.html('Close');
  } else {
    $triggerWord.removeClass('open');
    $triggerWord.addClass('closed');
    $triggerWord.html('Open');
  }
};

function toggleMenuClass() {
  if (!$primaryMenu.hasClass('is-visible')) {
    $primaryMenu.addClass('is-visible');
    $primaryMenu.focus();
  } else {
    $primaryMenu.removeClass('is-visible');
  }
}

function toggleMenu() {
  $menuTrigger.on("click", function(e){
    toggleTriggerClass();
    toggleMenuClass();
    toggleTriggerWord();
    $primaryMenu.slideToggle("fast");
    // if utilityMenu is NOT visible, do nothing.
    if (!$utilityMenu.is(':visible')) {
      return
    } else {
    // if utilityMenu IS visible, reset the trigger and the menu (hide menu & remove classes/events).
      resetUtilityTrigger();
      $utilityMenu.removeClass('is-visible').slideUp('fast');
    }
  });
};

function resetMenu() {
  if (!$primaryMenu.hasClass('is-visible')) {
    $primaryMenu.removeAttr('style');
  } else {
    $primaryMenu.removeClass('is-visible').removeAttr('style');
  }
};

function resetMenuTrigger() {
  if (!$menuTrigger.hasClass('is-active')) {
    return
  } else {
    $menuTrigger.removeClass('is-active');
  }
};

function toggleUtilityTriggerClass() {
  if (!$utilityTrigger.hasClass('is-active')) {
    $utilityTrigger.addClass('is-active');
  } else {
    $utilityTrigger.removeClass('is-active');
  }
};

function toggleUtilityMenuClass() {
  if (!$utilityMenu.hasClass('is-visible')) {
    $utilityMenu.addClass('is-visible');
  } else {
    $utilityMenu.removeClass('is-visible');
  }
};

function toggleUtilityMenu() {
  $utilityTrigger.on("click", function(e){
    toggleUtilityTriggerClass();
    toggleUtilityMenuClass();
    $utilityMenu.slideToggle('fast');
    // if primaryMenu is NOT visible, do nothing.
    if (!$primaryMenu.is(':visible')) {
      return
    } else {
    // if primaryMenu IS visible, reset the trigger and the menu (hide menu & remove classes/events).
      resetMenuTrigger();
      $primaryMenu.removeClass('is-visible').slideUp('fast');
    }
  });
};

function resetUtilityMenu() {
  if (!$utilityMenu.hasClass('is-visible')) {
    $utilityMenu.removeAttr('style');
  } else {
    $utilityMenu.removeClass('is-visible').removeAttr('style');
  }
};

function resetUtilityTrigger() {
  if (!$utilityTrigger.hasClass('is-active')) {
    return
  } else {
    $utilityTrigger.removeClass('is-active');
  }
};

// Fixes broken navigation when changing states on mobile then expanding to desktop
jRes.addFunc({
  breakpoint: 'nav',
  exit: function(){
    resetUtilityTrigger();
    resetUtilityMenu();
    resetMenu();
    resetMenuTrigger();
  }
});

$(document).ready(function(){
  toggleUtilityMenu();
  toggleMenu();
});