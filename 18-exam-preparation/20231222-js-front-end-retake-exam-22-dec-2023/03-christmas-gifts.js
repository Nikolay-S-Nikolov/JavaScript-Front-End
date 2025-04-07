let baseUrl = 'http://localhost:3030/jsonstore/gifts/';

let loadPresentsBtnEl = document.getElementById('load-presents');
let addPresentsBtnEl = document.getElementById('add-present');
let editPresentsBtnEl = document.getElementById('edit-present');

let giftEl = document.getElementById('gift');
let forEl = document.getElementById('for');
let priceEl = document.getElementById('price');

let giftListEl = document.getElementById('gift-list');

let objId;

function loadAllpresentsData() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(showAllpresents)
        .catch(err => console.error(err));
}

function addNewPresentData(obj) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(loadAllpresentsData)
        .catch(err => console.error(err));
}

function updatePresentData(updatedObj) {
    fetch(baseUrl + updatedObj._id, {
        method: 'PUT',
        body: JSON.stringify(updatedObj)
    })
        .then(res => res.json())
        .then(() => {
            loadAllpresentsData();

        })
        .catch(err => console.error(err));
}

function delPresentData(delId) {
    fetch(baseUrl + delId, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(loadAllpresentsData)
        .catch(err => console.error(err));
}

function addPresentEventListener(e) {
    let [gift, forValue, price] = [giftEl.value, forEl.value, priceEl.value];
    if (!gift || !forValue || !price) return;

    let newPresent = { gift, for: forValue, price };
    [giftEl, forEl, priceEl].forEach((x) => x.value = '');

    addNewPresentData(newPresent);
}

function showAllpresents(presents) {
    giftListEl.innerHTML = '';

    Object.values(presents).forEach((present) => {
        let mainDivEl = createElement('div', { className: 'gift-sock' }, giftListEl);
        let contentDivEl = createElement('div', { className: 'content' }, mainDivEl);

        createElement('p', { textContent: present.gift }, contentDivEl);
        createElement('p', { textContent: present.for }, contentDivEl);
        createElement('p', { textContent: present.price }, contentDivEl);

        let btnsDivEl = createElement('div', { className: 'buttons-container' }, mainDivEl);
        let changeBtnEl = createElement('button', { className: 'change-btn', textContent: 'Change' }, btnsDivEl);
        let deleteBtnEl = createElement('button', { className: 'delete-btn', textContent: 'Delete' }, btnsDivEl);

        changeBtnEl.addEventListener('click', (e) => {
            editPresentsBtnEl.removeAttribute('disabled');
            addPresentsBtnEl.setAttribute('disabled', '');

            [giftEl.value, forEl.value, priceEl.value] = [present.gift, present.for, present.price];
            mainDivEl.remove();
            objId = present._id;

            editPresentsBtnEl.removeEventListener('click', editPresentsEventListener);
            editPresentsBtnEl.addEventListener('click', editPresentsEventListener);
        })

        deleteBtnEl.addEventListener('click', (e) => {
            mainDivEl.remove();
            delPresentData(present._id);
        });
    });
}

function editPresentsEventListener() {
    if (!giftEl.value || !forEl.value || !priceEl.value) return;


    let editedPresent = {
        gift: giftEl.value,
        for: forEl.value,
        price: priceEl.value,
        _id: objId
    };

    [giftEl, forEl, priceEl].forEach((x) => x.value = '');
    addPresentsBtnEl.removeAttribute('disabled');
    editPresentsBtnEl.setAttribute('disabled', '');

    updatePresentData(editedPresent);
}

function createElement(tag, properties, container = null) {
    let newEl = document.createElement(tag);
    Object.assign(newEl, properties);
    if (container) container.appendChild(newEl);
    return newEl;
}

loadPresentsBtnEl.addEventListener('click', loadAllpresentsData);
addPresentsBtnEl.addEventListener('click', addPresentEventListener);
