/*Con este archivo.js manejaremos las acciones que hara la pagina al enviar un mail a nuestro correo*/

const formContact = document.getElementById('contact-form') //Obtengo el formulario del dom, elemento con id=form, y lo guardo en al constante $form

/*A dicho formulario obtenido le indico que se ejecute la funcion "sendForm" cuando se lanza el evento submit osea cuando se da enviar mensaje*/
formContact.addEventListener('submit', sendForm)

/*Al marcar la funcion como async indico que esta funcion devuelve una promesa siempre y puedo utilizar await para hacer la funcion mas sincrona*/
async function sendForm(event){
    event.preventDefault() //Al evento submit le quito sus acciones por default (como lo es recargar la pagina)

    /*
    - FormData crea un objeto con todos los datos del formulario (name,email,message) y lo guardo en otra variable form 
    - Es especialmente útil cuando necesitas enviar datos de formulario a través de una solicitud HTTP
    - "this" hace referencia a formContact ya que es el elemento que llama la funcion, enves de this podria poner "formContact" variable que contiene el formulario
    */
    const form = new FormData(this) 

    /*Utilizo fetch para enviar la peticion HTTP request a la API de formspree enviandole como parametros la url (this.action ya que en el archivo
    index.html en el elemento form indique como "action" la url de la API), el tipo de request (en este caso POST indicado tambien en el elemento form
    a traves de "method") y el cuerpo del formulario. Los nombres de method, body son predefinidos por fetch*/
    const response = await fetch(this.action,{  /*Con await indicamos que el codigo esperara a la respuesta del fetch para seguir*/
        method: this.method,
        body: form,
        /*Headers es la respuesta del servidor, en este caso indico que "acepto" una "application/json" es decir un json como respuesta*/
        headers:{
            'Accept': 'application/json'
        }
    })
    /*Si response (en este caso es un variable que guardara la respuesta del fetch) tiene un key de indique que se realizo correctamente(ok) entonces:*/
    if(response.ok){
        this.reset() //Reseteo los campos del formulario

        /*Obtengo el elemento con h2 de la ventana modal y le paso el texto a mostrar*/
        document.getElementById("modalTitulo").innerHTML = "Sent successfully, thanks for contacting me";
        //alert("Sent successfully, thanks for contacting me") //Muestro un alert con el mensaje provisto

        /*Codigo para abrir la ventana de modal de confirmacion*/
        const modalConfirmacion = document.getElementById('modalConfirmacion'); //Obtengo la ventana modal
        const botonClose = document.getElementById('botonClose'); //Obtengo el boton close
        modalConfirmacion.classList.add('modal--show'); //Le añado la clase 'modal--show' al elemento que contiene a la ventana modal 

        // Verificar si ya se agregó el evento 'click' al botón
        if (!botonClose.dataset.eventListenerAdded){     
            //Al boton close le añado el evento click, para que al presionarlo remueva la clase 'modal--show'
            botonClose.addEventListener('click', (event)=>{
                event.preventDefault();
                modalConfirmacion.classList.remove('modal--show');
            });

            // Marcar que ya se agregó el evento al botón
            botonClose.dataset.eventListenerAdded = true;
        }
        
    }
}