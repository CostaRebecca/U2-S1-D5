
function animationM() {
    let path = document.querySelectorAll('path');
    let numRand = Math.floor(Math.random() * path.length);
    let opacity = Math.round(Math.random());


    path[numRand].style.opacity = opacity;

    setTimeout(animationM, 20);
}

animationM();

function navBar() {




}


window.addEventListener('scroll', function () {
    let navbar = document.querySelector('nav');
    let startReading = document.getElementById('startButton');
    let main = document.getElementById('mainHero');

    if (window.scrollY > main.offsetHeight) {
        navbar.classList.add('navbarScroll');
        startReading.classList.add('cambioVerde');
    } else {
        navbar.classList.remove('navbarScroll');
        startReading.classList.remove('cambioVerde');
    }
});
