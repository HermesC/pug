jQuery(document).ready(function() {

    // var sliderHomeSecond = $(".slider-row");
    var sliderHomeSecond = $(".home-slider-wrapp");
    // var sliderHomeSecond = $(".slider-item-col");

    for(var i = 0; i < sliderHomeSecond.length; i++){
        if( $(sliderHomeSecond[i]).children().length > 1 ){

            $(sliderHomeSecond[i]).owlCarousel({
                responsiveClass: true,
                navSpeed:150,
                dots:true,
                nav:false,
                navText:[],
                items:1,
                autoplay:false,
                autoplayTimeout:35000,
                autoplayHoverPause:true,
                loop:false,
                // autoWidth:true,
                margin:118,

                responsive: {
                    0: {
                        // items: 1,
                        // autoWidth:true,
                        // nav:false
                    },

                },
                onInitialize: function(){
                    setTimeout(function () {
                        sliderHomeSecond.trigger('refresh.owl.carousel');
                    },100)

                }
            });

        }
    }

    dotsPosition();

    function dotsPosition() {
        var dots = $('.section-first .owl-dots');
        var position = ($(window).width() - $('#header_ .container').width())/2;
        dots.css({left:position})
    }

    $(window).resize(function () {
        dotsPosition();
    })

})


















