const popup = $('.popup');
const popupCloseBtnClickHandler = function(){
    popup.removeClass('popup_active');
}

const popupOpenBtnClickHandler = function(){
    const popupCloseBtn = $('.popup__close-btn');
    popup.addClass('popup_active');
    
    popupCloseBtn.on('click',popupCloseBtnClickHandler);
};

export const setPopupEventListener = () => {
    const popupOpenBtn = $('.header__nav-overlay');
    popupOpenBtn.on('click', popupOpenBtnClickHandler);

    return $('.popup__list-item');
}