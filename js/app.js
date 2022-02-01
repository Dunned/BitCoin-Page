document.addEventListener("DOMContentLoaded",function(){
    ScrollReveal().reveal('.headline')
    ScrollReveal().reveal('.tagline', { delay: 600 })
    ScrollReveal().reveal('.product-detail--card', { interval: 500 });
    siguiente=document.getElementById('btnNext');
    bSiguiente=document.getElementById('bnext');
    anterior=document.getElementById('btnBack');
    bAnterior=document.getElementById('bback');
    
    siguiente.addEventListener('click',function(){
        bAnterior.classList.toggle("ocultar");
        bSiguiente.classList.toggle("mostrar");
    })

    anterior.addEventListener('click',function(){
        bAnterior.classList.toggle("ocultar");
        bSiguiente.classList.toggle("mostrar");
    })
});