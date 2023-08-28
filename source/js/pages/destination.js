import {changeText} from './changeText.js';
import { destination } from '../data.js';

const destinationNavElements = $(".destination__list-item *");
const planetImageElement = $(".destination__picture");
const planetStatElements = $(".info__stats-accent");
const planetTitleElement = $(".info__title");
const planetTextElement = $(".info__text");

const destinationNavClickHandler = function(){
    const planet = destination[$(this).attr("data-planet")];
    if(planet.name === planetTitleElement.text().toLowerCase()) return;

    destinationNavElements.removeClass('nav-link_active');
    $(this).addClass('nav-link_active');

    planetImageElement.fadeOut()
        .queue('fx', function(){
            $(this)
                .find('img')
                .attr('src', `source/images/destination/${planet.image}`)
                .parent()
                .fadeIn()
                .dequeue('fx');
        })
    changeText(planetTitleElement, planet.name);
    changeText(planetTextElement, planet.text);
    changeText(planetStatElements.eq(0), planet.facts.distance);
    changeText(planetStatElements.eq(1), planet.facts.travelTime);
};

export const setDestinationEventListener = () => destinationNavElements.on('click', destinationNavClickHandler);