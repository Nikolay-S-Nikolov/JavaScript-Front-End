window.addEventListener('load', solve);

function solve() {
    let taskIdEl = document.getElementById('task-id');
    let titleEl = document.getElementById('title');
    let descriptionEl = document.getElementById('description');
    let labelEl = document.getElementById('label');
    let pointsEl = document.getElementById('points');
    let assigneeEl = document.getElementById('assignee');
    let createTaskBtnEl = document.getElementById('create-task-btn');
    let deleteTaskBtnEl = document.getElementById('delete-task-btn');

    let tasksSectionEl = document.getElementById('tasks-section');
    let totalSprintPointsEl = document.getElementById('total-sprint-points');
    let idCounter = 1;

    let labelToClassMap = {
        'Feature': 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority'
    }

    let labelToIcon = {
        'Feature': '&#8865;',
        'Low Priority Bug': '&#9737;',
        'High Priority Bug': '&#9888;'
    }

    createTaskBtnEl.addEventListener('click', () => {

        if (!titleEl.value || !descriptionEl.value || !labelEl.value || !pointsEl.value || !assigneeEl.value) return;
        let articleEl = document.createElement('article');
        articleEl.classList.add('task-card');
        articleEl.id = `task-${idCounter++}`;
        tasksSectionEl.appendChild(articleEl);


        let divLable = document.createElement('div');
        divLable.classList.add('task-card-label');
        divLable.classList.add(labelToClassMap[labelEl.value]);
        divLable.innerHTML = `${labelEl.value} ${labelToIcon[labelEl.value]}`;
        articleEl.appendChild(divLable);

        let titleH3 = document.createElement('h3');
        titleH3.classList.add('task-card-title');
        titleH3.textContent = titleEl.value;
        articleEl.appendChild(titleH3);

        let descriptionP = document.createElement('p');
        descriptionP.classList.add('task-card-description');
        descriptionP.textContent = descriptionEl.value;
        articleEl.appendChild(descriptionP);

        let divPoints = document.createElement('div');
        divPoints.classList.add('task-card-points');
        divPoints.textContent = `Estimated at ${pointsEl.value} pts`;
        articleEl.appendChild(divPoints);

        let divAssignee = document.createElement('div');
        divAssignee.classList.add('task-card-assignee');
        divAssignee.textContent = `Assigned to: ${assigneeEl.value}`;
        articleEl.appendChild(divAssignee);

        let divActions = document.createElement('div');
        divActions.classList.add('task-card-actions');
        articleEl.appendChild(divActions);

        let buttonDel = document.createElement('button');
        buttonDel.textContent = 'Delete';
        divActions.appendChild(buttonDel);

        clearContent();
        calculatePoints();

        buttonDel.addEventListener('click', (e) => {
            taskIdEl.value = e.target.parentElement.parentElement.id;
            titleEl.value = e.target.parentElement.parentElement.querySelector('.task-card-title').textContent;
            descriptionEl.value = e.target.parentElement.parentElement.querySelector('.task-card-description').textContent;

            let label = e.target.parentElement.parentElement.querySelector('.task-card-label').textContent.split(' ');
            label.pop();
            labelEl.value = label.join(' ');
            
            pointsEl.value = e.target.parentElement.parentElement.querySelector('.task-card-points').textContent.split(' ')[2];
            assigneeEl.value = e.target.parentElement.parentElement.querySelector('.task-card-assignee').textContent.replace('Assigned to: ', '');
            
            titleEl.setAttribute('disabled', '');
            descriptionEl.setAttribute('disabled', '');
            labelEl.setAttribute('disabled', '');
            pointsEl.setAttribute('disabled', '');
            assigneeEl.setAttribute('disabled', '');
            createTaskBtnEl.setAttribute('disabled', '');
            deleteTaskBtnEl.removeAttribute('disabled');
        })

        deleteTaskBtnEl.addEventListener('click', (e) => {
            elToDel = document.getElementById(taskIdEl.value);
            elToDel.remove();
            clearContent();
            titleEl.removeAttribute('disabled');
            descriptionEl.removeAttribute('disabled');
            labelEl.removeAttribute('disabled');
            pointsEl.removeAttribute('disabled');
            assigneeEl.removeAttribute('disabled');
            createTaskBtnEl.removeAttribute('disabled');
            deleteTaskBtnEl.setAttribute('disabled', '');
            calculatePoints();
        })

    })

    function clearContent() {
        titleEl.value = '';
        descriptionEl.value = '';
        labelEl.value = '';
        pointsEl.value = '';
        assigneeEl.value = '';
    }

    function calculatePoints() {
        let totlaPoints = 0;
        let pointsEls = document.querySelectorAll('.task-card-points');
        Array.from(pointsEls).forEach((ele) => {
            let curPoints = ele.textContent.split(' ')[2];
            totlaPoints += Number(curPoints);
        });

        totalSprintPointsEl.textContent = `Total Points ${totlaPoints}pts`;
    }
}

