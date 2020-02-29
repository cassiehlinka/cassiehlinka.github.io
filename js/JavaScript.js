// FADE IN
$(document).on("scroll", function () {
var pageTop = $(document).scrollTop()
var pageBottom = pageTop + $(window).height()
var tags = $(".fadeIn")

for (var i = 0; i < tags.length; i++) {
var tag = tags[i]

if ($(tag).position().top < pageBottom) {
$(tag).addClass("visible")
}
}
});

$(document).ready(function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $(".fadeIn")

  for (var i = 0; i < tags.length; i++) {
  var tag = tags[i]

  if ($(tag).position().top < pageBottom) {
  $(tag).addClass("visible")
  }
  }

});

// HAMBURGER MENU
$(document).ready(function(){
  $('.hamburger').click(function() {
    $('.test-menu').toggleClass('is-open');
  });
});

// TOGGLE
function myFunction(x) {
  x.classList.toggle("change");
}
