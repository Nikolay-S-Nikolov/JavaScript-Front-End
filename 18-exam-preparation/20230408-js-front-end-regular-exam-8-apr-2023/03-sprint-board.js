let loadBoardBtn = document.getElementById('load-board-btn');
let createTaskBtn = document.getElementById('create-task-btn');
let todoSectionUlEl = document.querySelector('#todo-section ul');
let inProgressSectionUlEl = document.querySelector('#in-progress-section ul');
let codeReviewSectionUlEl = document.querySelector('#code-review-section ul');
let doneSectionUlEl = document.querySelector('#done-section ul');

let titleEl = document.getElementById('title');
let descriptionEl = document.getElementById('description');


let baseUrl = 'http://localhost:3030/jsonstore/tasks/';

let sectionsTaskMapper = {
    'ToDo': todoSectionUlEl,
    'In Progress': inProgressSectionUlEl,
    'Code Review': codeReviewSectionUlEl,
    'Done': doneSectionUlEl
};

let buttonNameMapper = {
    'ToDo': 'Move to In Progress',
    'In Progress': 'Move to Code Review',
    'Code Review': 'Move to Done',
    'Done': 'Close'
};

function delTask(taskToDel, currentId) {
    fetch(baseUrl + currentId, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(() => {
            Object.values(sectionsTaskMapper).forEach((x) => {
                x.replaceChildren();
            })
            loadBoardEventListener();
            taskToDel.remove();
        })
        .catch(err => console.error(err))
}

function changeTaskStatus(statusObj, currentId) {
    fetch(baseUrl + currentId, {
        method: 'PATCH',
        body: JSON.stringify(statusObj)
    })
        .then(res => res.json())
        .then(() => {
            Object.values(sectionsTaskMapper).forEach((x) => {
                x.replaceChildren();
            })
            loadBoardEventListener();

        })
        .catch(err => console.error(err))
}

function createTask(taskObject) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(taskObject)
    })
        .then(res => res.json())
        .then(() => {
            [titleEl, descriptionEl].forEach((x) => {
                x.value = '';
            });

            Object.values(sectionsTaskMapper).forEach((x) => {
                x.replaceChildren();
            })

            loadBoardEventListener();
        })
        .catch(err => console.error(err))
}

function loadBoardEventListener() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(showLoadedTasks)
        .catch(err => console.error(err))
}

function attachEvents() {
    loadBoardBtn.addEventListener('click', loadBoardEventListener);
    createTaskBtn.addEventListener('click', createTaskEventListener);
}

function createTaskEventListener() {
    let [title, description] = [titleEl.value, descriptionEl.value];
    let newTask = { title, description, 'status': 'ToDo' };
    
    [titleEl, descriptionEl].forEach((x) => x.value = '');
    createTask(newTask);
}

function showLoadedTasks(tasks) {
    Object.values(tasks).forEach((task) => {
        let taskLiEL = createElement('li', { className: 'task', id: task._id }, sectionsTaskMapper[task.status]);

        createElement('h3', { textContent: task.title }, taskLiEL);
        createElement('p', { textContent: task.description }, taskLiEL);

        let moveToBtnEL = createElement('button', { textContent: buttonNameMapper[task.status] }, taskLiEL);

        moveToBtnEL.addEventListener('click', (e) => {
            let buttonText = e.target.textContent;

            if (buttonText != 'Close') {
                let taskId = e.target.parentElement.id;
                let newStatus = buttonText.replace('Move to ', '');
                let statusToChange = { 'status': newStatus };

                changeTaskStatus(statusToChange, taskId);
            } else {
                let itemToDel = e.target.parentElement;
                delTask(itemToDel, itemToDel.id);
            }
        })
    })
}

function createElement(tag, properties = null, container = null) {
    let newEl = document.createElement(tag);
    if (properties) Object.assign(newEl, properties);
    if (container) container.appendChild(newEl);
    return newEl;
}

attachEvents();

