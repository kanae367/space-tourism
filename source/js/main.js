$(function(){

const headerNavElements = $(".header__nav-list-item");
const contentContainer = $(".container");
const contentOverlay = $(".content-overlay");
contentOverlay.fadeOut();

const popupOpenBtn = $('.header__nav-overlay');
const popup = $('.popup');
const popupCloseBtn = $('.popup__close-btn');

const popupCloseBtnClickHandler = function(){
    popup.removeClass('popup_active');
}

const popupOpenBtnClickHandler = function(){
    popup.addClass('popup_active');

    popupCloseBtn.on('click',popupCloseBtnClickHandler);
};

popupOpenBtn.on('click', popupOpenBtnClickHandler);

const popupNavElements = $('.popup__list-item');

const navClickHandler = function() {
    const navElement = $(this);
    contentOverlay.fadeIn().fadeOut();

    navElement.parent().children().removeClass(`${navElement.parent().attr('class')}-item_active`);
    navElement.addClass(`${navElement.attr('class')}_active`);
    
    setTimeout(function(){
        if(navElement.parent().is('.popup__list')) popup.removeClass('popup_active');

        const activeClass = navElement.find('.nav-link').attr('data-page') + '-active';
        contentContainer.attr('class', `container ${activeClass}`);
    }, 400)
};

popupNavElements.on('click', navClickHandler);
headerNavElements.on('click', navClickHandler);

const destinationNavElements = $(".destination__list-item *");
const planetImageElement = $(".destination__picture > img");
const planetStatElements = $(".info__stats-accent");
const planetTitleElement = $(".info__title");
const planetTextElement = $(".info__text");

//замена текстового контента с анимацией
const changeText = function(element, newText){
    element.addClass('swap-animation')
    .delay(400)
    .queue('fx', function(){$(this).text(newText).removeClass('swap-animation').dequeue('fx');})
};

const destinationNavClickHandler = function(){
    const planet = destination[$(this).attr("data-planet")];
    if(planet.name === planetTitleElement.text().toLowerCase()) return;

    destinationNavElements.removeClass('nav-link_active');
    $(this).addClass('nav-link_active');

    planetImageElement.addClass('swap-animation')
        .delay(400)
        .queue('fx', function(){$(this).attr('src', `source/images/destination/${planet.image}`).removeClass('swap-animation').dequeue('fx');})
    changeText(planetTitleElement, planet.name);
    changeText(planetTextElement, planet.text);
    changeText(planetStatElements.eq(0), planet.facts.distance);
    changeText(planetStatElements.eq(1), planet.facts.travelTime);
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

    memberPhotoElement.addClass('swap-animation')
    .delay(400)
    .queue('fx', function(){$(this).attr('src', `source/images/crew/${member.photo}`).removeClass('swap-animation').dequeue('fx');});
    changeText(memberNameElement, member.name);
    changeText(memberPositionElement, member.position);
    changeText(memberInfoElement, member.info);
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

    techImage.addClass('swap-animation')
        .delay(500)
        .queue('fx', function(){$(this).attr('class',  `technology__image technology__image_${tech.id}`).removeClass('swap-animation').dequeue('fx');})
    changeText(techTitle, tech.title);
    changeText(techInfo, tech.text);
};

techNavElements.on('click', techNavClickHandler);

const homeBtn = $('.home__button');

const homeBtnClickHandler = function(){
    headerNavElements.removeClass('header__nav-list-item_active');
    headerNavElements.eq(1).addClass('header__nav-list-item_active');
    contentOverlay.fadeIn().fadeOut();

    setTimeout(function(){
        contentContainer.attr('class', 'container destination-active');
    }, 400);
};

homeBtn.on('click', homeBtnClickHandler);

});