export const navClickHandler = function() {
    const navElement = $(this);
    $('.content-overlay').fadeIn().fadeOut();
    
    navElement
        .parent()
        .children()
        .removeClass(`${navElement.parent().attr('class')}-item_active`);
    
    navElement.addClass(`${navElement.attr('class')}_active`);

    if(navElement.parent().is('.popup__list')) $('.popup').removeClass('popup_active');
    
    setTimeout(function(){
        const activeClass = navElement.find('.nav-link').attr('data-page') + '-active';
        $('.container').attr('class', `container ${activeClass}`);
    }, 400)
};