const tareas = [
    { id: 1, descripcion: "Llamar a papá", realizada: false },
    { id: 2, descripcion: "Pasear a Beto", realizada: false },
    { id: 3, descripcion: "Realizar el desafío TO DO List", realizada: true }
];

function render() {
    const listaDeTareas = document.querySelector("#tareas");
    listaDeTareas.innerHTML = ''; 

    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${tarea.id} - ${tarea.descripcion}</span>
            <input type="checkbox" ${tarea.realizada ? 'checked' : ''} onclick="cambiarEstadoTarea(${tarea.id})">
            <button onclick="borrarTarea(${tarea.id})">Eliminar</button>
        `;
        listaDeTareas.appendChild(li);
    });

    const cuentaTareas = document.querySelector("#cuenta-tareas");
    const cuentaTareasOk = document.querySelector("#cuenta-tareas-ok");
    cuentaTareas.textContent = tareas.length;
    cuentaTareasOk.textContent = tareas.filter(t => t.realizada).length;
}

function agregarTarea() {
    const tareaInput = document.querySelector("#nuevaTarea");
    const descripcion = tareaInput.value.trim();
    
    if (descripcion) {
        const nuevaTarea = {
            id: tareas.length + 1,  // ID secuencial basado en la longitud del arreglo
            descripcion: descripcion,
            realizada: false
        };
        tareas.push(nuevaTarea); 
        tareaInput.value = "";
        render();
    }
}

function agregarTareaInicio() {
    const tareaInput = document.querySelector("#nuevaTarea");
    const descripcion = tareaInput.value.trim();
    
    if (descripcion) {
        const nuevaTarea = {
            id: tareas.length + 1, 
            descripcion: descripcion,
            realizada: false
        };
        tareas.unshift(nuevaTarea); 
        tareaInput.value = "";
        render();
    }
}

const btnAgregar = document.querySelector("#agregarTarea");
btnAgregar.addEventListener("click", agregarTarea);

function cambiarEstadoTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.realizada = !tarea.realizada;  
        render();  
    }
}

function borrarTarea(id) {
    const index = tareas.findIndex(t => t.id === id);
    if (index !== -1) {
        tareas.splice(index, 1); 
        render();
    }
}

render();
