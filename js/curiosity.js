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

  afterLoad: function(anchorLink, index){
            var loadedSection = $(this);


        if(anchorLink == 'Section001'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_001.png')");
        }

        if(anchorLink == 'Section002'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_017.png')");
        }

        if(anchorLink == 'Section003'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_061.png')");
        }

        if(anchorLink == 'Section004'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_099.png')");
        }

        if(anchorLink == 'Section005'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_183.png')");
        }

        if(anchorLink == 'Section006'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_290.png')");
        }

        if(anchorLink == 'Section007'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_402.png')");
        }

        if(anchorLink == 'Section008'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_447.png')");
        }

        if(anchorLink == 'Section009'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_472.png')");
        }

        if(anchorLink == 'Section010'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_477.png')");
        }

        if(anchorLink == 'Section011'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_488.png')");
        }

        if(anchorLink == 'Section012'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_662.png')");
        }

        if(anchorLink == 'Section013'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_669.png')");
        }

        if(anchorLink == 'Section014'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_689.png')");
        }

        if(anchorLink == 'Section015'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_711.png')");
        }

        if(anchorLink == 'Section016'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_746.png')");
        }

        if(anchorLink == 'Section017'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_783.png')");
        }

        if(anchorLink == 'Section018'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_839.png')");
        }

        if(anchorLink == 'Section019'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_935.png')");
        }

        if(anchorLink == 'Section020'){
                 $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_935.png')");
        }
        
        
        },

  onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            if(index == 1 && direction =='down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_001.png')");
            }
            if(index == 2 && direction =='up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_001.png')");
            }

            else if(index == 2 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_017.png')");
            }
            else if(index == 3 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_001.png')");
            }

            else if(index == 3 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_061.png')");
            }
            else if(index == 4 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_017.png')");
            }

            else if(index == 4 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_099.png')");
            }
            else if(index == 5 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_061.png')");
            }

            else if(index == 5 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_183.png')");
            }
            else if(index == 6 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_099.png')");
            }

            else if(index == 6 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_290.png')");
            }
            else if(index == 7 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_183.png')");
            }

            else if(index == 7 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_402.png')");
            }
            else if(index == 8 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_290.png')");
            }

            else if(index == 8 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_447.png')");
            }
            else if(index == 9 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_402.png')");
            }

            else if(index == 9 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_472.png')");
            }
            else if(index == 10 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_447.png')");
            }

            else if(index == 10 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_477.png')");
            }
            else if(index == 11 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_472.png')");
            }

            else if(index == 11 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_488.png')");
            }
            else if(index == 12 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_477.png')");
            }

            else if(index == 12 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_662.png')");
            }
            else if(index == 13 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_488.png')");
            }

            else if(index == 13 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_669.png')");
            }
            else if(index == 14 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_662.png')");
            }

            else if(index == 14 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_689.png')");
            }
            else if(index == 15 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_669.png')");
            }

            else if(index == 15 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_711.png')");
            }
            else if(index == 16 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_689.png')");
            }

            else if(index == 16 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_783.png')");
            }
            else if(index == 17 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_711.png')");
            }

            else if(index == 17 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_839.png')");
            }
            else if(index == 18 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_746.png')");
            }

            else if(index == 18 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_935.png')");
            }
            else if(index == 19 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_783.png')");
            }

            else if(index == 19 && direction == 'down'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_935.png')");
            }
            else if(index == 20 && direction == 'up'){
                $("#mars-nav-wrapper").css("background-image","url('https://www.sciencenews.org/web-assets/images/curiosity/map/map_sol_839.png')");
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

  // $(".cap6").each(function() {
  //   widest = $(this).width() > widest ? $(this).width() : widest;
  // }).width(widest);

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

});

      var windowWidth = $(window).width();
      $(window).load(function(){
          //get the size and do some things
          windowSize();
          if ('ontouchstart' in window || 'onmsgesturechange' in window) {
            //we are on a touch screen
                $('.hoverOK').removeClass('hoverOK');
              }
          });
      $(window).resize(function(){
        //when we resize, get the window size and do some things
           windowSize();
        });
    function windowSize(){
        var windowWidth = $(window).width();
        if(windowWidth <768){
            //mobile
            mobileMenu();
          } 
      }

    function mobileMenu(e) {
                //find out if we've done the mobile menu thing or not
                if($('#block-menu-menu-newsrail-mobile').length < 1){
                  //clone the explore meny and newsriver
                  //strip the id's and add the mobile-nr class
                  //put the nr on top and the explore below
                  var $exMobile = $('#block-menu-menu-newsrail').clone().attr('id', 'block-menu-menu-newsrail-mobile').addClass('mobile-brick-content');
                  var $nrMobile = $('#newsrail-river-wrapper').clone().attr('id', 'newsrail-river-wrapper-mobile').addClass('mobile-brick-content');

                  $('#mobile-nav-bar').after($exMobile).after($nrMobile);
                  //remove the sub-items in the explore menu
                  $('#block-menu-menu-newsrail-mobile').find('ul.newsrail-menu li div').remove();
                  //also empty the magazine stuff
                  $('#block-menu-menu-newsrail-mobile').find('ul.newsrail-menu li ul').remove();
                  //style the bricks
                  $('#block-menu-menu-newsrail-mobile .newsrail-menu li').addClass('mobile-menu-brick');
                  //add in the proper links --NEED TO ADD A CLASS TO THE VIEW TO FIND THE RIGHT ONE
                  //$('#block-menu-menu-newsrail-mobile .newsrail-menu li').find('a')
                  $('#block-menu-menu-newsrail-mobile .nr-topics').wrap('<a href="/topics">');
                  $('#block-menu-menu-newsrail-mobile .nr-blogs').wrap('<a href="/blogs">');
                  $('#block-menu-menu-newsrail-mobile .nr-ed-picks').wrap('<a href="/editors-picks">');
                  $('#block-menu-menu-newsrail-mobile .nr-magazine').wrap('<a href="/magazine/archive?mode=magazine&context=188995">');
                  //change the id of the newsriver for mobile
                  var windowWidth = $(window).width();
                  var windowHeight = $(window).height();
                  $riverMobile = $('#newsrail-river-wrapper-mobile #block-views-newsrail-river-main');
                  //set the styling for the mobile newsriver
                  $riverMobile.css({'top':'0', 'left':'100%', 'margin-top': '0', 'height':windowHeight , 'width': windowWidth});
                  //put in the divider borders
                  var mobileDivider = '<div class="mobile-menu-border"></div>';
                  $('#block-sn-profile-sn-account').before(mobileDivider);
                  $('#block-menu-menu-sections').before(mobileDivider);
                  $('#newsrail-river-wrapper-mobile #newsriver-sorts a').wrap('<div class="mobile-menu-brick">');
                  //add in new js for the menu
                  //add in the title for latest and most viewed
                  var currentTitle = $('#newsrail-river-wrapper .nr-title').text();
                  if (currentTitle == 'All News'){
                    //title will be all news
                    $('#newsrail-river-wrapper-mobile #newsriver-sorts #newsriver-sort-recent .label').text('Latest > News');
                    $('#newsrail-river-wrapper-mobile #newsriver-sorts #newsriver-sort-viewed .label').text('Most Viewed > News');
                  } else {
                    //set the title = to current title
                    $('#newsrail-river-wrapper-mobile #newsriver-sorts #newsriver-sort-recent .label').text('Latest > '+currentTitle);
                    $('#newsrail-river-wrapper-mobile #newsriver-sorts #newsriver-sort-viewed .label').text('Most Viewed > '+currentTitle);
                  }
                  //put in the back button - WILL THIS CHANGE WHEN I SORT?
                  var mobileBack  = $('<li>').addClass('views-row').append($('<a>').attr('href', '#').text('Back').addClass('backButton'));
                  
                  $('#newsrail-river-wrapper-mobile #block-views-newsrail-river-main .view-newsrail-river .view-content .item-list ul li:first-child').before(mobileBack);
                  //bind the back button
                  $('.backButton').bind('click', function(e){
                    e.preventDefault();
                    $riverMobile.animate({'left': '100%'},'swing', function(){
                      $('#newsrail-river-wrapper-mobile').height('45px');
                      $('.riverCover').fadeOut('slow');
                    });
                  });
                  //set up the shadow to be screen width and size and fixed positon over the visible part of the screen
                    $riverMobile.before('<div class="riverCover"></div>');
                  //bind the clicks on the latest and most viewed
                  $('#newsrail-river-wrapper-mobile #newsriver-sort-recent').bind('click', function(e){
                    //make the container the height of the screen
                    $('#newsrail-river-wrapper-mobile').height(windowHeight - 50);
                    $('.riverCover').fadeIn('fast');

                    $riverMobile.animate({'left': '0%'},'swing');
                    //style it so i can 
                  });
                  $('#newsrail-river-wrapper-mobile #newsriver-sort-viewed').bind('click', function(e){
                    //make the container the height of the screen
                    $('#newsrail-river-wrapper-mobile').height(windowHeight - 50);
                    $('.riverCover').fadeIn('fast');
                    //trigger the sort - IS THIS NESECARY?

                    $riverMobile.animate({'left': '0%'},'swing');
                    //style it so i can 
                  });
                }
              }

    $('#mobile-nav-bar .menu-toggle').click(function(e){
        e.preventDefault();
        //var currentScroll;
        if ($(this).hasClass('closed')) {
          //currentScroll = $(window).scrollTop();
          window.scrollTo(0,0);
          // it is closed, open it
          $('#block-esi-block-s10-sn-profile-sn-account').css('display', 'block');
          $('#block-sn-profile-sn-newsletter').css('display', 'block');
          $('#block-sn-profile-sn-account').css('display', 'block');
          $('#block-menu-menu-social-media').css('display', 'block');
          $('#block-menu-menu-sections').css('display', 'block');
          $('#mobile-nav-bar .menu-toggle').removeClass('closed').addClass('opened');
          $('#newsrail-river-wrapper-mobile').css('display', 'block');
          $('#block-menu-menu-newsrail-mobile').css('display', 'block');
          $('.mobile-menu-border').css('display', 'block');
          //$('body').css('overflow','hidden');
          $('#mobile-nav-bar').addClass('opened');
          //make the mneu scroll and the rest o fthe page not so
          $('#zone-nav-wrapper').css({'position':'relative', 'height':$(window).height()});
          $('footer').css('position', 'fixed');
          $('#section-content').css('position', 'fixed');
          $('body').css('overflow-x', 'hidden');
          //scroll to the top
        } else {
          //scroll back to current
          //window.scrollTo(0,currentScroll);
          // it is open, close it
          $('#block-esi-block-s10-sn-profile-sn-account').css('display', 'none');
          $('#block-sn-profile-sn-newsletter').css('display', 'none');
          $('#block-sn-profile-sn-account').css('display', 'none');
          $('#block-menu-menu-social-media').css('display', 'none');
          $('#block-menu-menu-sections').css('display', 'none');
          $('#newsrail-river-wrapper-mobile').css('display', 'none');
          $('#block-menu-menu-newsrail-mobile').css('display', 'none');
          $('.mobile-menu-border').css('display', 'none');
          $('#mobile-nav-bar .menu-toggle').removeClass('opened').addClass('closed');
          //$('body').css('overflow','auto');
          $('#mobile-nav-bar').removeClass('opened');
          $('#zone-nav-wrapper').css({'position':'fixed', 'height':'50px'});
          $('footer').css('position', 'relative');
          $('#section-content').css('position', 'relative');
        }
        return false;
      });

});


