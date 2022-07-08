/* Menu responsive */
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
});

/* Carrusel de imagenes */ 
const carrusel = document.querySelector("#carrusel");
let seccion_carrusel = document.querySelectorAll(".seccion_carrusel");
let carruselSeccionFinal = seccion_carrusel[seccion_carrusel.length -1];

const boton_derecho = document.querySelector("#boton_derecho");
const boton_izquierdo = document.querySelector("#boton_izquierdo");


carrusel.insertAdjacentElement('afterbegin', carruselSeccionFinal);

function Siguiente(){
    let carruselSeccionInicial = document.querySelectorAll(".seccion_carrusel")[0];
    carrusel.style.marginLeft = "-200%";
    carrusel.style.transition = "all 0.5s";
    setTimeout(function(){
        carrusel.style.transition = "none";
        carrusel.insertAdjacentElement('beforeend', carruselSeccionInicial);
        carrusel.style.marginLeft = "-100%";
    }, 500);
}

boton_derecho.addEventListener('click', function(){Siguiente()});

function Anterior(){
    let seccion_carrusel = document.querySelectorAll(".seccion_carrusel");
    let carruselSeccionFinal = seccion_carrusel[seccion_carrusel.length -1];
    carrusel.style.marginLeft = "0%";
    carrusel.style.transition = "all 0.5s";
    setTimeout(function(){
        carrusel.style.transition = "none";
        carrusel.insertAdjacentElement('afterbegin', carruselSeccionFinal);
        carrusel.style.marginLeft = "-100%";
    }, 500);
}

boton_izquierdo.addEventListener('click', function(){Anterior()});

setInterval(function(){
    Siguiente();
}, 10000);


/* Animaciones entrada */ 

const elemento1 = document.getElementById('elemento1');
const elemento2 = document.getElementById('elemento2');


const cargarElemento = (entradas, observador) => {
    entradas.forEach((entrada) =>{
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }else{
            /*entrada.target.classList.remove('visible');*/
        }
    });
}


const observador = new IntersectionObserver(cargarElemento, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: .3
});



observador.observe(elemento1);
observador.observe(elemento2);

