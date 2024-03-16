//*Creo un array de objetos, cada objeto sera un proyecto, para que sea escalable el agregar un proyecto
/* Tipos de proyecto:
    - tipo 0: los proyectos tipo 0 son aquellos que tienen codigo en github y un live demo (tendran 2 botones)
    - tipo 1: los proyectos tipo 1 son aquellos que tienen codigo en github y una galeria, no tiene live demo (tendran 2 botones)
    - tipo 2: los proyectos tipo 2 son aquellos que tienen un live demo pero no estan en github (tiene un boton)
*/
let projects = [
    {
        'name': 'Portfolio',
        'type': 0,
        'description': `This project shows, through a modern, intuitive, and responsive design, information about me, skills, education 
                        and the most notable projects I have done, in the same way that a CV or resume does. The technologies used for
                        this project were HTML, CSS and JavaScript, with various resources used as API consumption for mail sending`,
        'tech': ['JavaScript','HTML','CSS'],
        'deploy': 'https://agustinw16.github.io/',
        'github': 'https://github.com/agustinw16/agustinw16.github.io'
    },
    {
        'name': 'App Notes',
        'type': 0,
        'description': `My Notes is a CRUD project of a web application for notes, which allows the user to: create, delete, edit, and archive notes. 
                        The backend was built using Node.js and Express, and MySQL is used as the database for storing the notes`,
        'tech': ['JavaScript','HTML','CSS','Node','Express','MySQL'],
        'deploy': 'https://mynotesweb-v338.onrender.com/',
        'github': 'https://github.com/agustinw16/mynotesweb'
    }
    /*
    ,{
        'name': 'App Java',
        'type': 1,
        'description': ` `,
        'tech': ['java-icon'],
        'gallery': ['1'],
        'github': ''
    }
    */
];

//* Funcion para cargar los 'proyectos' en la lista de proyectos de html
const chargeProjects = () => {
    let projectsHTML = '';
    let projectsHeader = '';

    for(let project of projects){   // Recorro mi array de 'proyectos' y saco uno por uno
        projectsHTML += createProjectsHTML(project);  // A cada 'proyecto' le doy formato html y los concateno a una variable
        projectsHeader += createProjecstHeader(project); // Con cada proyecto armo la sublista de proyectos y lo concateno a una variable
    }
    document.getElementById("list-project").innerHTML = projectsHTML; // Mando la cadena con todos los 'proyectos' al div con id="list-project"
    document.getElementById("sublist-project").innerHTML = projectsHeader; // Mando la cadena con el nombre de cada 'proyecto' al ul con id="sublist-project"
}

//* Funcion para crear los divs de las tecnologias(vienen en un array) de cada proyecto para visualizarlo en html
const createProjectTech = (techs) =>{  // Recibo un array con las tecnologias
    let techsHTML = '';
    for(let tech of techs){
        techsHTML += 
        `
        <div class="label-tech">
            <img src="assets/${tech.toLowerCase()}-icon.svg" class="label-img">${tech}
        </div>
        `
    }
    return techsHTML;
    //Nota: por precaucion en la linea de codigo que busca el svg con el nombre de la tecnologia, convierto todas las letras a minuscula 
}
//* Funcion crear los botones de cada proyecto segun su tipo para visualizarlo en html
const createButtonByType = (project) =>{  // Recibo un objeto del tipo 'project'
    let buttonsHTML = '';
    
    switch(project.type){
        // tipo 0, dos botones, un live demo y un github
        case 0:
            buttonsHTML= 
            `
            <div class="card-buttons">
                <a href="${project.deploy}" target="_blank" class="button">
                    <img src="assets/globe-icon.svg" class="button-img">Live
                </a> 
                <a href="${project.github}" target="_blank" class="button">
                    <img src="assets/github-icon.svg" class="button-img">Github
                </a>
            </div>  
            `
            break;
        // tipo 1, dos botones, un galery y un github
        case 1:
            buttonsHTML= 
            `
            <div class="card-buttons">
                <div onclick="showGallery('${project.name}')" class="button">
                        <img src="assets/gallery-icon.svg" class="button-img">Gallery
                    </div>
                <a href="${project.github}" target="_blank" class="button">
                    <img src="assets/github-icon.svg" class="button-img">Github
                </a>
            </div>  
            `
            break;
        // tipo 2, un boton, un live demo (en este caso el div que contiene los botones se le elimina su clase "card-buttons" asi los botones esten centrados)
        case 2:
            buttonsHTML= 
            `
            <div>
                <a href="${project.deploy}" target="_blank" class="button">
                    <img src="assets/globe-icon.svg" class="button-img">Live
                </a> 
            </div> 
            `
            break;
    }
    return buttonsHTML;
}

