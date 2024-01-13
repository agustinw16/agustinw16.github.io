//Guardo en una variable la referencia al boton con el id "menu-button"
const menuButton = document.getElementById('menu-button');

// Verificar si ya se agregó el evento 'click' al botón
if (!menuButton.dataset.eventListenerAdded){
    menuButton.addEventListener('click', ()=>{

        //Codigo para hacer el cambio de icono del boton para abrir y cerrar el menu
        const imagenBoton = document.getElementById('img-button-menu'); //guardo el elemento con el id img-button-menu

        if(imagenBoton.src.endsWith('menu.svg')){ // Si la cadena que contiene imagenBonton.src termina con 'menu.svg' entonces...
            imagenBoton.src='assets/close.svg'; //Cambia el valor del src al nombre del icono de close
        }else{ //Si la cadena que contiene imagenBonton.src termina con 'close.svg' entonces...
            imagenBoton.src='assets/menu.svg'; //Cambia el valor del src al nombre del icono de menu
        }
        
        const contenedor = document.getElementById('contenedor'); //guardo el elemento con el id contenedor
        contenedor.classList.toggle("showmenu");//al elemento contenedor le quito y agrego la clase "showmenu" con cada click
    });

    // Marcar que ya se agregó el evento al botón
    menuButton.dataset.eventListenerAdded = true;
}

