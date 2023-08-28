import { navClickHandler } from "../navigationClick.js";

const headerNavElements = $(".header__nav-list-item");

const handleHomeButtonClick = () => {
    headerNavElements.removeClass('header__nav-list-item_active');
    headerNavElements.eq(1).addClass('header__nav-list-item_active');
    $('.content-overlay').fadeIn().fadeOut();
    
    setTimeout(function(){
        $(".container").attr('class', 'container destination-active');
    }, 400);
}

export const setHomeEventListeners = () => {
    $('.home__button').on('click', handleHomeButtonClick);
    headerNavElements.on('click', navClickHandler);
}