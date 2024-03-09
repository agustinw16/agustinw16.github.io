//*Parallax Effect
//*Obtengo algunos elemento del section parallax y los guardo en una variable
let text = document.getElementById('welcome');
let moon = document.getElementById('moon');

//*Le agrego un evento a la ventana del navegador al hacer scroll
window.addEventListener('scroll', () =>{
    let value = window.scrollY; // En "value" almaceno la cantidad de desplazamiento vertical de la ventana del navegador en píxeles.

    text.style.marginTop = value * 2.5 + 'px' // Al titulo le defino un nuevo margen top multiplicando value*2.5 
    moon.style.top = value * -1.5 + 'px' 
});