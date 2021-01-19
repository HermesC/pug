$(document).ready(function(){
    const ACTIVE_TAB = 'custom-tabs-active'
    const ACTIVE_TITLE = 'custom-title-active'
    moveWeeds()
    handleTabs()
    handleDistributors()
    handleButtonUp()
    function moveWeeds(){
        $('.img-block img').plaxify()
        //$('.mixtures__list__img').plaxify()
        $.plax.enable()
    }
    function handleTabs(){
        const toggleNextTab =  (currentTab, nextTab, currentTitleTab, nextTitleTab) => {            
            
            const imgDataInput = currentTab.find('input')
            const newImgPath = imgDataInput.attr('data-img-path')
            const image = new Image()
            image.src = newImgPath  
            const oldImg = currentTab.find('.custom-tabs-wrapper-item img')
            if (oldImg) $(oldImg).remove()
            nextTab.find('.custom-tabs-wrapper-item').append(image)
            
            currentTab.removeClass(ACTIVE_TAB)
            currentTitleTab.removeClass(ACTIVE_TITLE)

            nextTab.addClass(ACTIVE_TAB)
            nextTitleTab.addClass(ACTIVE_TITLE)
        }
        $('.custom-tabs-wrapper .button-right').on('click', function(e) {
            console.log('handle tabs')
            //* ВЫБИРАЕМ СЛЕДУЮЩУЮ ВКЛАДКУ ДЛЯ АКТИВАЦИИ, ЕСЛИ ТАКОВОЙ НЕТ - АКТИВИРУЕМ САМУЮ ПРЕВУЮ ВКЛАДКУ
            const activeTab = $($(e.target).siblings('.custom-tabs-active')[0])
            if (activeTab.length != 0){
                const nextTab = $(activeTab).next()
                console.log('nextTab = ' + nextTab)
                if (nextTab.length != 0){
                    toggleNextTab($(activeTab), nextTab, $('.' + ACTIVE_TITLE), $('.' + ACTIVE_TITLE).next())
                    /* $(activeTab).removeClass('custom-tabs-active')
                    nextTab.addClass('custom-tabs-active') */
                }else{              
                    const FIRST_TAB_INDEX = 3
                    const FIRST_TITLE_INDEX = 0        
                    const ancestor = $(activeTab).closest('fieldset')
                    const firstTab = $($(ancestor).children()[FIRST_TAB_INDEX])
                    const firstTitle = $($(ancestor).children()[FIRST_TITLE_INDEX].children[FIRST_TITLE_INDEX])
                    if (firstTab.length != 0 && firstTitle.length != 0){
                        toggleNextTab($(activeTab), firstTab, $(ACTIVE_TITLE), firstTitle)
                        /* firstTab.addClass('custom-tabs-active')
                        activeTab.removeClass('custom-tabs-active') */
                    }
                    
                    console.log('first tab = ' + firstTab)
                }
            }
        })
        $('.custom-tabs-wrapper .button-left').on('click', function(e) {
            console.log('handle tabs - left')
            //* ВЫБИРАЕМ СЛЕДУЮЩУЮ ВКЛАДКУ ДЛЯ АКТИВАЦИИ, ЕСЛИ ТАКОВОЙ НЕТ - АКТИВИРУЕМ САМУЮ ПРЕВУЮ ВКЛАДКУ
            const activeTab = $(e.target).siblings('.custom-tabs-active')[0]
            if ($(activeTab).length != 0){
                const nextTab = $(activeTab).prev()
                console.log('nextTab = ' + nextTab)
                if (nextTab.length != 0){
                    toggleNextTab($(activeTab), nextTab, $(ACTIVE_TITLE), $(ACTIVE_TITLE).prev())
                    /* $(activeTab).removeClass('custom-tabs-active')
                    nextTab.addClass('custom-tabs-active') */
                }else{              
                    const FIRST_TAB_INDEX = 3
                    const FIRST_TITLE_INDEX = 3        
                    const ancestor = $(activeTab).closest('fieldset')
                    const firstTab = $($(ancestor).children()[FIRST_TAB_INDEX])
                    const firstTitle = $($(ancestor).children()[FIRST_TITLE_INDEX].children[FIRST_TITLE_INDEX])
                    if (firstTab.length != 0 && firstTitle.length != 0){
                        toggleNextTab($(activeTab), firstTab, $(ACTIVE_TITLE), firstTitle)
                        /* firstTab.addClass('custom-tabs-active')
                        activeTab.removeClass('custom-tabs-active') */
                    }
                    
                    console.log('first tab = ' + firstTab)
                }
            }
        })
    }
    function handleDistributors(){
        $(".distributor-button span").click(function() {
            var t = $(this).data("all")
              , o = $(this).data("hide");
            $(".distributor-items-wrapp").hasClass("active") ? ($(".distributor-items-wrapp").removeClass("active"),
            $(this).html(t)) : ($(".distributor-items-wrapp").addClass("active"),
            $(this).html(o))
        })
    }
    function handleButtonUp(){
        $(".btn_up").click(function() {
            $("body, html").animate({
                scrollTop: 0
            }, 500)
        });
    }
})