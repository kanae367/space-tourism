$(function(){
const headerNavElements = $(".header__nav-list-item");

const contentContainer = $(".container");
const contentOverlay = $(".content-overlay");
contentOverlay.fadeOut();

const headerNavClickHandler = function() {
    const navElement = $(this);
    contentOverlay.fadeIn().fadeOut();

    headerNavElements.removeClass('header__nav-list-item_active');
    navElement.addClass('header__nav-list-item_active');
    setTimeout(function(){
        const activeClass = navElement.find('.nav-link').attr('data-page') + '-active';
        contentContainer.attr('class', `container ${activeClass}`);
    }, 400)
};

headerNavElements.on('click', headerNavClickHandler);

const destinationNavElements = $(".destination__list-item *");
const planetImageElement = $(".destination__picture > img");
const planetStatElements = $(".info__stats-accent");
const planetTitleElement = $(".info__title");
const planetTextElement = $(".info__text");

const destinationNavClickHandler = function(){
    const planet = destination[$(this).attr("data-planet")];
    if(planet.name === planetTitleElement.text().toLowerCase()) return;

    destinationNavElements.removeClass('nav-link_active');
    $(this).addClass('nav-link_active');

    planetImageElement.attr('src', `images/destination/${planet.image}`);
    planetTitleElement.text(planet.name);
    planetTextElement.text(planet.text);
    planetStatElements.eq(0).text(planet.facts.distance);
    planetStatElements.eq(1).text(planet.facts.travelTime);
};

destinationNavElements.on('click', destinationNavClickHandler);

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

    memberPhotoElement.attr('src', `images/crew/${member.photo}`);
    memberNameElement.text(member.name);
    memberPositionElement.text(member.position);
    memberInfoElement.text(member.info);
};

crewNavElements.on('click', crewNavClickHandler);

const techNavElements = $(".technology__nav-btn");
const techTitle = $(".technology__title");
const techInfo = $(".technology__info");
const techImage = $(".technology__image");

const techNavClickHandler = function(){
    const tech = technology[$(this).attr("data-technology")];
    if(tech.title === techTitle.text()) return;

    techNavElements.removeClass('technology__nav-btn_active');
    $(this).addClass('technology__nav-btn_active');

    techImage.attr('class',  `technology__image technology__image_${tech.id}`);
    techTitle.text(tech.title);
    techInfo.text(tech.text);
};

techNavElements.on('click', techNavClickHandler);
});