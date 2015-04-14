$(document).ready(function(){

$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
    if (scroll > 1000) {
        $(".nav-wrapper").css({"position": "fixed", "top": "40px"}).addClass("nav-wrapper-moving");
    } else {
        $(".nav-wrapper").css({"position": "absolute", "top": "1040px"}).removeClass("nav-wrapper-moving");
    }
});

});