//замена текстового контента с анимацией
export const changeText = function(element, newText){
    element.fadeOut()
    .queue('fx', function(){$(this).text(newText).fadeIn().dequeue('fx');})
};