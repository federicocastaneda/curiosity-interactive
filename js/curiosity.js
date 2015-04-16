$(document).ready(function(){

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
      if (scroll > 1000) {
        $(".nav-wrapper").css({"position": "fixed", "top": "40px"}).addClass("nav-wrapper-moving");
      } else {
        $(".nav-wrapper").css({"position": "absolute", "top": "1040px"}).removeClass("nav-wrapper-moving");
      }
  });

  $("#fullpage").fullpage({
    //menu: '#curiosity-nav',
    anchors: ['00', '01', '02', '03', '04', '05'],
    //sectionsColor: ['#FFFFFF', '#F2EDE6', '#FFFFFF', '#FFFFFF', '#F2EDE6'],
    navigationPosition: 'none',
    navigationTooltips: ['Curiosity', 'Sol 1', 'Sol 17', 'Sol 61', 'Sol 99', 'Sol 183'],
    responsive: 900,
    autoScrolling: false
  });

  var options = {
    $DragOrientation: 3,              //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
    $ArrowNavigatorOptions: {         //[Optional] Options to specify and enable arrow navigator or not
    $Class: $JssorArrowNavigator$,    //[Requried] Class to create arrow navigator instance
    $ChanceToShow: 2,                 //[Required] 0 Never, 1 Mouse Over, 2 Always
    $AutoCenter: 0,                   //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
    $Steps: 1                         //[Optional] Steps to go for each navigation request, default value is 1
      }
        };

  var jssor_slider1 = new $JssorSlider$("slider1_container", options);

});