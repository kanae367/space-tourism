import {changeText} from './changeText.js';
import { technology } from '../data.js';

const techNavElements = $(".technology__nav-btn");
const techTitle = $(".technology__title");
const techInfo = $(".technology__info");
const techImage = $(".technology__image");

const techNavClickHandler = function(){
    const tech = technology[$(this).attr("data-technology")];
    if(tech.title === techTitle.text()) return;

    techNavElements.removeClass('technology__nav-btn_active');
    $(this).addClass('technology__nav-btn_active');

    techImage.fadeOut()
        .queue('fx', function(){
            $(this)
            .attr('class',  `technology__image technology__image_${tech.id}`)
            .fadeIn()
            .dequeue('fx');
        })
    changeText(techTitle, tech.title);
    changeText(techInfo, tech.text);
};

export const setTechEvenListener = () => techNavElements.on('click', techNavClickHandler);