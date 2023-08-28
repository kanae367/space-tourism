import {changeText} from './changeText.js';
import { crew } from '../data.js';

const crewNavElements = $(".crew__nav-link");
const memberNameElement = $(".crew__name");
const memberPositionElement = $(".crew__position");
const memberInfoElement = $(".crew__info");
const memberPhotoElement = $(".crew__image");

const crewNavClickHandler = function(){
    const member = crew[$(this).attr("data-crew")];
    if(member.name === memberNameElement.text()) return;

    crewNavElements.removeClass('crew__nav-link_active');
    $(this).addClass('crew__nav-link_active');

    memberPhotoElement.fadeOut()
        .queue('fx', function(){
            $(this)
            .attr('src', `source/images/crew/${member.photo}`)
            .fadeIn()
            .dequeue('fx');
        });
    changeText(memberNameElement, member.name);
    changeText(memberPositionElement, member.position);
    changeText(memberInfoElement, member.info);
};

export const setCrewEventListener = () => crewNavElements.on('click', crewNavClickHandler);