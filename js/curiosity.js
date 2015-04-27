$(document).ready(function(){



  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $("#mars-nav-wrapper").css({"position": "fixed", "top": "40px"}).addClass("nav-wrapper-moving");
      } else {
        $("#mars-nav-wrapper").css({"position": "absolute", "top": "40px"}).removeClass("nav-wrapper-moving");
      }
  });


  $("#fullpage").fullpage({
    menu: '#mars-curiosity-nav',
    anchors: ['Section000', 'Section001', 'Section002', 'Section003', 'Section004', 'Section005', 'Section006', 'Section007', 'Section008', 'Section009', 'Section010', 'Section011', 'Section012', 'Section013', 'Section014', 'Section015', 'Section016', 'Section017', 'Section018', 'Section019', 'Section020'],
    navigationPosition: 'none',
    navigationTooltips: ['Curiosity', 'Sol 0', 'Sol 16', 'Sol 61', 'Sol 100', 'Sol 182', 'Sol 289', 'Sol 402', 'Sol 182', 'Sol 447', 'Sol 473', 'Sol 477', 'Sol 488', 'Sol 662', 'Sol 669', 'Sol 689', 'Sol 711', 'Sol 746', 'Sol 783', 'Sol 839', 'Sol 935', 'Summer 2015'],
    responsive: 4000,
    autoScrolling: false,
    fitToSection: false,


onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            if(index == 1 && direction =='down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_001.png')");
            }
            if(index == 2 && direction =='up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_001.png')");
            }

            else if(index == 2 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_017.png')");
            }
            else if(index == 3 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_001.png')");
            }

            else if(index == 3 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_061.png')");
            }
            else if(index == 4 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_017.png')");
            }

            else if(index == 4 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_099.png')");
            }
            else if(index == 5 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_061.png')");
            }

            else if(index == 5 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_183.png')");
            }
            else if(index == 6 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_099.png')");
            }

            else if(index == 6 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_290.png')");
            }
            else if(index == 7 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_183.png')");
            }

            else if(index == 7 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_402.png')");
            }
            else if(index == 8 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_290.png')");
            }

            else if(index == 8 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_447.png')");
            }
            else if(index == 9 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_402.png')");
            }

            else if(index == 9 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_472.png')");
            }
            else if(index == 10 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_447.png')");
            }

            else if(index == 10 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_477.png')");
            }
            else if(index == 11 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_472.png')");
            }

            else if(index == 11 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_488.png')");
            }
            else if(index == 12 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_477.png')");
            }

            else if(index == 12 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_662.png')");
            }
            else if(index == 13 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_488.png')");
            }

            else if(index == 13 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_669.png')");
            }
            else if(index == 14 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_662.png')");
            }

            else if(index == 14 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_689.png')");
            }
            else if(index == 15 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_669.png')");
            }

            else if(index == 15 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_711.png')");
            }
            else if(index == 16 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_689.png')");
            }

            else if(index == 16 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_746.png')");
            }
            else if(index == 17 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_711.png')");
            }

            else if(index == 17 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_783.png')");
            }
            else if(index == 18 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_746.png')");
            }

            else if(index == 18 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_839.png')");
            }
            else if(index == 19 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_783.png')");
            }

            else if(index == 19 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_935.png')");
            }
            else if(index == 20 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('http://federicocastaneda.github.io/curiosity-interactive/images/map/map_sol_839.png')");
            }



        }



  });

  // Declaring the jssor instance options
  var options = {
    $DragOrientation: 3,              //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
    $ArrowNavigatorOptions: {         //[Optional] Options to specify and enable arrow navigator or not
    $Class: $JssorArrowNavigator$,    //[Requried] Class to create arrow navigator instance
    $ChanceToShow: 2,                 //[Required] 0 Never, 1 Mouse Over, 2 Always
    $AutoCenter: 0,                   //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
    $Steps: 1                         //[Optional] Steps to go for each navigation request, default value is 1
      }
        };

  // Declaring the jssor slider instances
  var jssor_slider1 = new $JssorSlider$("slider1_container", options);
  var jssor_slider2 = new $JssorSlider$("slider2_container", options);
  var jssor_slider3 = new $JssorSlider$("slider3_container", options); 
  var jssor_slider4 = new $JssorSlider$("slider4_container", options); 
  var jssor_slider5 = new $JssorSlider$("slider5_container", options); 

        function ScaleSlider() {
            var parentWidth = $('#slider1_container').parent().width();
            var parentWidth = $('#slider2_container').parent().width();
            var parentWidth = $('#slider3_container').parent().width();
            var parentWidth = $('#slider4_container').parent().width();
            var parentWidth = $('#slider5_container').parent().width();
            if (parentWidth) {
                jssor_slider1.$ScaleWidth(parentWidth);
                jssor_slider2.$ScaleWidth(parentWidth);
                jssor_slider3.$ScaleWidth(parentWidth);
                jssor_slider4.$ScaleWidth(parentWidth);
                jssor_slider5.$ScaleWidth(parentWidth);
            }
            else
                window.setTimeout(ScaleSlider, 30);
        }
        //Scale slider after document ready
        ScaleSlider();
                                        
        //Scale slider while window load/resize/orientationchange.
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        //responsive code end

