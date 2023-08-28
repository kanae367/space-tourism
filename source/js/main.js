import { setDestinationEventListener } from "./components/pages/destination.js";
import { setCrewEventListener } from "./components/pages/crew.js";
import { setTechEvenListener } from "./components/pages/tech.js";
import { setPopupEventListeners } from "./components/popup.js";
import { setHomeEventListeners } from "./components/pages/homeButton.js";
import { setLevitationEffect } from "./components/levitationEffect.js";

$(function(){
    $(".content-overlay").fadeOut();

    setDestinationEventListener();
    setCrewEventListener();
    setTechEvenListener();
    setPopupEventListeners();
    setHomeEventListeners();

    if($(window).innerWidth() > 1400){
        setLevitationEffect();
    }
});
