    if(Meteor.isClient) {


 
    

    Template.about.onRendered(function() {


    $(window).scroll(function(event) {
        var x = $(this).scrollTop();

         if(x > 50) {
          $(".bio-wrapper").removeClass("push");
        }
      });


     $("li a").on("click", function() {
        $(".center-btn ul").toggleClass("active");
        Menu.el.menuTop.toggleClass('menu-top-click');
        Menu.el.menuMiddle.toggleClass('menu-middle-click');
        Menu.el.menuBottom.toggleClass('menu-bottom-click');
        $(".top-nav").css("background", "none");
    });


    $(document).on('scroll', function() {
        $(".header-background").toggleClass('scrolling');

    });

    
    });

    
}

