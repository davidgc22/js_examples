const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

const taskContainer = document.getElementById('tasksContainer');

const setdate = () => {
    const fecha = new Date();
    dateNumber.textContent = fecha.toLocaleString('es', { day: 'numeric'});
    dateText.textContent = fecha.toLocaleString('es', { weekday: 'log'});
    dateMonth.textContent = fecha.toLocaleString('es', { month: 'short'});
    dateYear.textContent = fecha.toLocaleString('es', { year: 'numeric'});

}
setdate();