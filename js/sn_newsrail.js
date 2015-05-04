/*
  @file
  Holds all Javascript required to manage newsrail visibility and functionality
*/
(function($) {

  // Attach various functionality for the newsrail newsriver application menu
  $(document).ready(function(){
      var $nrBlock = $('#block-menu-menu-newsrail');

      //add the class, active state and title to the to the brick
      $('.views-field-title-1').parent().addClass('active-brick');
      if( $('body').hasClass('node-type-openpublish-article') || $('body').hasClass('node-type-openpublish-blog-post') || $('body').hasClass('node-type-sponsored') ){
        var $articleTitle = $('h1.node-title').text();
        $('.active-brick .views-field-title-1').html($articleTitle);
      } 

      // Did we already process the block?
      // Or does the block not exist in this context? exit out!
      if ($nrBlock.is('.processed') || $nrBlock.length != 1){
        return;
      } else {
        $nrBlock.addClass('processed'); // Point of no return!
      }
      //set up the target params
      setTargetParam();
      function setTargetParam(){
        //iterate through the links
        $('#block-views-newsrail-river-main .view-content li a').each(function(){
          var $linkVal = $(this).attr('href');
          //get the base URL
          var baseLink = $linkVal.split('?')[0];
          //get the parameters (if any)
          var params = $linkVal.split('?')[1];
          if(params){
            //if we have a context strin
            params = params+'&tgt=nr';
          } else {
            params = 'tgt=nr';
          }
          //rebuild the link
          var newLink = baseLink + '?' + params;
          //set the link 
          $(this).attr('href', newLink);
        });
      }

      // Helper variables....
      var $nrTitle = $('h2.block-title', $nrBlock);
      var $nrTopLevel = $('.content > ul.newsrail-menu > li', $nrBlock);
      var $nrSecondLevel = $('.content > ul.newsrail-menu > li ul', $nrBlock);
      var ignoreBlur = false; // Switch for ignoring top level menu clicks
      var $nrMobileHandler = $('h2.block-title, .content > ul.newsrail-menu > li', $nrBlock );
      var menuSelected = false;

      //move the Newsrail title to nr-title, keep it saying explore TODO: do i need to do this again when we filter the NR
      var nrTitle = $nrTitle.text();
      if (nrTitle != 'Explore'){
        $('h3.nr-title').text(nrTitle);
        $nrTitle.text('Explore');
      } else {
        $('#block-views-newsrail-river-main').addClass('no-title');
      }
      // Add Newsrail Menu dropdown arrow
      $('<span>').addClass('dropdown-arrow').appendTo($nrTitle);

      // TODO: This isn't quite right..... =================
      // Determine the correct menu to show by default. On homepage, show the first, on a topic page, show the appropriate one
      var $activeTrail = $nrBlock.find('.content > .newsrail-menu > li.active-trail');

      if ($activeTrail.size() == 1) {
         $activeTrail.addClass('default-hovering');//.addClass('the-default-hover-item');
         $activeTrail.find('ul.newsrail-menu').css('display', 'block');
      } else {
        // show the first sub-menu by default
        $nrBlock.find('.newsrail-menu:first-child > li:first-child').addClass('default-hovering'); //.addClass('the-default-hover-item');
        $nrBlock.find('.newsrail-menu:first-child > li:first-child .newsrail-menu').css('display', 'block').addClass('activeMenu');//probably need to run the moreButton script here
      }


      // Bind delayed hover for top level menu items
      //lets get the screen size and do some stuff
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
            //clickBind();
            mobileMenu();
          } else if (windowWidth >= 768 && windowWidth < 1024){
            //tablet
            hoverBind();
            allItems();
            menuItemHoverStates();
            openCloseMenu();
            nrSorts();
          } else if(windowWidth >= 1024 && windowWidth < 1220){
            //smaller
            hoverBind();
            allItems();
            menuItemHoverStates();
            openCloseMenu();
            nrSorts();
          } else if (windowWidth >= 1220){
            //full size
            hoverBind();
            allItems();
            menuItemHoverStates();
            openCloseMenu();
            nrSorts();
          }
      }
      function hoverBind(){
        //unbind the click if we have one...
        //bind the hover
        $nrTopLevel.hoverIntent({
          sensitivity: 7,
          interval: 100,
          timeout: 1000,
          over: function(e){
            $(this).find('ul.newsrail-menu').stop().fadeIn('fast');
          },
          out: function(e){
            if(!(menuSelected)){
              $(this).filter(':not(.default-hovering)').find('ul.newsrail-menu').stop().fadeOut('fast');
            }
          }
        }).children('a').click(function(e){
          e.preventDefault(); // Stop link following on top level menu items
        })
          // Stop link following on first and second level closing menu
          .add($nrSecondLevel).bind('mousedown', function(){
            ignoreBlur = true;
            //keep the menu open while a page is selected
            menuSelected = true;
          });
      }
      function clickBind(){
        mobileMenu();
        //unbind the hover intent stuff
        //for mobile, repeat everything without the hoverIntent script
        /*$nrTopLevel.bind('mousedown', mobileMenu).children('a').click(function(e){
          e.preventDefault(); // Stop link following on top level menu items
        })
          // Stop link following on first and second level closing menu
          .add($nrSecondLevel).bind('mousedown', function(){
            ignoreBlur = true;
          });*/
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
      function mobileMenuOld(e) {
        //Fix the mobile menu when the sub-menu is deeper than the screen
        //figure out if the menu is too big
        var $nrActiveSub = $('.activeMenu');
        var activeMenuHeight = $nrActiveSub.height();
        var blockWidth = $nrActiveSub.width();
        var blockHeight = $('.activeMenu li').height()
        var mobileMenuHeight = $(window).height() - 100;
        var moreButtonOffset = $(window).height() - blockHeight - 100;
        var moreOffset = mobileMenuHeight;
        var subMenuMove = activeMenuHeight - mobileMenuHeight + blockHeight;
        //set up my variable 
        //force it to add the button for the -default hovering state
       $('.default-hovering').removeClass('default-hovering');
       if ($(e.target).hasClass('menu-views-title')  ){
          $('.activeMenu').hide().removeClass('activeMenu');
          $(this).find('ul.newsrail-menu').stop().fadeIn('fast').addClass('activeMenu').animate({'left':0}).height(mobileMenuHeight);
          $('.backButton').stop().bind('mousedown', function(e){
            //alert('back');
            e.preventDefault();
            $('.activeMenu').animate({'left':'100%'}).removeClass('activeMenu');
          });
        }
        // Add in the mobile drag down handle/call to action (and events)=========
        var $riverWrap = $('#newsrail-river-wrapper');
        var $river = $('#block-views-newsrail-river-main');
        var handleGrabbed = false;
        var startDragTop = 0;
        var lastTop = 0;
        var riverOpened = false;
        var $handle = $('<span>')
          .bind('touchstart mousedown', dragHandleStart)
          .attr('id', 'newsrail-mobile-handle')
          .text('Pull for Latest');
        var $handleArrow = $('<span>').attr('id','handle-arrow').attr('class','handle-arrow-down');
        var $newsrailCover = $('<span>').bind('touchstart mousedown scroll', coverDragHandler)
          .attr('id','mobile-newsrail-cover');


        $('#region-sidebar-first .region-inner').append($handle);
        $newsrailCover.insertAfter('#newsrail-mobile-handle');
        $handle.append($handleArrow);
        //make the handle arrow pulse
        for (var i=0; i<5; i++){
          $('#handle-arrow').fadeTo('slow', 0.6).fadeTo('slow',1);
        }
        // Bind movem/end to document so they can't be occluded or overshot
        $(document)
          .bind('touchmove mousemove', dragHandleMove)
          .bind('touchend mouseup', dragHandleEnd);
        //If we drag on the cover, don't do anything
        function coverDragHandler(e) {
          //console.log('scrolling');
          e.preventDefault();
          return false;
        }

        // Newsriver Drag Handle Start Callback
        function dragHandleStart(e) {
          handleGrabbed = true;
          e.preventDefault();

          if (e.type == "touchstart") { // Touch event! (one finger)
            startDragTop = e.originalEvent.targetTouches[0].pageY;
          } else {
            startDragTop = e.pageY // Mouse
          }
        }

        // Newsriver Drag Handle Start Callback
        //BG sandbox, commented out code is from Phase2
        function dragHandleMove(e) {
          if (handleGrabbed) {
            var t = e.pageY - startDragTop; // Mouse
            if (e.type == "touchmove") { // Touch event! (one finger)
              t = e.originalEvent.targetTouches[0].pageY - startDragTop;
            }

            t = lastTop + t;

            $handle.css('top', t + 40);
            $riverWrap.height(t + 2);
          }
        }

        function dragHandleEnd(e) {
          if (!handleGrabbed) return; // Ignore false calls

          var h = $(window).height()-100;
          handleGrabbed = false;
          //if river is not open already
          if(!riverOpened){
          //Above 12% threshold, open it!
          if ($riverWrap.height() > h/6) {
            // Expand wrapper down
            $riverWrap.animate({height: h }, 'fast', 'swing', function() {
              $river.height(h);
            });

            // Move handle down and make it wide
            $handle.animate({top: h + $handle.height() - 25, width:'100%', 'border-left':'none'}, 'fast', 'swing');
            lastTop = h - $handle.height();
            //put the cover below
            $newsrailCover.delay(600).css({'top': h + $handle.height(),'display':'block'});
            $handle.empty().append($handleArrow.removeClass('handle-arrow-down').addClass('handle-arrow-up').fadeTo('fast',1));
            riverOpened = true;
          } else {
            // Below threshold, let's close it.

            // Fold wrapper up
            $riverWrap.animate({height: 0}, 'fast', 'swing', function() {
              $river.css('height', 'auto');
            });

            // Move handle up
            $handle.animate({top: 2}, 'fast', 'swing');
            lastTop = 0;
          }
        } else {//river is Opened so close if above threshold
          if ($riverWrap.height() > (5*h)/6) {
            // Expand wrapper down
            $riverWrap.animate({height: h }, 'fast', 'swing', function() {
              $river.height(h);
            });

            // Move handle down
            $handle.animate({top: h + $handle.height() - 25, width:'100%', 'border-left':'none'}, 'fast', 'swing');
            lastTop = h - $handle.height();
            $newsrailCover.delay(600).css({'top': h + $handle.height(),'display':'block'});
            $handleArrow.removeClass('handle-arrow-down').addClass('handle-arrow-up');
            $handle.empty().append($handleArrow.removeClass('handle-arrow-down').addClass('handle-arrow-up').fadeTo('fast',1));
            riverOpened = true;
          } else {
            // Below threshold, let's close it.

            // Fold wrapper up
            $riverWrap.animate({height: 0}, 'fast', 'swing', function() {
              $river.css('height', 'auto');
            });

            // Move handle up
            $handle.animate({top: 2, width:'100px', 'border-left':'1px solid #355673'}, 'fast', 'swing').text('Pull for Latest').append($handleArrow.removeClass('handle-arrow-up').addClass('handle-arrow-down'));
            lastTop = 0;
            $newsrailCover.css({'display':'none'});
            riverOpened = false;
          }

        }
        }
      }

      function allItems(){
        //since we will call this on reisze, make sure we haven't done it already
        if($('.allButton').length < 1){
          // Add false menu items "All" for  & "Archives" for non-mobile =============================
          var homeItem = $('<li>').addClass('views-row').addClass('allButton')
            .append($('<a>').attr('href', '/topics').text('All'));
          $('.view-display-id-nr_topic li:first', $nrBlock).before(homeItem);

          var blogsItem = $('<li>').addClass('views-row').addClass('allButton')
            .append($('<a>').attr('href', '/blogs').text('All'));
          $('.view-display-id-nr_blog li:first', $nrBlock).before(blogsItem);

          var edItem = $('<li>').addClass('views-row').addClass('allButton')
            .append($('<a>').attr('href', '/editors-picks').text('All'));
          $('h3.nr-ed-picks+.item-list ul li:first', $nrBlock).before(edItem);

          var archiveItem  = $('<li>').addClass('views-row').addClass('allButton')
            .append($('<a>').attr('href', '/magazine/archive').text('Archives'));
        }
        $('li.menu-views:last ul li:last', $nrBlock).after(archiveItem);
      }

     
        // Add the "Back" button for the mobile view - Don't need this, mobile will bind click to top level items
        /*if (windowWidth < 768){
       var mobileBack  = $('<li>').addClass('views-row').append($('<a>').attr('href', '#').text('Back').addClass('backButton'));
        $('li.menu-views ul.newsrail-menu li:first-child').before(mobileBack);
      }*/
      function menuItemHoverStates(){
        // Emulate continued hover on parent menu LI =============================
        var $subItems = $('ul.newsrail-menu ul', $nrBlock);
        var itemHeight = 55; // The precalculated height of menu items
        var maxItems = $nrTopLevel.length; // Start with top level count
        
          $subItems.hover(function(){
             $(this).parents('li').addClass('hovering');
            },function(){
              $(this).parents('li').removeClass('hovering');
            }
          ).each(function(index, element){
            // Set the height of the "content" area of the menu to the tallest UL
            maxItems = $('li', this).length > maxItems ? $('li', this).length : maxItems;

            if (index === $subItems.length - 1) {
              $('.block-inner > .content', $nrBlock).height(itemHeight * maxItems + 20);
            }
          });

        // TODO: This isn't quite right..... =================
        // deal w/default hover state
        $('ul.newsrail-menu li', $nrBlock).hover(function(){
            // remove the default "hover" state for now
            $('.newsrail-menu > li.the-default-hover-item', $nrBlock).removeClass('default-hovering');
          },function(){
            // reset the default-hover state
            $('.newsrail-menu > li.the-default-hover-item', $nrBlock).addClass('default-hovering');
          }
        );
        // Allow the title to have focus
        $nrTitle.attr('tabindex', 10);
        $nrBlock.hoverIntent({
          sensitivity: 7,
          interval: 100,
          timeout: 1000,
          over:function(e){
            //lets try and open the menu we will close it via click (below)
            $nrTitle.addClass('newsrail-opened').removeClass('newsrail-closed');
            $('#newsrail-river-wrapper').addClass('newsriver-fade');
            $('#newsriver-gradient').fadeIn('normal');
            $('#newsrail-mobile-handle').hide();
            if ($('body').is('.responsive-layout-desktop, .responsive-layout-tablet')) {
              $nrBlock.animate({
                width: '290px'
              }, 150, function() {
                // Animation complete.
                $('.block-inner > .content', $nrBlock).slideDown('normal');
              });
            } else {
              $('.block-inner > .content', $nrBlock).stop().slideDown('normal');
            }
          },
          out: function(e){
            //hide the menu when we mouse out
            if(!(menuSelected)){
              $nrTitle.addClass('newsrail-closed').removeClass('newsrail-opened');
              $('#newsrail-river-wrapper').removeClass('newsriver-fade');
              $('#newsriver-gradient').fadeOut('normal');
              $('#newsrail-mobile-handle').fadeIn('fast');

              if ($('body').is('.responsive-layout-desktop, .responsive-layout-tablet')) {

                $('.block-inner > .content', $nrBlock).slideUp('fast', function(){
                  $nrBlock.animate({
                    width: '100%'
                  }, 150);
                });
              } else {
                $('#block-menu-menu-newsrail .block-inner > .content').slideUp('fast');
              }

              $nrTitle.blur();
            }
          }
        });
      }
      function openCloseMenu(){
        // Bind H2 title click to open the menu
        $nrTitle.bind('blur click', function(e){
          // Ignore blur events from top level menu item clicks, reset the focus
          if (ignoreBlur && e.type === 'blur') {
            ignoreBlur = false;
            $nrTitle.focus();
            return;
          }
          // Close the menu if it's open ===========================================
          if ($nrTitle.is('.newsrail-opened') || (e.type == 'blur' && $nrTitle.is('.newsrail-opened'))) {
            $nrTitle.addClass('newsrail-closed').removeClass('newsrail-opened');
            $('#newsrail-river-wrapper').removeClass('newsriver-fade');
            $('#newsriver-gradient').fadeOut('normal');
            $('#newsrail-mobile-handle').fadeIn('fast');

            if ($('body').is('.responsive-layout-desktop, .responsive-layout-tablet')) {

              $('.block-inner > .content', $nrBlock).slideUp('fast', function(){
                $nrBlock.animate({
                  width: '100%'
                }, 150);
              });
            } else {
              $('#block-menu-menu-newsrail .block-inner > .content').slideUp('fast');
            }

            $nrTitle.blur();

          } else if (e.type != 'blur') {
            // Open the menu if it's closed ========================================
            $nrTitle.addClass('newsrail-opened').removeClass('newsrail-closed');
            $('#newsrail-river-wrapper').addClass('newsriver-fade');
            $('#newsriver-gradient').fadeIn('normal');
            $('#newsrail-mobile-handle').hide();

            if ($('body').is('.responsive-layout-desktop, .responsive-layout-tablet')) {
              $nrBlock.animate({
                width: '290px'
              }, 150, function() {
                // Animation complete.
                $('.block-inner > .content', $nrBlock).slideDown('normal');
              });
            } else {
              $('.block-inner > .content', $nrBlock).stop().slideDown('normal');
            }
          }
        });
      }
      function nrSorts(){
        //unbind mobile behavior
        // Bind click for Newsriver sort options
        $('#newsriver-sorts a').click(function(e){
          //get the nr title to preserve it
          var sortTitle  = $('.nr-title').text();
          //console.log(currentTitle);
          //bind the change to the event
         $(document).ajaxComplete(function(){
            //console.log('changed');
            //console.log(sortTitle);
           $('.nr-title').text(sortTitle);
          });
          var filterKey = this.id == 'newsriver-sort-recent' ? 'published_at' : 'count_1';
          $('.view-newsrail-river .view-filters .form-select').val(filterKey).change();
          
          //swap out the nr title
          $('#newsriver-sorts a').removeClass('active');
          $(this).addClass('active');

          e.preventDefault();
        });
      }
      function nrSortsMobile(){
        //unbind desktop behavior
      }
    
  


      /* Both Menu and Search toggle links start (on page load) with a class of "closed".
       * When they are "toggled", the class is either removed or added back to create the
       * method for opening/closing the "drawers".
      */
      //search toggle
      $('#mobile-nav-bar .search-toggle').click(function(e){
        e.preventDefault();
        if($(this).hasClass('closed')){
          //it's closes, open it
          $('#block-views-exp-search-content-exposed').slideDown();
          $('#mobile-nav-bar .search-toggle').removeClass('closed').addClass('opened');
        } else{
          $('#block-views-exp-search-content-exposed').slideUp();
          $('#mobile-nav-bar .search-toggle').removeClass('opened').addClass('closed');
        }
        //return false;
      });
      // menu toggle
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
    //} /* attach */
  
  // Ensure Newsrail sticks when scrolling down

      // Only operate on good browsers
      if ($('body:not(.lte-ie8)')) {
      //only operate when wider than 767
      var windowWidth = $(window).width()
        if(windowWidth > 767){
          // Get the offset as the height of the two header elements
          var topOffset = $('#section-header').height();
          var $railContainer = $('#region-sidebar-first');
          var $rail = $('#block-views-newsrail-river-main, #block-system-main-menu', context);
          // Did we already process the block?
          // Or does the block not exist in this context? exit out!
          if ($rail.is('.processed') || $rail.length != 1){
            return;
          } else {
            $rail.addClass('processed'); // Point of no return!
          }

        function checkRailSnap(e) {     
          if(($("#page").height() - $(window).height()) < ($("#section-header").height() - 10)) {       
            scrollable = false;       
          } else {        
            scrollable = true;
          }       
              
        if(scrollable) {        
          
          if($.browser.msie) {
          var win_scroll_y = window.pageYOffset;
          } else {
          var win_scroll_y = window.scrollY;
            if(!win_scroll_y){
              var win_scroll_y = window.pageYOffset;
            }
          }
          
        
            if (win_scroll_y > topOffset) {
              var forceHeight = false;
              //console.log(window.scrollY);
              //console.log(topOffset);
              if (!$railContainer.is('.fixed-menu')) {
                $railContainer.addClass('fixed-menu');
                $railContainer.css("margin-top",$("#toolbar").height());
                forceHeight = true;
              }

              if (e.type === 'resize' || forceHeight) {
                $rail.height($(window).height() - $rail.offset().top + win_scroll_y);
              }
            } else {
              if ($railContainer.is('.fixed-menu')) {
                $railContainer.removeClass('fixed-menu');
                $railContainer.css("margin-top",'0px');
              }
              $rail.height('auto');
            }
            
      } else {
  //      $rail.height($(window).height() - ($rail.offset().top - window.scrollY));
        var check_5 = ($("#page").height() - $("#section-header").height()) + $("#toolbar").height();     
        var scrollable;   
        //console.log(check_5);
        //$("#region-sidebar-first").css('height',check_5);   
        //$("#region-sidebar-first").css('overflow','hidden');      
        $("#block-views-newsrail-river-main").css('height',$("#newsrail-river-wrapper").height());      
        $("#block-views-newsrail-river-main").css('overflow','auto');
      }
            //
            
          }

          $(window).bind('touchmove touchend scroll resize', checkRailSnap);
        }
      }
    //}
  });

})(jQuery);


