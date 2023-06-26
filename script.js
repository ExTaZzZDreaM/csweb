var menu = document.querySelector('#menu-icon');
var navlist = document.querySelector('.navlist');

var menu_sound = document.querySelector('.navlist');
var sound1 = new Audio('menu-sound1.mp3');
var sound2 = new Audio('menu-sound2.mp3');
var sound3 = new Audio('menu-sound3.mp3');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

menu_sound.onclick = () => {
    var randomSound = Math.floor(Math.random() * 3) + 1; // Generates a random number between 1 and 3
    switch (randomSound) {
        case 1:
            sound1.play();
            break;
        case 2:
            sound2.play();
            break;
        case 3:
            sound3.play();
            break;
        default:
            break;
    }
}

const animation_screen = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

animation_screen.reveal('.hero-text',{delay:200, origin:'top'});
animation_screen.reveal('.icons',{delay:500, origin:'left'});
