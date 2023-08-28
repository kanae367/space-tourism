import { navClickHandler } from "../navigationClick.js";

export const setHomeEventListeners = () => {
    const headerNavElements = $(".header__nav-list-item");

    $('.home__button').on('click', () => {
        headerNavElements.removeClass('header__nav-list-item_active');
        headerNavElements.eq(1).addClass('header__nav-list-item_active');
        $('.content-overlay').fadeIn().fadeOut();
    
        setTimeout(function(){
            $(".container").attr('class', 'container destination-active');
        }, 400);
    });

    headerNavElements.on('click', navClickHandler);
}