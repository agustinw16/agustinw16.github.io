/* IntersectionObserver es una API de JavaScript que nos permite observar constantemente un elemento es útil para detectar 
si un elemento entro a la vista del usuario/pantalla y reaccionar ante ello*/

//*Observador para section resume*//
/* 1° se debe crear una instancia de IntersectionObserver, esta instancia recibe como parametros una funcion y objeto con opciones (puede estar vacio) */
const opciones = {}
const observadorResume = new IntersectionObserver(comprobarVisibilidad,opciones)

/* 2° obtengo el elemento que quiero verificar su visibilidad */
let resumeSection = document.getElementById('resume') // Obtengo la seccion con el id resume

/* 3° le indico al observador que mire al elemento que quiero con el metodo "observe" */
observadorResume.observe(resumeSection) 

/* El objetivo es hacer que cuando detecte que la seccion resume esta la vista del usuario, se le agregue a los elementos con la
clase "progress-bar" una nueva clase extra llamada "charge-bar" */

const barrasProgreso = document.querySelectorAll('.progress-bar') //Obtengo todos los elementos con la clase "progress-bar"
const educationCard = document.querySelector('.education-card')

/* 4° defino la funcion que recibira IntersectionObserver 
Esta funcion recibira como paramatro el array "entries" el cual es un array de objetos y cada objeto dentro de ese array tiene un serie de variables
que nos brinda informacion sobre el objeto visible 
*/
function comprobarVisibilidad(entries) {
   /* Como entries es un array de objetos hay que recorrerlo con forEach y realizar una comprobacion en cada objeto  
    entries.forEach(entrada => { });  */

   /* En este caso como solo estamos observando a un solo elemento, el array "entries" tendra un solo objeto entonces no es necesario forEach*/
   const entrada = entries[0] // Obtenemos el primer objeto del array

   /* Cada objeto de "entries" tiene un funcion llamada "isIntersecting" la cual indica si esta visible en la pantalla*/
   if (entrada.isIntersecting){
        //Si entrada.isIntersecting devuelve true significa que la seccion "resume" esta a la vista y se realizara lo siguiente:
        barrasProgreso.forEach( barra => { //Recorro cada elemento de barra de progreso
            barra.classList.add("charge-bar") // A cada elemento barra de progreso le agrego la clase charge-bar
        })
        educationCard.classList.add("fade-in-right")
   }
}

/*Extra info: opciones que se pueden pasar a IntersectionObserver
    const opciones = {
        root: document.querySelector('#container'), // Especifica el elemento que se utiliza como área de visión(referencia). Puede ser null (el viewport), o un elemento específico
        rootMargin: '0px 1px 2px 0px', // Permite incrementar el área de visión añadiendo o restando márgenes al área de visión definida por el root
        threshold: 1.0  // Número o array de números entre 0.0 y 1.0 que indican el porcentaje de visibilidad que debe tener el elemento observado para que la funcion se ejecute
    }
*/
//*Observador para section about*//

const observadorAbout = new IntersectionObserver(comprobarVisibilidadAbout,{ threshold: 0.1 })

/* Obtengo el elemento que quiero verificar su visibilidad */
let aboutSection = document.getElementById('about') // Obtengo la seccion con el id resume

/*Le indico al observador que mire al elemento que quiero con el metodo "observe" */
observadorAbout.observe(aboutSection) 

const gallery = document.getElementById('gallery') //Obtengo el elemento con id "gallery"
const informationAbout = document.querySelector('.information-about') //Obtengo el elemento con la clase "information-about"

/* defino la funcion que recibira IntersectionObserver*/
function comprobarVisibilidadAbout(entries) {

   /* En este caso como solo estamos observando a un solo elemento, el array "entries" tendra un solo objeto entonces no es necesario forEach*/
   const entrada = entries[0] // Obtenemos el primer objeto del array

   /* Cada objeto de "entries" tiene un funcion llamada "isIntersecting" la cual indica si esta visible en la pantalla*/
   if (entrada.isIntersecting){
        gallery.classList.add("fade-in-left")
        informationAbout.classList.add("fade-in-right")
   }
}

//*Observador para section portfolio*//
const observadorPortfolio = new IntersectionObserver(comprobarVisibilidadPortfolio,{ threshold: 0.1 })

/* Obtengo el elemento que quiero verificar su visibilidad */
let portfolioSection = document.getElementById('portfolio') // Obtengo la seccion con el id portfolio

/*Le indico al observador que mire al elemento que quiero con el metodo "observe" */
observadorPortfolio.observe(portfolioSection) 

const listProject = document.getElementById('list-project') //Obtengo el elemento con id "list-project"

/* defino la funcion que recibira IntersectionObserver*/
function comprobarVisibilidadPortfolio(entries) {

   /* En este caso como solo estamos observando a un solo elemento, el array "entries" tendra un solo objeto entonces no es necesario forEach*/
   const entrada = entries[0] // Obtenemos el primer objeto del array

   /* Cada objeto de "entries" tiene un funcion llamada "isIntersecting" la cual indica si esta visible en la pantalla*/
   if (entrada.isIntersecting){
        listProject.classList.add("fade-in")
   }
}

//*Observador para section contact*//
const observadorContact = new IntersectionObserver(comprobarVisibilidadContact,{ threshold: 0.1 })

/* Obtengo el elemento que quiero verificar su visibilidad */
let contactSection = document.getElementById('contact') // Obtengo la seccion con el id contact

/*Le indico al observador que mire al elemento que quiero con el metodo "observe" */
observadorContact.observe(contactSection) 

const contactForm = document.getElementById('contact-form') //Obtengo el elemento con id "contact-form"
const contactExtra = document.querySelector('.contact-extra') //Obtengo el elemento con la clase "contact-extra"

/* defino la funcion que recibira IntersectionObserver*/
function comprobarVisibilidadContact(entries) {

   /* En este caso como solo estamos observando a un solo elemento, el array "entries" tendra un solo objeto entonces no es necesario forEach*/
   const entrada = entries[0] // Obtenemos el primer objeto del array

   /* Cada objeto de "entries" tiene un funcion llamada "isIntersecting" la cual indica si esta visible en la pantalla*/
   if (entrada.isIntersecting){
        contactForm.classList.add("fade-in-left")
        contactExtra.classList.add("fade-in-right")
   }
}