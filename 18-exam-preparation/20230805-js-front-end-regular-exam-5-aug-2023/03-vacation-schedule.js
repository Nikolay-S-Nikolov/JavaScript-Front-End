let baseUrl = 'http://localhost:3030/jsonstore/tasks/'
let vacationListEl = document.getElementById('list');
let loadVacationsBtn = document.getElementById('load-vacations');

let addVacation = document.getElementById('add-vacation');
let editVacation = document.getElementById('edit-vacation');

let nameEl = document.getElementById('name');
let numDaysEl = document.getElementById('num-days');
let fromDateEl = document.getElementById('from-date');

function delteVacationData(delId) {
    fetch(baseUrl + delId, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(() => {
            loadVacationData();
        })
        .catch(error => console.error('Error:', error));
}

function editVacationData(edietedVacation, vacId) {
    fetch(baseUrl + vacId, {
        method: 'PUT',
        body: JSON.stringify(edietedVacation)
    })
        .then(res => res.json())
        .then(() => {
            clearInputFields();
            loadVacationData();
        })
        .catch(error => console.error('Error:', error));
}

function loadVacationData() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(showAllVacations)
        .catch(error => console.error('Error:', error));
}

function addVacationData(newVacation) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(newVacation)
    })
        .then(res => res.json())
        .then(() => {
            loadVacationData();            
        })
        .catch(error => console.error('Error:', error));
}


function takeVacationData(e) {
    e.preventDefault();

    let [name, days, date] = [nameEl.value, numDaysEl.value, fromDateEl.value];
    if (!name || !days || !date) return;
    let newVacation = { name, days, date };

    clearInputFields();
    addVacationData(newVacation);
}

function showAllVacations(vacations) {
    vacationListEl.innerHTML = '';

    Object.values(vacations).forEach((vaction) => {
        let divEl = createElement('div', { className: 'container', id: vaction._id }, vacationListEl);
        createElement('h2', { textContent: vaction.name }, divEl);
        createElement('h3', { textContent: vaction.date }, divEl);
        createElement('h3', { textContent: vaction.days }, divEl);
        let changeBtnEl = createElement('button', { className: 'change-btn', textContent: 'Change' }, divEl);
        let doneBtnEl = createElement('button', { className: 'done-btn', textContent: 'Done' }, divEl);

        changeBtnEl.addEventListener('click', () => {
            divEl.remove();
            [nameEl.value, numDaysEl.value, fromDateEl.value] = [vaction.name, vaction.days, vaction.date];

            addVacation.setAttribute('disabled', '');
            editVacation.removeAttribute('disabled');
            editVacation.classList.add(vaction._id);

            editVacation.addEventListener('click', (e) => {
                e.preventDefault();

                let [name, days, date] = [nameEl.value, numDaysEl.value, fromDateEl.value];
                let chnagedVacation = { name, days, date, _id: vaction._id };
                
                editVacation.setAttribute('disabled', '');
                addVacation.removeAttribute('disabled');
                editVacationData(chnagedVacation, vaction._id);
            })
        });

        doneBtnEl.addEventListener('click', (e) => {
            delteVacationData(vaction._id);
        });
    })

}

function createElement(tag, properties, container = null) {
    let newEl = document.createElement(tag);
    Object.assign(newEl, properties);
    if (container) container.appendChild(newEl);
    return newEl;
}

function clearInputFields() {
    [nameEl, numDaysEl, fromDateEl].forEach(x => x.value = '');
}

addVacation.addEventListener('click', takeVacationData)
loadVacationsBtn.addEventListener('click', loadVacationData)

