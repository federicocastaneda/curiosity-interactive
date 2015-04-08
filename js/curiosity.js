$(document).ready(function(){

// function scrollFunction() {
//     var scrollPos = document.body.scrollTop;
//     var d = document.getElementById("nav-wrapper");

//     if (scrollPos > 1000) {
//         document.getElementById("nav-wrapper").style.position = "fixed";
//         document.getElementById("nav-wrapper").style.top = "40px";
//     } else {
//         document.getElementById("nav-wrapper").style.position = "absolute";
//         document.getElementById("nav-wrapper").style.top = "1040px";

//     }
// }

// window.onscroll = scrollFunction;

$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
    if (scroll > 1000) {
        //document.getElementById("nav-wrapper").style.position = "fixed";
        //document.getElementById("nav-wrapper").style.top = "40px";
        $(".nav-wrapper").css({"position": "fixed", "top": "40px"}).addClass("nav-wrapper-moving");
    } else {
        //document.getElementById("nav-wrapper").style.position = "absolute";
        //document.getElementById("nav-wrapper").style.top = "1040px";
        $(".nav-wrapper").css({"position": "absolute", "top": "1040px"}).removeClass("nav-wrapper-moving");
    }
});

});

