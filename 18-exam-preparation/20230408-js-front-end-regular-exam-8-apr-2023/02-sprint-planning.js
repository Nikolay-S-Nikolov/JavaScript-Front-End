window.addEventListener('load', solve);

function solve() {
    let labelMapper = {
        'Feature': '&#8865;',
        'Low Priority Bug': '&#9737;',
        'High Priority Bug': '&#9888;'
    };

    let labelClassMapper = {
        'Feature': 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority'
    };

    let createTaskBtn = document.getElementById('create-task-btn');
    let deleteTaskBtn = document.getElementById('delete-task-btn');

    let titleEl = document.getElementById('title');
    let descriptionEl = document.getElementById('description');
    let labelEl = document.getElementById('label');
    let pointsEl = document.getElementById('points');
    let assigneeEl = document.getElementById('assignee');

    let taskIdEl = document.getElementById('task-id');

    let tasksSectionEl = document.getElementById('tasks-section');
    let totalPoints = document.getElementById('total-sprint-points');
    let idCounter = 1;


    createTaskBtn.addEventListener('click', () => {
        let [title, description] = [titleEl.value, descriptionEl.value];
        let [label, points, assignee] = [labelEl.value, pointsEl.value, assigneeEl.value];

        if (!title.trim() || !description.trim() || !label.trim() || !points.trim() || !assignee.trim()) return;

        let articleEl = createElement('article', { id: `task-${idCounter++}`, className: 'task-card' }, tasksSectionEl);
        let divLable = createElement('div', { className: `task-card-label ${labelClassMapper[label]}` }, articleEl);
        divLable.innerHTML = `${label} ${labelMapper[label]}`;
        createElement('h3', { textContent: title, className: 'task-card-title' }, articleEl);
        createElement('p', { textContent: description, className: 'task-card-description' }, articleEl);
        createElement('div', { textContent: `Estimated at ${points} pts`, className: 'task-card-points' }, articleEl);
        createElement('div', { textContent: `Assigned to: ${assignee}`, className: 'task-card-assignee' }, articleEl);
        let actionEl = createElement('div', { className: 'task-card-actions' }, articleEl);
        let delBtnEl = createElement('button', { textContent: 'Delete' }, actionEl);

        clearContent();
        calculateToatalPoints();

        delBtnEl.addEventListener('click', delTaskEventListener);

        function delTaskEventListener(e) {
            [titleEl.value, descriptionEl.value] = [title, description];
            [labelEl.value, pointsEl.value, assigneeEl.value] = [label, points, assignee];

            createTaskBtn.disabled = true;
            deleteTaskBtn.disabled = false;

            [titleEl, descriptionEl, labelEl, pointsEl, assigneeEl].forEach((x) => {
                x.disabled = true;
            });

            taskIdEl.value = articleEl.id;
        }
    })

    deleteTaskBtn.addEventListener('click', (e) => {
        let elementToDelete = document.getElementById(taskIdEl.value);

        elementToDelete.remove();
        calculateToatalPoints();

        createTaskBtn.disabled = false;
        deleteTaskBtn.disabled = true;

        clearContent();

        [titleEl, descriptionEl, labelEl, pointsEl, assigneeEl, taskIdEl].forEach((x) => {
            x.disabled = false;
        });
    })

    function createElement(tag, properties = null, container = null) {
        let newEl = document.createElement(tag);

        if (properties) Object.assign(newEl, properties);

        if (container) container.appendChild(newEl);

        return newEl;
    }

    function calculateToatalPoints() {
        let pointsQuery = document.querySelectorAll('.task-card-points');
        let totalSum = 0;

        Array.from(pointsQuery).forEach((x) => {
            totalSum += Number(x.textContent.split(' ')[2]);
        })

        totalPoints.textContent = `Total Points ${totalSum}pts`;
    }

    function clearContent(){
        [titleEl, descriptionEl, labelEl, pointsEl, assigneeEl].forEach((x) => {
            x.value = '';
        });
    }
}