$(document).ready(function() {
  $('.forgot').click(function(e) {
    var href = $(this).attr('href');
    window.location(href)
    return false;
  })
})