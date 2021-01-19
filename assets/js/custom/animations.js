$(document).ready(function(){
    handleSection2()

    const SCROLL_OFFSET = -200
    function handleSection2(){
        $(window).scroll(function(){
            const adv = $('.advntages')
            const rhmob_container = $('.section-2-container')
            if (if_in_view($(adv[0]), 200)){
                adv.children().addClass('show_elemets')
            }
            if (if_in_view($(rhmob_container[0]), 200)){
                rhmob_container.children().addClass('show_elemets rhombus_offset')               
                rhmob_container.children().each(function (){
                    //$(this).children().addClass('show_elemets children_offset')
                })
            }
            
        })
    }
    function if_in_view($element, offset){
        const $window = $(window)
        const scrollOffset = $window.scrollTop()  + offset + window.innerHeight
        const elementBottomPosition = $element.offset().top + $element.height()
        console.log('scrollOffset = ' + window.innerHeight + ', element bottom = ' + elementBottomPosition)
        /* var window_height = ;;
        var window_top_position = 
        var window_bottom_position = (window_top_position + window_height) - SCROLL_OFFSET;
        const element_top_position = $element.offset().top 
        const element_height = $element.outerHeight();
        var element_bottom_position = (element_top_position + element_height); */

        //console.log('element_top_position = ' + element_top_position + ', window_bottom_position = ' + window_bottom_position)

        if (scrollOffset >= elementBottomPosition){
            //console.log('true')
            return true
           
        }else{
            //console.log('false')
            return false
            
        }
    }
})