const prompt = require("prompt-sync")({ sigint: true });

//Array para almacenar las tareas
let tareas = [];
let categorias = [
  "Trabajo",
  "Personal",
  //Agregar mas categorias segun se necesite
  // los strings tambien se comportan como arrays, cada caracter es un dato
];

//Funcion que muestra las categorias
function mostrarCategorias() {
  console.log("Categorias existentes: ");
  categorias.forEach(function (categoria, indice) {
    console.log(indice + ": " + categoria);
  }); // puedo aplicar este metodos a la matriz porque es un arreglo dentro de otro arreglo
}

// funcion para agregar mas categorias por el usuario
function agregarCategoria(nuevaCategoria) {
  categorias.push(nuevaCategoria); // metodo que agrega el dato ingresado al final del array
  console.log("Categoria " + nuevaCategoria + " agregada con exito");
}

//Funcion para agregar una nueva tarea al array
function agregarTarea(nombreRecibido, fechaLimiteRecibida = null) {
  tareas.push({
    nombre: nombreRecibido,
    completada: false,
    fechaLimite: fechaLimiteRecibida,
  });
  console.log("Tarea Agreagada exitosamente");
}

//Funcion para eliminar una tarea
function eliminarTarea(indice) {
  if (indice >= 0 && indice < tareas.length) {
    tareas.splice(indice, 1);
    console.log("Tarea eliminada correctamente");
  } else {
    console.log("Indice de tarea invalido");
  }
}

//Funcion para marcar Tarea completada
function completarTarea(indice) {
  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].completada = true;
    console.log("Tarea marcada como completada");
  } else {
    console.log("Indice de tarea invalido");
  }
}

//Funcion para modificar una tarea especifica
function modificarTarea(indice, nuevoNombre, nuevaFechaLimite = null) {
  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].nombre = nuevoNombre;
    if (nuevaFechaLimite !== null) {
      tareas[indice].fechaLimite = nuevaFechaLimite;
    }
    console.log("Tarea modificada con exito");
  } else {
    console.log("Indice de tarea invalido");
  }
}

//Funcion para mostrar opciones
function mostrarMenu() {
  console.log("--Menu--");
  console.log("1. Agregar Tarea");
  console.log("2. Eliminar Tarea");
  console.log("3. Marcar tarea como completada");
  console.log("4. Modificar una Tarea");
  console.log("5. Mostrar todas las Tareas");
  console.log("6. Ver todas las categorias");
  console.log("7. Agregar Categoria");
  console.log("0. Salir");
}

//funcion para interactuar con el usuario
function interactuar() {
  let opcion = -1;
  while (opcion != 0) {
    mostrarMenu();
    opcion = parseInt(prompt("Ingrese la opcion seleccionada: "));

    switch (opcion) {
      case 1:
        let tareaNueva = prompt("Ingrese el nuevo nombre de la nueva tarea: ");
        agregarTarea(tareaNueva);
        break;

      case 2:
        let indiceEliminar = parseInt(
          prompt("Ingrese el indice de la tarea a eliminar: ")
        );
        eliminarTarea(indiceEliminar);
        break;

      case 3:
        let tareaCompletada = prompt(
          "Ingrese el indice de la tarea a compltar: "
        );
        completarTarea(tareaCompletada);
        break;

      case 4:
        let indice = parseInt(prompt("Ingrese el indice a modificar: "));
        let nuevoNombre = prompt("Ingrese el nuevo nombre de su tarea: ");
        modificarTarea(indice, nuevoNombre);
        break;

      case 5:
        console.log("Lista de tareas: ");
        console.log(tareas);
        break;

      case 6:
        mostrarCategorias();
        break;

      case 7:
        let nombreNuevaCategoria = prompt(
          "Ingrese el nombre de la nueva categoria: "
        );
        agregarCategoria(nombreNuevaCategoria);
        break;

      default:
        console.log("Opcion invalida");
        break;
    }
  }
}

interactuar();
