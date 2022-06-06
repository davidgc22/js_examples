const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const direccion = document.querySelector('.direccion')
const btnAddTask = document.querySelector('.btn-agregar-tarea')

const listTask = document.querySelector('.listado-tareas')

const db = window.localStorage

btnAddTask.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }
    saveContact(db,contacto)
}
loadcontact(db)