const baseUrl = 'http://localhost:3030/jsonstore/appointments/';

let carModelEl = document.getElementById('car-model');
let carServicelEl = document.getElementById('car-service');
let dateEl = document.getElementById('date');

let addAppointmentBtnEl = document.getElementById('add-appointment');
let editAppointmentBtnEl = document.getElementById('edit-appointment');

let editedId = null;

async function loadAllData() {
    let res = await fetch(baseUrl);
    let data = await res.json();
    return Object.values(data);
}

async function createData(obj) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };
    await fetch(baseUrl, options);
}

async function updateData(obj) {
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };
    await fetch(baseUrl + obj._id, options);
}

async function deleteData(objId) {
    const options = {
        method: 'DELETE',
    };
    await fetch(baseUrl + objId, options);
}

async function loadAllAppointments() {
    let appointments = await loadAllData();

    let appointmentsList = document.getElementById('appointments-list');
    appointmentsList.innerHTML = '';
    appointments.forEach((appointment) => {
        let liEl = createElement('li', { className: 'appointment' }, appointmentsList);

        createElement('h2', { textContent: appointment.model }, liEl);
        createElement('h3', { textContent: appointment.date }, liEl);
        createElement('h3', { textContent: appointment.service }, liEl);

        let divEl = createElement('div', { className: 'buttons-appointment' }, liEl);
        let changeBtnEl = createElement('button', { className: 'change-btn', textContent: 'Change' }, divEl);
        let deleteBtnEl = createElement('button', { className: 'delete-btn', textContent: 'Delete' }, divEl);

        changeBtnEl.addEventListener('click', () => changeApointment(appointment, liEl));
        deleteBtnEl.addEventListener('click', () => deleteApointment(appointment._id));
    })
}

async function addApointment() {
    let [model, service, date] = [carModelEl.value, carServicelEl.value, dateEl.value];
    if (!model || !service || !date) return;

    await createData({ model, service, date });
    [carModelEl, carServicelEl, dateEl].forEach(el => el.value = '');
    await loadAllAppointments();
}

async function changeApointment(appointment, liEl) {
    editedId = appointment._id;
    liEl.remove();
    [carModelEl.value, carServicelEl.value, dateEl.value] = [appointment.model, appointment.service, appointment.date];
    editAppointmentBtnEl.removeAttribute('disabled');
    addAppointmentBtnEl.setAttribute('disabled', '');
}

async function editApointment() {
    let [model, service, date] = [carModelEl.value, carServicelEl.value, dateEl.value];
    if (!model || !service || !date) return;

    await updateData({ model, service, date, _id: editedId });
    [carModelEl, carServicelEl, dateEl].forEach(el => el.value = '');
    addAppointmentBtnEl.removeAttribute('disabled');
    editAppointmentBtnEl.setAttribute('disabled', '');
    await loadAllAppointments();
}

async function deleteApointment(delId) {
    await deleteData(delId);
    await loadAllAppointments();
}

function createElement(tag, properties, container) {
    let el = document.createElement(tag);
    Object.assign(el, properties);
    if (container) container.appendChild(el);
    return el;
}


document.getElementById('load-appointments').addEventListener('click', loadAllAppointments);
addAppointmentBtnEl.addEventListener('click', addApointment);
editAppointmentBtnEl.addEventListener('click', editApointment);