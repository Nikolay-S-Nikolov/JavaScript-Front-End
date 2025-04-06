let baseUrl = 'http://localhost:3030/jsonstore/tasks/';

let listHistoryEl = document.getElementById('list');
let loadHistoryBtnEl = document.getElementById('load-history');

let locationEl = document.getElementById('location');
let temperatureEl = document.getElementById('temperature');
let dateEl = document.getElementById('date');
let addWeatherBtn = document.getElementById('add-weather');
let editWeatherBtn = document.getElementById('edit-weather');

let objId;

function getHistoryData() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(showHistory)
        .catch(error => console.error('Error:', error));
}

function addWeaterData(newData) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(newData)
    })
        .then(res => res.json())
        .then(getHistoryData)
        .catch(error => console.error('Error:', error));
}

function editWeatherData(dataToEdit) {
    fetch(baseUrl + dataToEdit._id, {
        method: 'PUT',
        body: JSON.stringify(dataToEdit)
    })
        .then(res => res.json())
        .then(getHistoryData)
        .catch(error => console.error('Error:', error));
}

function delWeatherData(dataId) {
    fetch(baseUrl + dataId, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(getHistoryData)
        .catch(error => console.error('Error:', error));
}

function addWeaterEventListener(e) {
    let [location, temperature, date] = [locationEl.value, temperatureEl.value, dateEl.value];
    if (!location || !temperature || !date) return;

    let newWeater = { location, temperature, date };
    [locationEl, temperatureEl, dateEl].forEach((x) => x.value = '');

    addWeaterData(newWeater);
}

function showHistory(history) {
    listHistoryEl.innerHTML = '';

    Object.values(history).forEach((city) => {
        let divEl = createElement('div', { className: 'container' }, listHistoryEl);

        createElement('h2', { textContent: city.location }, divEl);
        createElement('h3', { textContent: city.date }, divEl);
        createElement('h3', { textContent: city.temperature, id: 'celsius' }, divEl);
        let buttonsDivEl = createElement('div', { id: 'buttons-container' }, divEl);

        let changeBtnEl = createElement('button', { className: 'change-btn', textContent: 'Change' }, buttonsDivEl);
        let deleteBtnEl = createElement('button', { className: 'delete-btn', textContent: 'Delete' }, buttonsDivEl);

        changeBtnEl.addEventListener('click', () => {
            [locationEl.value, temperatureEl.value, dateEl.value] = [city.location, city.temperature, city.date];
            listHistoryEl.removeChild(divEl);

            addWeatherBtn.setAttribute('disabled', '');
            editWeatherBtn.removeAttribute('disabled');
            objId = city._id;

            editWeatherBtn.removeEventListener('click', editWeatherEventListener);
            editWeatherBtn.addEventListener('click', editWeatherEventListener);
        });

        deleteBtnEl.addEventListener('click', () => {
            divEl.remove();
            delWeatherData(city._id);
        });
    });
}

function editWeatherEventListener() {
    if (!locationEl.value || !temperatureEl.value || !dateEl.value) return;

    editWeatherBtn.setAttribute('disabled', '');
    addWeatherBtn.removeAttribute('disabled');

    editWeatherData(
        {
            location: locationEl.value,
            temperature: temperatureEl.value,
            date: dateEl.value,
            _id: objId
        });

    [locationEl, temperatureEl, dateEl].forEach((x) => x.value = '');
}

function createElement(tag, properties, container = null) {
    let newEl = document.createElement(tag);
    Object.assign(newEl, properties);
    if (container) container.appendChild(newEl);
    return newEl;
}

addWeatherBtn.addEventListener('click', addWeaterEventListener);
loadHistoryBtnEl.addEventListener('click', getHistoryData);