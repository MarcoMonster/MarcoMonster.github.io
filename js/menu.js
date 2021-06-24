/* Tooltips para tecnologías */
tippy('#tec-HTML5', {
    content: "HTML: Avanzado",
    placement: 'top',
    theme: 'tomato'
});
tippy('#tec-css3', {
    content: "CSS3: Medio-Avanzado",
    // follow on both x and y axes
    placement: 'top',
    theme: 'tomato'
});
tippy('#tec-js', {
    content: "JavaScript: Medio",
    // follow on both x and y axes
    placement: 'top',
    theme: 'tomato'
});
tippy('#tec-sass', {
    content: "SASS: Medio",
    // follow on both x and y axes
    placement: 'top',
    theme: 'tomato'
});
tippy('#tec-botstrap', {
    content: "Bootstrap: Avanzado",
    // follow on both x and y axes
    placement: 'top',
    theme: 'tomato'
});
tippy('#tec-tailwind', {
    content: "Tailwind: Medio",
    // follow on both x and y axes
    placement: 'top',
    theme: 'tomato'
});
tippy('#tec-git', {
    content: "Git: Básico",
    // follow on both x and y axes
    placement: 'top',
    theme: 'tomato'
});
tippy('#tec-jquery', {
    content: "JQuery: Básico",
    // follow on both x and y axes
    placement: 'top',
    theme: 'tomato'
});
tippy('#tec-wordpress', {
    content: "Wordpress: Medio",
    // follow on both x and y axes
    placement: 'top',
    theme: 'tomato'
});
tippy('#tec-invision', {
    content: "InVision: Medio",
    // follow on both x and y axes
    placement: 'top',
    theme: 'tomato'
});
tippy('#tec-sketch', {
    content: "Sketch: Medio",
    // follow on both x and y axes
    placement: 'top',
    theme: 'tomato'
});
tippy('#tec-adobe-xd', {
    content: "Adobe XD: Medio",
    // follow on both x and y axes
    placement: 'top',
    theme: 'tomato'
});
tippy('#tec-photoshop', {
    content: "Photoshop: Medio-Avanzado",
    // follow on both x and y axes
    placement: 'top',
    theme: 'tomato'
});
tippy('#tec-illustrator', {
    content: "Illustrator: Avanzado",
    // follow on both x and y axes
    placement: 'top',
    theme: 'tomato'
});
tippy('#tec-premiere', {
    content: "Premiere: Medio",
    // follow on both x and y axes
    placement: 'top',
    theme: 'tomato'
});


//----------------

AOS.init({
    easing: 'ease-in-out-sine'
  });

//----------------


// Inicio menu
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const menuItem = document.querySelectorAll(".menu-item");

// main toggle
menuBtn.addEventListener("click", () => {
  toggle();
});

// toggle on item click if open
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}
// Fin menu

// Inicio scrollspy
let home = document.querySelector('#home');
let acerca = document.querySelector('#acerca');
let proyectos = document.querySelector('#proyectos');
let tecnologias = document.querySelector('#tecnologias');
let contacto = document.querySelector('#contacto');
 
window.addEventListener('scroll', () => {
    var ventana = window.pageYOffset;
    if(acerca.offsetTop <= ventana && proyectos.offsetTop > ventana){
        console.log('Acerca de');
        document.querySelector('#itemAcerca').setAttribute('class','active');
        document.querySelector('#itemProyectos').removeAttribute('class','active');
        document.querySelector('#itemTecnologias').removeAttribute('class','active');
        document.querySelector('#itemContacto').removeAttribute('class','active');
        document.querySelector('#itemHome').removeAttribute('class','.active');

    } else if (proyectos.offsetTop <= ventana && tecnologias.offsetTop > ventana){
        console.log('Proyectos');
        document.querySelector('#itemProyectos').setAttribute('class','active');
        document.querySelector('#itemAcerca').removeAttribute('class','active');
        document.querySelector('#itemTecnologias').removeAttribute('class','active');
        document.querySelector('#itemContacto').removeAttribute('class','active');
        document.querySelector('#itemHome').removeAttribute('class','.active');
    } 
    else if (tecnologias.offsetTop <= ventana && contacto.offsetTop > ventana){
        console.log('Tecnologías');
        document.querySelector('#itemTecnologias').setAttribute('class','active');
        document.querySelector('#itemAcerca').removeAttribute('class','active');
        document.querySelector('#itemProyectos').removeAttribute('class','active');
        document.querySelector('#itemContacto').removeAttribute('class','active');
        document.querySelector('#itemHome').removeAttribute('class','.active');
    } else if (contacto.offsetTop <= ventana){
        console.log('Contacto');
        document.querySelector('#itemContacto').setAttribute('class','active');
        document.querySelector('#itemAcerca').removeAttribute('class','active');
        document.querySelector('#itemProyectos').removeAttribute('class','active');
        document.querySelector('#itemTecnologias').removeAttribute('class','active');
        document.querySelector('#itemHome').removeAttribute('class','.active');
    } else {
        console.log('Home');
        document.querySelector('#itemHome').setAttribute('class','active');
        document.querySelector('#itemAcerca').removeAttribute('class','.active');
        document.querySelector('#itemProyectos').removeAttribute('class','active');
        document.querySelector('#itemTecnologias').removeAttribute('class','active');
        document.querySelector('#itemContacto').removeAttribute('class','active');
    }
});


