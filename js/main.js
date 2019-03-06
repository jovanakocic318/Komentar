$(document).ready(function () {



    //FILL ELEMENTS DEPENDS OF CATEGORY
    $('[data-category]').each(function () {
        var color = $(this).data('category');
        $(this).find('.category-bg').css('background', color);
        $(this).find('.category-border').css('border-color', color);
        $(this).find('.category-color').css('color', color);
    });


    // EASE SCROLL

//    $(document).on('click', 'a[href^="#"]', function (event) {
//        event.preventDefault();
//
//        $('html, body').animate({
//            scrollTop: $($.attr(this, 'href')).offset().top
//        }, 800);
//    });


    //ANIMATION 

    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var animation = $(this).attr('data-animation');
            //var delay = $(this).attr('data-delay');
            if (position < scroll + windowHight - 60) {
                $(this).addClass(animation);
                //$(this).css('animation-delay', delay);
            }
            console.log(position);
        });

    }

    animation();

    $(window).scroll(function () {
        animation();
    });




    $('.search-icon').click(function () {
        $(this).next().slideToggle();

    });
    // OWL CAROUSEL START HERE
    if ($('.owl-carousel').length > 0) {


        //lead slider
        $('.lead-slider').owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            nav: true

        });
        
        $('.lead-slider-news-comments').owlCarousel({
            items: 3,
            loop:true,
            margin:20,
            responsive:{
                0:{
                    items:1
                },
               500:{
                    items:2
                },
                991:{
                    items:3
                },
                1200:{
                    items:4
                }
                
            }
            
            
        });
    }
    
    
   
  
});










