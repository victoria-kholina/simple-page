jQuery(document).ready(function(){
    
    $(window).resize(getDropdown); 
    getDropdown();  
    
    var mySwiper = new Swiper ('.swiper-container', {
        loop: false,
      pagination: '.swiper-pagination',
      paginationClickable: true,
    
      paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 5
        
//  Uncomment for autoplay slider
//        autoplay: 3000,
//        autoplayDisableOnInteraction: false
    }); 
    
    
    $('.buy-now-btn').hover(
        function() {
            $(this).parents("table").find("thead tr:first-child").css("background","#44c0c2");
        }, 
        function() {
            $(this).parents("table").find("thead tr:first-child").css("background","#485460");
        }
     );
    
    $(".main-menu li a").click(function () {
        var elemClick = $(this).attr("href");  
        var elemPos = $(elemClick).offset().top;
        $("body,html").animate({scrollTop: elemPos }, 800);
        return false;
      });
    
    function getDropdown(){
        var divMenu = $('.mobile-menu');
        var winWidth = $(window).width();
        if (winWidth<768){ 
            if(divMenu.hasClass("hidden")){
                divMenu.removeClass("hidden").addClass("visible");
                $(".main-menu").removeClass("horizontal-menu").addClass("vertical-menu").hide();
                $(".mobile-menu button").on("click", function(){
                    $(".main-menu").slideToggle();
                    divMenu.find("span").toggleClass("closed opened");
                    });      
            };
        } else {
            if($(".main-menu").hasClass("vertical-menu") || divMenu.hasClass("visible")){
                $(".main-menu").removeClass("vertical-menu").addClass("horizontal-menu").show();
                divMenu.removeClass("visible").addClass("hidden");
            }
        };
    };

});//end jQuery
                    