// Window load event
$(window).load(function() {
  // Intialize width/height
  var widest = 0;
  var tallest = 0;
  // same width
  if($(window).width() >= 400){
    $(".cap1").each(function() {
      // Set width/height to widest/tallest elements
      widest = $(this).width() > widest ? $(this).width() : widest;
    }).width(widest);
  }

  $(".cap2").each(function() {
    widest = $(this).width() > widest ? $(this).width() : widest;
  }).width(widest);

  if($(window).width() >= 400){
    $(".cap3").each(function() {
      widest = $(this).width() > widest ? $(this).width() : widest;
    }).width(widest);
  }

  if($(window).width() >= 400){
    $(".cap4").each(function() {
      widest = $(this).width() > widest ? $(this).width() : widest;
    }).width(widest);
  }

  if($(window).width() >= 400){
    $(".cap5").each(function() {
      widest = $(this).width() > widest ? $(this).width() : widest;
    }).width(widest);
  }

  $(".cap6").each(function() {
    widest = $(this).width() > widest ? $(this).width() : widest;
  }).width(widest);

  if($(window).width() >= 400){
    $(".cap7").each(function() {
      widest = $(this).width() > widest ? $(this).width() : widest;
    }).width(widest);
  }

  if($(window).width() >= 400){
    $(".cap8").each(function() {
      widest = $(this).width() > widest ? $(this).width() : widest;
    }).width(widest);
  }

  if($(window).width() >= 400){
    $(".cap9").each(function() {
      widest = $(this).width() > widest ? $(this).width() : widest;
    }).width(widest);
  }

  if($(window).width() >= 400){
    $(".cap10").each(function() {
      widest = $(this).width() > widest ? $(this).width() : widest;
    }).width(widest);
  }

  if($(window).width() >= 400){
    $(".cap11").each(function() {
      widest = $(this).width() > widest ? $(this).width() : widest;
    }).width(widest);
  }

  $(".cap12").each(function() {
    widest = $(this).width() > widest ? $(this).width() : widest;
  }).width(widest);

  $(".cap13").each(function() {
    widest = $(this).width() > widest ? $(this).width() : widest;
  }).width(widest);

  // same height
  $(".height1").each(function() {
  // Set width/height to widest/tallest elements
    tallest = $(this).height() > tallest ? $(this).height() : tallest;
  }).height(tallest);

  $(".height2").each(function() {
  // Set width/height to widest/tallest elements
    tallest = $(this).height() > tallest ? $(this).height() : tallest;
  }).height(tallest);

  // $(".height3").each(function() {
  //   tallest = $(this).height() > tallest ? $(this).height() : tallest;
  // }).height(tallest);


});




});