//*Creo un array de objetos, cada objeto sera un proyecto, para que sea escalable el agregar un proyecto
let projects = [
    {
        'name': 'Portfolio',
        'description': `This project shows, through a modern, intuitive, and responsive design, information about me, skills, education 
                        and the most notable projects I have done, in the same way that a CV or resume does. The technologies used for
                        this project were HTML, CSS and JavaScript, with various resources used as API consumption for mail sending`,
        'tech': ['js-icon','html-icon','css-icon'],
        'galery': [],
        'github': 'https://github.com/agustinw16/agustinw16.github.io'
    },
    {
        'name': 'App Notes',
        'description': `My Notes is a CRUD project of a web application for notes, which allows the user to: create, delete, edit, and archive notes. 
                        The backend was built using Node.js and Express, and MySQL is used as the database for storing the notes`,
        'tech': ['js-icon','html-icon','css-icon','node-icon','express-icon','mysql-icon'],
        'galery': [],
        'github': ''
    }
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
const createProjectTech = (techs) =>{  // Recibo un objeto del tipo 'project'
    let techsHTML = '';
    for(let tech of techs){
        techsHTML += 
        `
        <div class="label-tech">
            <img src="assets/${tech}.svg" class="label-img">JavaScript
        </div>
        `
    }
    return techsHTML;
}

//* Funcion para pasar un objeto del tipo 'project' a un formato para visualizarlo en html
const createProjectsHTML = (project) =>{  // Recibo un objeto del tipo 'project'

    /* En una variable escribo los codigos HTML de los divs necesarios para que cuando lleguen a traves del 'innerHTML' al div con id="list-projects" de 'index.html' 
    HTML reconozca el formato hmtl y pueda mostrar un 'proyecto' con la forma y estilo correspondiente */
    let projectHTML = 
    `
    <div id="${project.name}" class="card-slide swiper-slide">
        <div class="image-content">
            <img src="assets/projects/${project.name}/${project.name}.jpg" alt="" class="card-img">
        </div>

        <div class="card-content">
            <h2 class="name-project">${project.name}</h2>
            <p class="description-project">${project.description}</p>
            <div class="tech">
                ${createProjectTech(project.tech)}
            </div>
            <div class="card-buttons">
                <div class="button">
                    <img src="assets/galery-icon.svg" class="button-img">Galery
                </div>
                <a href="${project.github}" target="_blank" class="button">
                    <img src="assets/github-icon.svg" class="button-img">Github
                </a>   
            </div>                                          
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

chargeProjects();