//* Funcion para pasar un objeto del tipo 'project' a un formato para visualizarlo en html
const createProjectsHTML = (project) =>{  // Recibo un objeto del tipo 'project'

    /* En una variable escribo los codigos HTML de los divs necesarios para que cuando lleguen a traves del 'innerHTML' al div con id="list-projects" de 'index.html' 
    HTML reconozca el formato hmtl y pueda mostrar un 'proyecto' con la forma y estilo correspondiente */
    let projectHTML = 
    `
    <div id="${project.name}" class="card-slide swiper-slide">
        <div class="image-content">
            <img src="assets/projects/${project.name}/${project.name}.jpg" loading="lazy" class="card-img">
        </div>

        <div class="card-content">
            <h2 class="name-project">${project.name}</h2>
            <p class="description-project">${project.description}</p>
            <div class="tech">
                ${createProjectTech(project.tech)}
            </div>

            ${createButtonByType(project)}  

        </div>
    </div>
    `
    return projectHTML;
}

//* Funcion para crear la sublista de 'Portfolio' en el header con la cantidad de poyectos presentes
const createProjecstHeader = (project) =>{  // Recibo un objeto del tipo 'project'
    let sublistProject = 
        `
        <li class="list_inside">
            <a href="#${project.name}" class="link_inside">${project.name}</a>
        </li>
        `
    return sublistProject;
}

//*LLamo a la funcion cargar proyecto para que se carguen los proyectos
chargeProjects();

//*Funcion para generar el contenido de la galeria de cada proyecto (No necesita ser llamada desde el js, lo hace con onclick desde el html)
const showGallery = (name)=>{ //Recibo el nombre del proyecto, ya que en el html al crear el boton galery le paso el nombre de cada proyecto
    const modalGallery = document.getElementById('modalGallery'); //Obtengo la ventana modal para mostrar la galeria

    let projectGallery = projects.find(object => object.name === name) //De mi array de proyectos definido al inicio del js, busco el que coincida con el name recibido

    let galleryHTML = ''; //Genero una cadena vacia
    for(let image of projectGallery.gallery){ //Saco un elemento del array "galery" del proyecto
        galleryHTML +=  //Relleno la cadena con el codigo que ira dentro del carrucel de imagenes en la ventana modal
        `
        <div class="gallery-project swiper-slide">
            <img src="assets/projects/${projectGallery.name}/${image}.jpg" alt="" class="gallery-img">
        </div>
        `
    }
    document.getElementById('gallery-postbox').innerHTML = galleryHTML; //Inserto en el div con id gallery-postbox la cadena con el codigo html
    modalGallery.classList.add('modal--show'); //A la ventana modal que obtuve al inicio le agrego la clase css modal--show para mostrar la ventana
    
    const botonClose = document.getElementById('botonCloseGallery'); //Obtengo el boton close de la galeria

    // Verificar si ya se agregó el evento 'click' al botón
    if (!botonClose.dataset.eventListenerAdded){     
        //Al boton close le añado el evento click, para que al presionarlo remueva la clase 'modal--show'
        botonClose.addEventListener('click', (event)=>{
            event.preventDefault();
            modalGallery.classList.remove('modal--show');
        });

        // Marcar que ya se agregó el evento al botón
        botonClose.dataset.eventListenerAdded = true;
    }

}
