// Caleb Johnson
//ch7
//CIS 1408

$(document).ready(function() {
  var h = document.getElementsByTagName('head')[0],
      link = document.createElement('link');

  link.href = 'ui-themes/le-frog/jquery-ui-1.10.0.custom.css';
  link.rel = 'stylesheet';
  h.appendChild(link);

  var $books = $('#books').cycle({
      
    // #1
    // 500 = .5 second, also add in fade for the quick transition
    timeout: 500,
    speed: 200,
    pause: true,
	fx: 'fade',
	//
	//#5
	// nowrap to limit our slide to only one loop and disable our buttons
	nowrap: true,
    before: function() {
      $('#slider').slider('value', $('#books li').index(this));
    }
  });
  if ( $.cookie('cyclePaused') ) {
    $books.cycle('pause');
  }
  
  var $controls = $('<div id="books-controls"></div>').insertAfter($books);
  $('<button>Pause</button>').click(function(event) {
    event.preventDefault();
    $books.cycle('pause');
    
    //#2
    // set our cookie to expire after 30 days
    $.cookie('cyclePaused', 'y', {
        expires: 30
    });
  }).button({
    icons: {primary: 'ui-icon-pause'}
  }).appendTo($controls);
  $('<button>Resume</button>').click(function(event) {
    event.preventDefault();
    var $paused = $('ul:paused');
    if ($paused.length) {
      $paused.cycle('resume');
      $.cookie('cyclePaused', null);
    }
    else {
      $(this).effect('shake', {
        distance: 10
      });
    }
  }).button({
    icons: {primary: 'ui-icon-play'}
  }).appendTo($controls);

  $('<div id="slider"></div>').slider({
    min: 0,
    max: $('#books li').length - 1,
    slide: function(event, ui) {
      $books.cycle(ui.value);
    },
    
    //#4
    // animate our slider
    animate: true
  }).appendTo($controls);

  $books.hover(function() {
    $books.find('.title').animate({
      backgroundColor: '#eee',
      color: '#000'
    }, 1000);
  }, function() {
    $books.find('.title').animate({
      backgroundColor: '#000',
      color: '#fff'
    }, 1000);
  });

  $('h1').click(function() {
    $(this).toggleClass('highlighted', 'slow', 'easeInExpo');
  });
  
  //#3
  // Change it so our title resizes in 10 px increments
  $books.find('.title').resizable({
    handles: 's',
    distance: 10
  });
});