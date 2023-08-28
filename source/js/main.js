import { setDestinationEventListener } from "./pages/destination.js";
import { setCrewEventListener } from "./pages/crew.js";
import { setTechEvenListener } from "./pages/tech.js";
import { setPopupEventListener } from "./popup.js";
import { navClickHandler } from "./navigationClick.js";

$(function(){

setDestinationEventListener();
setCrewEventListener();
setTechEvenListener();
const popupNavElements = setPopupEventListener();

const headerNavElements = $(".header__nav-list-item");
const contentContainer = $(".container");
const contentOverlay = $(".content-overlay");
contentOverlay.fadeOut();

popupNavElements.on('click', navClickHandler);
headerNavElements.on('click', navClickHandler);

const homeBtnClickHandler = function(){
    headerNavElements.removeClass('header__nav-list-item_active');
    headerNavElements.eq(1).addClass('header__nav-list-item_active');
    contentOverlay.fadeIn().fadeOut();

    setTimeout(function(){
        contentContainer.attr('class', 'container destination-active');
    }, 400);
};

$('.home__button').on('click', homeBtnClickHandler);

if($(window).innerWidth() > 1400){
    const getRandomNumber = () => Math.round(Math.random() * 3) + 3;
    const getRandomDirection = () => Math.round(Math.random()) ? "" : "-";
    const getRandomOffset = () => getRandomDirection() + getRandomNumber() + 'px';

    setInterval(function(){
        $(document.documentElement).css({
            '--moveX': getRandomOffset(),
            '--moveY': getRandomOffset(),
            '--moveXp': getRandomOffset(),
            '--moveXp': getRandomOffset(),
            '--moveXt': getRandomOffset(),
            '--moveXt': getRandomOffset(),
        })
    }, 3900)
}

});
