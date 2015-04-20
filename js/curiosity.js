$(document).ready(function(){

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $("#mars-nav-wrapper").css({"position": "fixed", "top": "40px"}).addClass("nav-wrapper-moving");
      } else {
        $("#mars-nav-wrapper").css({"position": "absolute", "top": "40px"}).removeClass("nav-wrapper-moving");
      }
  });

// var header = $("#section1");
//   $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();
//        if (scroll >= window.innerHeight) {
//           header.addClass("mars-nav-wrapper-moving");
//         } else {
//           header.removeClass("mars-nav-wrapper-moving");
//         }
// });


  $("#fullpage").fullpage({
    menu: '#mars-curiosity-nav',
    anchors: ['Section0', 'Section1', 'Section2', 'Section3', 'Section4', 'Section5', 'Section6', 'Section7', 'Section8', 'Section9', 'Section10', 'Section11', 'Section12', 'Section13', 'Section14', 'Section15', 'Section16', 'Section17', 'Section18', 'Section19', 'Section20'],
    //sectionsColor: ['#FFFFFF', '#F2EDE6', '#FFFFFF', '#FFFFFF', '#F2EDE6'],
    navigationPosition: 'none',
    navigationTooltips: ['Curiosity', 'Sol 1', 'Sol 16', 'Sol 61', 'Sol 100', 'Sol 182', 'Sol 289', 'Sol 402', 'Sol 182', 'Sol 447', 'Sol 473', 'Sol 477', 'Sol 488', 'Sol 662', 'Sol 669', 'Sol 689', 'Sol 711', 'Sol 746', 'Sol 783', 'Sol 839', 'Sol 935', 'Summer 2015'],
    responsive: 900,
    autoScrolling: false,
    fitToSection: false,
    //fixedElements: 'header, #mars-curiosity-nav',
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
  var jssor_slider2 = new $JssorSlider$("slider2_container", options);
  var jssor_slider3 = new $JssorSlider$("slider3_container", options); 
  var jssor_slider4 = new $JssorSlider$("slider4_container", options); 

  // $("#mars-nav-wrapper").stick_in_parent({
  //   parent: 'body'
  // });
  //$("#mars-nav-wrapper").stick_in_parent();

});