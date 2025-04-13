let baseUrl = 'http://localhost:3030/jsonstore/workout/'

let workoutEl = document.getElementById('workout');
let locationEl = document.getElementById('location');
let dateEl = document.getElementById('date');

let addWorkoutBtn = document.getElementById('add-workout');
let editWorkoutBtn = document.getElementById('edit-workout');

let editId = null;

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

async function loadWorkout() {
    let workouts = await loadAllData();

    let workoutListEl = document.getElementById('list');
    workoutListEl.innerHTML = '';
    workouts.forEach((workout) => {
        let divEl = createElement('div', { className: 'container' }, workoutListEl);

        createElement('h2', { textContent: workout.workout }, divEl);
        createElement('h3', { textContent: workout.date }, divEl);
        createElement('h3', { textContent: workout.location, id: 'location' }, divEl);

        let divBtnsEl = createElement('div', { id: 'buttons-container' }, divEl);
        let changeBtnEl = createElement('button', { className: 'change-btn', textContent: 'Change' }, divBtnsEl);
        let deleteBtnEl = createElement('button', { className: 'delete-btn', textContent: 'Done' }, divBtnsEl);

        changeBtnEl.addEventListener('click', () => changeWorkout(workout, divEl));
        deleteBtnEl.addEventListener('click', () => deleteWorkout(workout._id));
    })
}

async function addWorkout() {
    let [workout, location, date] = [workoutEl.value, locationEl.value, dateEl.value];
    if (!workout || !location || !date) return;

    await createData({ workout, location, date });
    [workoutEl, locationEl, dateEl].forEach(ele => ele.value = '');
    await loadWorkout();
}

function changeWorkout(workout, divEl) {
    [workoutEl.value, locationEl.value, dateEl.value] = [workout.workout, workout.location, workout.date];
    editId = workout._id;

    divEl.remove();
    addWorkoutBtn.setAttribute('disabled', '');
    editWorkoutBtn.removeAttribute('disabled');
}

async function editWorkout() {
    let [workout, location, date] = [workoutEl.value, locationEl.value, dateEl.value];
    if (!workout || !location || !date) return;

    await updateData({workout, location, date, _id:editId});

    [workoutEl, locationEl, dateEl].forEach(ele => ele.value = '');
    editWorkoutBtn.setAttribute('disabled', '');
    addWorkoutBtn.removeAttribute('disabled');

    await loadWorkout();
}

async function deleteWorkout(delId) {
    await deleteData(delId);
    await loadWorkout();
}

function createElement(tag, properties, container) {
    let el = document.createElement(tag);
    Object.assign(el, properties);
    if (container) container.appendChild(el);
    return el;
}

document.getElementById('load-workout').addEventListener('click', loadWorkout);
addWorkoutBtn.addEventListener('click', addWorkout);
editWorkoutBtn.addEventListener('click', editWorkout);