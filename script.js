var menu = document.querySelector('#menu-icon');
var navlist = document.querySelector('.navlist');

const animation_screen = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});
animation_screen.reveal('.hero-text',{delay:200, origin:'top'});
animation_screen.reveal('.icons',{delay:500, origin:'left'});