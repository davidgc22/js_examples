const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMont');
const dateYear = document.getElementById('dateYear');

const taskContainer = document.getElementById('tasksContainer');

const setdate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es-MX', { day: 'numeric'});
    dateText.textContent = date.toLocaleString('es-MX', { weekday: 'long'});
    dateMonth.textContent = date.toLocaleString?.('es-MX', { month: 'long'});
    dateYear.textContent = date.toLocaleString('es-MX', { year: 'numeric'});

}
const addNewTask = event => {
    event.preventDefault();
    const {value} = event.target.TaskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};
const changeTaskState = event => {
    event.target.classList.toggle('done');
};
const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach(ele=> {
        ele.classList.contains('done') ? done.push(ele) : toDo.push(ele)
    });
    return [...toDo, ...done];
}
const renderOrderedTask = () => {
    order().forEach(ele => tasksContainer.appendChild(ele));
}

setdate();