$(document).ready(function() {
  $(function(){
    $('video').click(function(e) {
      var source = $('video source').attr("src");
      console.log(source);
      var hiddenSource = $('section.video_hidden article span video source');
      hiddenSource.attr("src", source);
      $("video").each(function(){
        $(this).get(0).pause();
      });
      var hiddenSection = $('section.video_hidden');
      hiddenSection.fadeIn()
        // unhide section.hidden
        .css({ 'display':'block'})
        // set to full screen
        .css({ width: $(window).width() + 'px', height: $(window).height() + 'px'})
        .css({ top:($(window).height() - hiddenSection.height())/
          2 + 'px',
          left:($(window).width() - hiddenSection.width())/2 + 'px' })

        // greyed out background
        .css({'background-color':'rgba(0,0,0,0.5)'})
        .appendTo('body');
        })
        $('span.close').click(function() {
          $('section.video_hidden').fadeOut();
          $("video").each(function(){
            $(this).get(0).play();
          });
        });
    });
});