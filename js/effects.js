//*Parallax Effect
//Obtengo algunos elemento del section parallax y los guardo en una variable
let text = document.getElementById('welcome');
let moon = document.getElementById('moon');

//Le agrego un evento a la ventana del navegador al hacer scroll
window.addEventListener('scroll', () =>{
    let value = window.scrollY; // En "value" almaceno la cantidad de desplazamiento vertical de la ventana del navegador en píxeles.

    text.style.transform = `translateY(${value + 'px'})` // Al titulo le defino un nuevo margen top multiplicando value*2.5 
    moon.style.transform = `translateY(${-value + 'px'})` 
});

//*Typed Effect
/*Biblioteca Typedjs de https://cdnjs.com/libraries/typed.js/2.0.12*/
const typing = new Typed(".typing", { //Obtengo el elemento con la clase "typing"
    strings: ["Developer", "Student"], //Creo un array de palabras que quiero que se muestren
    typeSpeed:100, //Velocidad de escritura
    backDelay: 2000, //Tiempo de espera hasta volver a escribir otra palabra (2 segundos)
    backSpeed:50, //Velocidad de borrado de la palabra
    loop: true //Activo que se repita en un bucle cuando llegue a la ultima palabra del array
});