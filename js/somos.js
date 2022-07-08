const somos1 = document.getElementById('somos1');
const somos2 = document.getElementById('somos2');
const somos3 = document.getElementById('somos3');


const cargarElementoSomos = (entradas, observadorSomos) => {
    entradas.forEach((entrada) =>{
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }else{
            /*entrada.target.classList.remove('visible');*/
        }
    });
}


const observadorSomos = new IntersectionObserver(cargarElementoSomos, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: .3
});


observadorSomos.observe(somos1);
observadorSomos.observe(somos2);
observadorSomos.observe(somos3);
