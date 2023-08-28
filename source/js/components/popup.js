import { navClickHandler } from "./navigationClick.js";

const popup = $('.popup');
const popupCloseBtnClickHandler = function(){
    popup.removeClass('popup_active');
}

const popupOpenBtnClickHandler = function(){
    const popupCloseBtn = $('.popup__close-btn');
    popup.addClass('popup_active');
    
    popupCloseBtn.on('click',popupCloseBtnClickHandler);
};

export const setPopupEventListeners = () => {
    const popupOpenBtn = $('.header__nav-overlay');
    popupOpenBtn.on('click', popupOpenBtnClickHandler);

    $('.popup__list-item').on('click', navClickHandler);
}