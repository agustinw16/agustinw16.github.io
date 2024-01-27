/*Esta funcion tiene el objetivo de identificar en cual imagen se hizo click, de esa manera, a esa imagen agregarle o quitarle 
la clase "touch" dependiendo si se estaba abriendo o cerrando y a las demas imagenes quitarle la clase "touch" esto con el objetivo
de que cuando se haga click sobre la imagen en un dispositivo movil la imagen quede abierta al presionar otros botones 
y asi no relentizar las transiciones*/
function clickImage(classPrimary) {
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');

    if(classPrimary == 'one'){
        one.classList.toggle("touch");
        two.classList.remove("touch");
        three.classList.remove("touch");
    }
    if(classPrimary == 'two'){
        two.classList.toggle("touch");
        one.classList.remove("touch");
        three.classList.remove("touch");
    }
    if(classPrimary == 'three'){
        three.classList.toggle("touch");
        two.classList.remove("touch");
        one.classList.remove("touch");
    }

    
}