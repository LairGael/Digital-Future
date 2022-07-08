const servicio1 = document.getElementById('servicio1');
const servicio2 = document.getElementById('servicio2');
const servicio3 = document.getElementById('servicio3');


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
    threshold: .8
});


observadorServicio.observe(servicio1);
observadorServicio.observe(servicio2);
observadorServicio.observe(servicio3);