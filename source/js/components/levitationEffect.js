export const setLevitationEffect = () => {
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