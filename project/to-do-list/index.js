let container = document.createElement('div');
container.id = 'todoContainer';
document.body.appendChild(container);

let form = document.createElement('form');
let input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Добавьте новую задачу';
form.appendChild(input);
let addButton = document.createElement('button');
addButton.innerText = 'Добавить';
form.appendChild(addButton);
container.appendChild(form);

let taskList = document.createElement('ul');
container.appendChild(taskList);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let taskText = input.value.trim();
    if (taskText !== '') {
        createTask(taskText);
        input.value = '';
    }
});

function createTask(taskText, completed = false) {
    let taskItem = document.createElement('li');
    let taskTextElement = document.createElement('p');
    taskTextElement.innerHTML = taskText;
    if (completed) {
        taskItem.classList.add('completed');
    }

    taskItem.draggable = true;

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Удалить';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
        saveTasks();
    });

    let completeButton = document.createElement('button');
    completeButton.innerText = 'Выполнено';
    completeButton.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
        saveTasks();
    });

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(completeButton);
    taskList.appendChild(taskItem);

    taskItem.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', taskText);
    });

    saveTasks();
}

function saveTasks() {
    let tasks = [];
    taskList.querySelectorAll('li').forEach(function(taskItem) {
        let taskTextElement = taskItem.querySelector('p');
        tasks.push({
            text: taskTextElement.innerText,
            completed: taskItem.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function(task) {
        createTask(task.text, task.completed);
    });
}

taskList.addEventListener('dragover', function(event) {
    event.preventDefault();
});

taskList.addEventListener('drop', function(event) {
    event.preventDefault();
    let draggedText = event.dataTransfer.getData('text/plain');
    let draggedItem = Array.from(taskList.children).find(item => item.querySelector('p').innerText === draggedText);
    let dropTarget = event.target.closest('li');
    if (draggedItem && dropTarget && draggedItem !== dropTarget) {
        taskList.insertBefore(draggedItem, dropTarget.nextSibling);
    }
    saveTasks();
});

window.addEventListener('load', loadTasks);
