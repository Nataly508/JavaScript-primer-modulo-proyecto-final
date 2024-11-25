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
  mostrarCategorias();
  let numeroCategoria = parseInt(
    prompt("Ingrese el numero de la categoria para la nueva tarea: ")
  );
  if (numeroCategoria >= 0 && numeroCategoria < categorias.length) {
    tareas.push({
      nombre: nombreRecibido,
      completada: false,
      fechaLimite: fechaLimiteRecibida,
      categoria: numeroCategoria,
    });
    console.log("Tarea Agreagada exitosamente");
  } else {
    console.log("Numero de categoria incorrecto");
  }
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
function modificarTarea(
  indice,
  nuevoNombre,
  nuevaFechaLimite = null,
  nuevoNumeroCategoria
) {
  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].nombre =
      nuevoNombre !== undefined ? nuevoNombre : tareas[indice].nombre;
    tareas[indice].fechaLimite =
      nuevaFechaLimite !== undefined
        ? nuevaFechaLimite
        : tareas[indice].fechaLimite;
    tareas[indice].categoria =
      nuevoNumeroCategoria !== undefined
        ? nuevoNumeroCategoria
        : tareas[indice].categoria;
    console.log("Tarea modificada con exito");
  } else {
    console.log("Indice de tarea invalido");
  }
}

// Funcion para filtrar tareas por categoria
function filtarTareasCategoria(numeroCategoria) {
  let tareasFiltradas = tareas.filter(function (tarea) {
    return tarea.categoria === numeroCategoria;
  });
  return tareasFiltradas;
}

//Funcion para mostrar cuantas tareas se han completado
function contarTareasCompletadas(numeroCategoria) {
  let tareasCategoria = filtarTareasCategoria(numeroCategoria);
  let tareasCompletadas = tareasCategoria.reduce(function (contador, tarea) {
    return tarea.completada ? contador + 1 : contador;
  }, 0);

  let tareasEntotal = tareasCategoria.length;
  console.log(
    "Tareas completadas de la categoria " +
      numeroCategoria +
      ": " +
      tareasCompletadas +
      " de " +
      tareasEntotal +
      " tareas"
  );
}

// Funcion para mostrar las tareas imcompletas
function mostrarIncompletas() {
  console.log("Tareas no completadas: ");
  tareas.forEach(function (tarea) {
    if (!tarea.completada) {
      console.log(
        " - Nombre: " +
          tarea.nombre +
          ", Categoria: " +
          categorias[tarea.categoria]
      );
    }
  });
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
  console.log("8. Filtrar tareas por cateogria");
  console.log("9. Visualizar cantidad de tareas completadas por categoria");
  console.log("10. Visualizar todas las tareas no completadas");
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
        if (indice >= 0 && indice < tareas.length) {
          let opcion = parseInt(
            prompt(
              "Que propiedad desea modificar? 1. Nombre, 2. Fecha limite, 3. Categoria "
            )
          );

          switch (opcion) {
            case 1:
              let nuevoNombre = prompt("Ingrese el nuevo nombre de su tarea: ");
              modificarTarea(indice, nuevoNombre);
              break;

            case 2:
              let nuevaFechaLimite = prompt("Ingrese nueva fecha limite");
              modificarTarea(indice, undefined, nuevaFechaLimite);
              break;

            case 3:
              let nuevoNumeroCategoria = parseInt(
                prompt("Ingrese nuevo numero de categoria: ")
              );
              if (
                nuevoNumeroCategoria >= 0 &&
                nuevoNumeroCategoria < categorias.length
              ) {
                modificarTarea(
                  indice,
                  undefined,
                  undefined,
                  nuevoNumeroCategoria
                );
              }
              break;

            default:
              break;
          }
        } else {
          console.log("Indice de tarea incorrecto");
        }

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

      case 8:
        mostrarCategorias();
        let numeroCategoriaFiltrada = parseInt(
          prompt("Ingrese el numero de la categoria a filtrar")
        );
        let tareasCategoria = filtarTareasCategoria(numeroCategoriaFiltrada);
        console.log("Estas son las tareas de la Categoria Seleccionada: ");
        console.log(tareasCategoria);
        break;

      case 9:
        mostrarCategorias();
        let numCategoria = parseInt(
          prompt("Ingrese el numero de la catogria a visualizar: ")
        );
        contarTareasCompletadas(numCategoria);
        break;

      case 10:
        mostrarIncompletas();
        break;

      default:
        console.log("Opcion invalida");
        break;
    }
  }
}

interactuar();
