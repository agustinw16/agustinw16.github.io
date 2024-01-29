//En la variable "listElements" guardare todos los elementos que tendra sublista
//Con querySelectorAll selecciono todos los elementos con la clase .dropdown_link_click (osea los que tienen sublista)
let listElements = document.querySelectorAll('.dropdown_link_click');

//Con un forEach recorro esos elementos que tienen sublista y seleccionando uno por uno y los guardo en listElement
listElements.forEach(listElement => {
    
    if (!listElement.dataset.eventListenerAdded){ //Verifico si ya se le agrego al elemento el addEventListener (para que no se sigan agregando repetidos)
        //A cada elemento le agrego un evento que se activa al hacer click (la funcion se repetira con cada click)
        listElement.addEventListener('click', (event) =>{ //El evento que le agrego es la siguiente funcion
            event.preventDefault(); /*Quito el evento por default que hacia volver la pagina al inicio al presionar el boton*/
            /*Con classList tenemos acceso a las clases que posee el elemento en cuestion junto con una serie de metodos para manejarlas*/
            listElement.classList.toggle('arrow') /*toggle es un metodo de classList con la siguiente funcion: si la clase proporcionada
                                                (en este caso 'arrow') se encuentra en la lista de clases la elimina, y si no se encuentra la agrega*/
            
            /*La clase 'arrow' en el CSS no tiene estilos, la agregamos y quitamos para poder referenciar a los elementos hijos (img de flecha)
            y hermanos adyacentes (ul de sublista) del elemento al que le modificamos la clase (enlace <a>), de esta manera cuando 
            hagamos click al enlace <a> se le agrega arrow y en el archivo css funcionara la siguiente linea '.arrow .dropdown_arrow' 
            que genera un rotate al icono de flecha y al hacer click de nuevo se borra la clase arrow por lo que la linea quedara sin efecto
            y el icono de flecha volvera a su posicion original*/

            /*Teniendo en cuenta lo establecido arriba, haremos lo mismo con el elemento que es hermano adyacente al enlace <a>, osea
            el elemento ul de sublista, la sublista puede tener 0,1,2,...etc elementos lo que queremos es que si hay un solo elemento
            el tamaño de la sublista sea de ese unico elemento, si hay 2 elementos que el tamaño sea de esos 2 elementos y asi sucesivamente
            pero si hay mas de 3 elementos se agrege un scroll. Para hacer eso haremos los siguiente: modificamos el alto de la sublista*/

            let height = 0; /*Primero establecemos una variable height en 0 (recordemos que en nuestro CSS establecimos por defecto 
                            un height de 0px a clase que da estilos a la sublista para que siempre esten ocultas al comienzo)*/
            let ulSubList = listElement.nextElementSibling; /*Con nextElementSibling obtenemos la referencia al elemento que es hermano 
                                                        inmediato del elemento listElement (osea los ul que son sublista) y lo guardamos en una variable*/
            
            //Con clientHeight obtenemos la altura exacta del elemento que lo invoco en px (incluyendo el padding, pero no bordes ni margen)
            if(ulSubList.clientHeight == "0"){  //Comprobamos si la altura de la sublista es 0, eso significaria estaba oculta y ahora queremos mostrarla (ya que hubo un click)
                height = ulSubList.scrollHeight; /*con scrollHeight recibo el alto minimo (en int) de un elemento para que no se desborde
                                                osea me muestra el tamaño en px que necesito para mostrar todo el contenido del elemento
                                                es decir si la sublista tiene 1 elemento me devuelve los px necesarios para que ese elemento se vea
                                                si tengo 3 me devuelve el tamaño en px necesarios para que esos 3 se vean*/

                //Con la linea anterior obtuvimos el alto necesario para mostrar los elementos de la sublista, pero recordemos que si son mas de 3 queremos un scroll
                if(height > 130){ //Establecemos que si el height obtenido es mayor a 130 entonces, forzamos a que ese height sea de 130
                    height = 130; //con 130 de height podemos mostrar 3 elementos y si es mayor en el estilo css pusimos un scroll
                }
            }

            /*Si al momento de llegar al if y comprobar que ulSubLista tiene un height mayor a 0 significa que la sublista estaba desplegada y por ende ahora
            queremos ocultarla, entonces no entrara al if y el height de 0 que establecimos al inicio seguira siendo 0, entonces se aplicara ese alto y se ocultara la sublista*/
            
            ulSubList.style.height = `${height}px`; //Establecemos el height obtenido al height de la clase de la sublista
        })
    }
});