// $(document).ready(function(){

//       var windowWidth = $(window).width();
//       $(window).load(function(){
//           //get the size and do some things
//           windowSize();
//           if ('ontouchstart' in window || 'onmsgesturechange' in window) {
//             //we are on a touch screen
//                 $('.hoverOK').removeClass('hoverOK');
//               }
//           });
//       $(window).resize(function(){
//         //when we resize, get the window size and do some things
//            windowSize();
//         });
//       function windowSize(){
//         var windowWidth = $(window).width();
//         if(windowWidth <768){
//             //mobile
//             mobileMenu();
//           } 
//       }

//         function mobileMenu(e) {
//                 //find out if we've done the mobile menu thing or not
//                 $("body").css({"display": "none"});
//                 if($('#block-menu-menu-newsrail-mobile').length < 1){
//                   //clone the explore meny and newsriver
//                   //strip the id's and add the mobile-nr class
//                   //put the nr on top and the explore below
//                   var $exMobile = $('#block-menu-menu-newsrail').clone().attr('id', 'block-menu-menu-newsrail-mobile').addClass('mobile-brick-content');
//                   var $nrMobile = $('#newsrail-river-wrapper').clone().attr('id', 'newsrail-river-wrapper-mobile').addClass('mobile-brick-content');

//                   $('#mobile-nav-bar').after($exMobile).after($nrMobile);
//                   //remove the sub-items in the explore menu
//                   $('#block-menu-menu-newsrail-mobile').find('ul.newsrail-menu li div').remove();
//                   //also empty the magazine stuff
//                   $('#block-menu-menu-newsrail-mobile').find('ul.newsrail-menu li ul').remove();
//                   //style the bricks
//                   $('#block-menu-menu-newsrail-mobile .newsrail-menu li').addClass('mobile-menu-brick');
//                   //add in the proper links --NEED TO ADD A CLASS TO THE VIEW TO FIND THE RIGHT ONE
//                   //$('#block-menu-menu-newsrail-mobile .newsrail-menu li').find('a')
//                   $('#block-menu-menu-newsrail-mobile .nr-topics').wrap('<a href="/topics">');
//                   $('#block-menu-menu-newsrail-mobile .nr-blogs').wrap('<a href="/blogs">');
//                   $('#block-menu-menu-newsrail-mobile .nr-ed-picks').wrap('<a href="/editors-picks">');
//                   $('#block-menu-menu-newsrail-mobile .nr-magazine').wrap('<a href="/magazine/archive?mode=magazine&context=188995">');
//                   //change the id of the newsriver for mobile
//                   var windowWidth = $(window).width();
//                   var windowHeight = $(window).height();
//                   $riverMobile = $('#newsrail-river-wrapper-mobile #block-views-newsrail-river-main');
//                   //set the styling for the mobile newsriver
//                   $riverMobile.css({'top':'0', 'left':'100%', 'margin-top': '0', 'height':windowHeight , 'width': windowWidth});
//                   //put in the divider borders
//                   var mobileDivider = '<div class="mobile-menu-border"></div>';
//                   $('#block-sn-profile-sn-account').before(mobileDivider);
//                   $('#block-menu-menu-sections').before(mobileDivider);
//                   $('#newsrail-river-wrapper-mobile #newsriver-sorts a').wrap('<div class="mobile-menu-brick">');
//                   //add in new js for the menu
//                   //add in the title for latest and most viewed
//                   var currentTitle = $('#newsrail-river-wrapper .nr-title').text();
//                   if (currentTitle == 'All News'){
//                     //title will be all news
//                     $('#newsrail-river-wrapper-mobile #newsriver-sorts #newsriver-sort-recent .label').text('Latest > News');
//                     $('#newsrail-river-wrapper-mobile #newsriver-sorts #newsriver-sort-viewed .label').text('Most Viewed > News');
//                   } else {
//                     //set the title = to current title
//                     $('#newsrail-river-wrapper-mobile #newsriver-sorts #newsriver-sort-recent .label').text('Latest > '+currentTitle);
//                     $('#newsrail-river-wrapper-mobile #newsriver-sorts #newsriver-sort-viewed .label').text('Most Viewed > '+currentTitle);
//                   }
//                   //put in the back button - WILL THIS CHANGE WHEN I SORT?
//                   var mobileBack  = $('<li>').addClass('views-row').append($('<a>').attr('href', '#').text('Back').addClass('backButton'));
                  
