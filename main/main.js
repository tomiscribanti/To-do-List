//declaro las variables de las fechas
const dateNumber = document.getElementById('dateNumber');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
const dateText = document.getElementById('dateText');

//declaro la variable de la lista
const tasksContainer = document.getElementById('tasksContainer');

//funcion de setear la fecha
const date = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', {day: 'numeric' });
    dateYear.textContent = date.toLocaleString('es', {year: 'numeric' });
    dateText.textContent = date.toLocaleString('es', {weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', {month: 'short' });
};

//tomo el valor del input
const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if (!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

//boton de ordenar

const order = () => {
    const toDo = [];
    const done = [];
    tasksContainer.childNodes.forEach(el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el);
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

date();