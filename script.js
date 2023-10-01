let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*--------*/
function active(){
    var address = document.getElementById("about").
    console.log('active');
}

/*------------------*/
/*sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight(-150);
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a [href*=' + id + ']').classlist.add('active');
        });
    };
});
;

/*----------sticky navbar--------------*/

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/*---------------------------remove-----------*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');




ScrollReveal({ 
   // reset: true,
    distance: '80px'
    duration: 2000, 
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skill-container, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'bottom' });
        