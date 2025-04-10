let baseUrl = 'http://localhost:3030/jsonstore/records/';

let loadRecordsBtnEl = document.getElementById('load-records');
let addRecordBtnEl = document.getElementById('add-record');
let editRecordBtnEl = document.getElementById('edit-record');

let nameEl = document.getElementById('p-name');
let stepsEl = document.getElementById('steps');
let caloriesEl = document.getElementById('calories');

let editedId = '';

function loadRecordsData() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(showAllRecords)
        .catch(err => console.error(err));
}

function addRecordData(obj) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(loadRecordsData)
        .catch(err => console.error(err));
}

function updateRecordData(obj) {
    fetch(baseUrl + obj._id, {
        method: 'PUT',
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(loadRecordsData)
        .catch(err => console.error(err));
}

function deleteRecorddata(objId){
    fetch(baseUrl + objId, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(loadRecordsData)
        .catch(err => console.error(err));
}

function takeRecordData(e) {
    e.preventDefault();
    let [pName, steps, calories] = [nameEl.value, stepsEl.value, caloriesEl.value];
    if (!pName || !steps || !calories) return;

    let newRecord = { name: pName, steps, calories };
    addRecordData(newRecord);
    [nameEl, stepsEl, caloriesEl].forEach(el => el.value = '');
}

function showAllRecords(records) {
    let recordsListEl = document.getElementById('list');
    recordsListEl.innerHTML = '';

    Object.values(records).forEach(record => {
        let liEl = createElement('li', { className: 'record' }, recordsListEl);
        let divInfoEl = createElement('div', { className: 'info' }, liEl);

        createElement('p', { textContent: record.name }, divInfoEl);
        createElement('p', { textContent: record.steps }, divInfoEl);
        createElement('p', { textContent: record.calories }, divInfoEl);

        let buttonsDIvEl = createElement('div', { className: 'btn-wrapper' }, liEl);
        let changeBtnEl = createElement('button', { className: 'change-btn', textContent: 'Change' }, buttonsDIvEl);
        let deleteBtnEl = createElement('button', { className: 'delete-btn', textContent: 'Delete' }, buttonsDIvEl);

        changeBtnEl.addEventListener('click', () => {
            [nameEl.value, stepsEl.value, caloriesEl.value] = [record.name, record.steps, record.calories];
            editedId = record._id

            editRecordBtnEl.disabled = false;
            addRecordBtnEl.disabled = true;
            
            editRecordBtnEl.removeEventListener('click', editRecordData);
            editRecordBtnEl.addEventListener('click', editRecordData);

        });

        deleteBtnEl.addEventListener('click', (e) => {
            deleteRecorddata(record._id);
            recordsListEl.removeChild(liEl);
        });

    })
}

function editRecordData(e) {
    e.preventDefault();
    let [pName, steps, calories] = [nameEl.value, stepsEl.value, caloriesEl.value];
    if (!pName || !steps || !calories) return;

    let editedRecord = { name: pName, steps, calories, _id: editedId };
    updateRecordData(editedRecord);
    
    [nameEl, stepsEl, caloriesEl].forEach(el => el.value = '')
    editRecordBtnEl.disabled = true;
    addRecordBtnEl.disabled = false;
}

function createElement(tag, properties, container = null) {
    let newEl = document.createElement(tag);
    Object.assign(newEl, properties);
    if (container) container.appendChild(newEl);
    return newEl;
}

loadRecordsBtnEl.addEventListener('click', loadRecordsData);
addRecordBtnEl.addEventListener('click', takeRecordData);