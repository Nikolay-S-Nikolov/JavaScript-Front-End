
let baseUrl = 'http://localhost:3030/jsonstore/collections/students';

function loadData() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(populateTable)
        .catch(err => console.error(err))
}

function createNewStudent(student) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(student)
    })
        .then(() => window.location.reload())
        .catch(err => console.error(err))
}


function formSubmitEventListener(event) {
    event.preventDefault();
    innerElements = event.target.elements;

    let firstName = innerElements.firstName.value;
    let lastName = innerElements.lastName.value;
    let facultyNumber = innerElements.facultyNumber.value;
    let grade = innerElements.grade.value;

    if (!firstName || !lastName || !facultyNumber || !grade) return;
    createNewStudent({ firstName, lastName, facultyNumber, grade });
}

function populateTable(students) {
    let tbodyEl = document.querySelector('tbody');

    Object.keys(students).forEach((studentId => {
        let trEl = createElement('tr', { id: studentId }, tbodyEl);
        let { firstName, lastName, facultyNumber, grade } = students[studentId];

        createElement('td', { textContent: firstName }, trEl);
        createElement('td', { textContent: lastName }, trEl);
        createElement('td', { textContent: facultyNumber }, trEl);
        createElement('td', { textContent: Number(grade).toFixed(2) }, trEl);
    }))
}

function createElement(tag, properties, conteiner = null) {
    let newEl = document.createElement(tag);

    Object.keys(properties).forEach((key) => {
        if (properties[key] === 'object') {
            Object.assign(newEl.dataset, properties[key]);
        } else {
            newEl[key] = properties[key];
        }
    })

    if (conteiner) conteiner.append(newEl);
    return newEl
}

document.getElementById('form').addEventListener('submit', formSubmitEventListener);

loadData();