document.addEventListener("DOMContentLoaded",function(){
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