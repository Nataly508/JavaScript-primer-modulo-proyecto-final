const prompt = require("prompt-sync")({sigint: true});

//Array para almacenar las tareas
let tareas = [];

//Funcion para agregar una nueva tarea al array
function agregarTarea(nombreRecibido, fechaLimiteREcibida = null ) {
    tareas.push({ nombre : nombreRecibido, completada : false, fechaLimite : fechaLimiteREcibida } );    
}

//Funcion para eliminar una tarea
function eliminarTarea(indice) {
    
    if(indice >=0 && indice < tareas.lenght){
        tareas.splice(indice, 1);
        console.log("Tarea eliminada correctamente");
    } else{
        console.log("Indice de tarea invalido");
    }    
}

//Funcion para marcar Tarea completada
    function completarTarea(indice){
    if (indice >=0 && indice < tareas.lenght) {
        tareas[indice].completada = true;
        console.log("Tarea marcada como completada");
    }else{
        console.log("Indice de tarea invalido")
    }
    }

//Funcion para modificar una tarea especifica
    function modificarTarea(indice, nuevoNombre, nuevaFechaLimite = null){
    if (indice >=0 && indice < tareas.lenght) {
        tareas[indice].nombre = nuevoNombre; 
        if(nuevaFechaLimite !== null ){
            tareas[indice].fechaLimite = nuevaFechaLimite;
        }
        console.log("Tarea modificada con exito");
    }else{
        console.log("Indice de tarea invalido");
    }
    }

//Funcion para mostrar opciones
function mostrarMenu(indice) {
    console.log("--Menu--");
    console.log("1. Agregar Tarea");
    console.log("2. Eliminar Tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Modificar una Tarea");
    console.log("5. Mostrar todas las Tareas");
    console.log("0. Salir");
    
}

//funcion para interactuar con el usuario
function interactuar(){
    let opcion = -1;
    while (opcion !=0) {
    mostrarMenu()
    opcion= parseInt(prompt("Ingrese la opcion seleccionada"));

    switch (opcion) {
        case 1: 
        let tareaNueva = parseInt (prompt("Ingrese el nuevo nombre de la nueva tarea"));
            agregarTarea(tareaNueva);
            break;
       
            case 2: 
            let indiceEliminar = parseInt (prompt("Ingrese el indice de la tarea a eliminar"));
                eliminarTarea(indiceEliminar);
                break;

            case 3:
            let tareaCompletada = prompt("Ingrese el indice de la tarea a compltar");
                agregarTarea(tareaCompletada);
                break;  

            case 4: 
            let indice = parseInt(prompt("Ingrese el indice a modificar"));
            let nuevoNombre = prompt("Ingrese el nuevo nombre de su tarea");
                modificarTarea(indice,nuevoNombre);
                break;
              
             case 5: 
            console.log("Lista de tareas:");
            console.log(tareas);
            break;

        default:
            console.log("Opcion invalida");
            break;
    }
}
}

interactuar();