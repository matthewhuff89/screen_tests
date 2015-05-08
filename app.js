$(document).ready(function() {
  $('video').each(function() {
    $(this).get(0).defaultMuted = true;
  });

    $('video').click(function(e) {
      var $target = $(event.target)
      $target[0].webkitRequestFullscreen();
      console.log($target[0].muted);
      $target.load()
      $target[0].muted = false;

      //     $("video").each(function(){
      //       $(this).get(0).play();
      //     });
  });
});