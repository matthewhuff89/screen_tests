// Method for toggling full screen mode on or off.
function toggleFullScreen(element) {
  if(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if(!element.fullscreenElement && !element.mozFullScreenElement && !element.webkitFullscreenElement && !element.msFullscreenElement ) {
      if(element.requestFullscreen) {
        element.requestFullscreen();
        element.load();
        element.muted = false;
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
        element.load();
        element.muted = false;
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        element.load();
        element.muted = false;
      } else if (element.webkitRequestFullscreen){
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        element.load();
        element.muted = false;
      }
    }
  }
     else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        element.muted = true;
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        element.muted = true;
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        element.muted = true;
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        element.muted = true;
      }
    }
}

// Function for playing the video associated with a GIF upon click
function gifToVideo() {
  $('img').click(function(event) {
    var $divtarget = $(event.target);
    var mediaName = $divtarget.attr('name');
    console.log(mediaName);
    $('video').attr("src", "https://www.dropbox.com/s/10o5ix111hxvzjf/one_one.mp4?dl=0");
    toggleFullScreen($('video')[0]);
    $('video')[0].play();
  });
};

// Function for muting videos upon leaving Full Screen Mode or going to the page for the first time.
function muteVideos() {
  $('video').each(function() {
    $(this).get(0).muted = true;
  });
};

function pause() {
  $('video').each(function() {
    $(this).get(0).pause();
  });
};

$(window).load(function() {
  $("body").fadeIn("slow");
});



$(document).ready(function() {

  // Upon the page being loaded, all of the videos are muted
  $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(){
    if(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      muteVideos();
      pauseAll();
    };
  });
  // On click, the targeted video is set to full screen mode. Depending on what type of browser is being used, a certain Fullscreen call is made. If the video is currently in fullscreen video, then on click, the Fullscreen mode will be cancelled and the targeted video will once again be muted.
  // $('img').click(function(event) {
  //   var $target = $(event.target)
  //   var $video = $('video').get(0)
  //   toggleFullScreen($video);
  // });
  gifToVideo();
});