//                   $('#newsrail-river-wrapper-mobile #block-views-newsrail-river-main .view-newsrail-river .view-content .item-list ul li:first-child').before(mobileBack);
//                   //bind the back button
//                   $('.backButton').bind('click', function(e){
//                     e.preventDefault();
//                     $riverMobile.animate({'left': '100%'},'swing', function(){
//                       $('#newsrail-river-wrapper-mobile').height('45px');
//                       $('.riverCover').fadeOut('slow');
//                     });
//                   });
//                   //set up the shadow to be screen width and size and fixed positon over the visible part of the screen
//                     $riverMobile.before('<div class="riverCover"></div>');
//                   //bind the clicks on the latest and most viewed
//                   $('#newsrail-river-wrapper-mobile #newsriver-sort-recent').bind('click', function(e){
//                     //make the container the height of the screen
//                     $('#newsrail-river-wrapper-mobile').height(windowHeight - 50);
//                     $('.riverCover').fadeIn('fast');

//                     $riverMobile.animate({'left': '0%'},'swing');
//                     //style it so i can 
//                   });
//                   $('#newsrail-river-wrapper-mobile #newsriver-sort-viewed').bind('click', function(e){
//                     //make the container the height of the screen
//                     $('#newsrail-river-wrapper-mobile').height(windowHeight - 50);
//                     $('.riverCover').fadeIn('fast');
//                     //trigger the sort - IS THIS NESECARY?

//                     $riverMobile.animate({'left': '0%'},'swing');
//                     //style it so i can 
//                   });
//                 }
//               }

// });