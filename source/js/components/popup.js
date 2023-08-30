import { navClickHandler } from "./navigationClick.js";

const popup = $('.popup');

const popupCloseBtnClickHandler = function(){
    popup.removeClass('popup_active');
}

const popupOpenBtnClickHandler = function(){
    popup.addClass('popup_active');
    $('.popup__close-btn').on('click',popupCloseBtnClickHandler);
};

export const setPopupEventListeners = () => {
    $('.header__nav-overlay').on('click', popupOpenBtnClickHandler);
    $('.popup__list-item').on('click', navClickHandler);
}