const servicio1 = document.getElementById('servicio1');
const servicio2 = document.getElementById('servicio2');
const servicio3 = document.getElementById('servicio3');
const servicio4 = document.getElementById('servicio4');
const servicio5 = document.getElementById('servicio5');
const servicioG1 = document.getElementById('servicioG1');
const servicioG2 = document.getElementById('servicioG2');
const servicioG3 = document.getElementById('servicioG3');
const servicioG4 = document.getElementById('servicioG4');
const servicioG5 = document.getElementById('servicioG5');
const servicioG6 = document.getElementById('servicioG6');
const servicioA1 = document.getElementById('servicioA1');
const servicioA2 = document.getElementById('servicioA2');


const cargarElementoServicio = (entradas, observadorServicio) => {
    entradas.forEach((entrada) =>{
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }else{
            entrada.target.classList.remove('visible');
        }
    });
}


const observadorServicio = new IntersectionObserver(cargarElementoServicio, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: .4
});


observadorServicio.observe(servicio1);
observadorServicio.observe(servicio2);
observadorServicio.observe(servicio3);
observadorServicio.observe(servicio4);
observadorServicio.observe(servicio5);
observadorServicio.observe(servicioG1);
observadorServicio.observe(servicioG2);
observadorServicio.observe(servicioG3);
observadorServicio.observe(servicioG4);
observadorServicio.observe(servicioG5);
observadorServicio.observe(servicioG6);
observadorServicio.observe(servicioA1);
observadorServicio.observe(servicioA2);
