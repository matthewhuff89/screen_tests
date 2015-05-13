function toggleFullScreen(element) {
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
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      console.log("exiting fullscreen like a boss!");
      document.webkitExitFullscreen();
    }
  }
}


$(document).ready(function() {
  $('video').each(function() {
    var vid = $(this).get(0)
    vid.defaultMuted = true;
  });

    $('video').click(function(e) {
      var $target = $(event.target)
      if(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      toggleFullScreen($target[0]);
      } else {
        if (document.exitFullscreen) {
           document.exitFullscreen();
           $target[0].muted = true;
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
            $target[0].muted = true;
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            $target[0].muted = true;
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
            $target[0].muted = true;
        }
      }
      //     $("video").each(function(){
      //       $(this).get(0).play();
      //     });
  });
});

