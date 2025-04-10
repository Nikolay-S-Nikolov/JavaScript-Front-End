window.addEventListener("load", solve);

function solve() {
    let typeEl = document.getElementById('type');
    let ageEl = document.getElementById('age');
    let genderEl = document.getElementById('gender');

    let adoptBtnEl = document.getElementById('adopt-btn');

    let adoptionInfoEl = document.getElementById('adoption-info');
    let adoptedListEl = document.getElementById('adopted-list');


    function addPetEventListener(e) {
        e.preventDefault();
        let [type, age, gender] = [typeEl.value, ageEl.value, genderEl.value];
        if (!type || !age || !gender) return;

        let liEl = createElement('li', {}, adoptionInfoEl);
        let articleEl = createElement('article', {}, liEl);

        createElement('p', { textContent: `Pet:${type}` }, articleEl);
        createElement('p', { textContent: `Gender:${gender}` }, articleEl);
        createElement('p', { textContent: `Age:${age}` }, articleEl);

        let buttonsDivEl = createElement('div', { className: 'buttons' }, liEl);
        let editBtnEl = createElement('button', { className: 'edit-btn', textContent: 'Edit' }, buttonsDivEl);
        let doneBtnEl = createElement('button', { className: 'done-btn', textContent: 'Done' }, buttonsDivEl);

        [typeEl, ageEl, genderEl].forEach(el => el.value = '');

        function editPetEventListener() {
            [typeEl.value, ageEl.value, genderEl.value] = [type, age, gender];
            liEl.remove();
        }

        function finishAdoptionEventListener() {
            adoptionInfoEl.removeChild(liEl);
            liEl.removeChild(buttonsDivEl);

            let clearBtnEl = createElement('button', { className: 'clear-btn', textContent: 'Clear' }, liEl);
            adoptedListEl.appendChild(liEl);

            clearBtnEl.addEventListener('click', () => {
                adoptedListEl.removeChild(liEl);
            })
        }

        editBtnEl.addEventListener('click', editPetEventListener);
        doneBtnEl.addEventListener('click', finishAdoptionEventListener);
    }

    function createElement(tag, properties, container = null) {
        let newEl = document.createElement(tag);
        Object.assign(newEl, properties);
        if (container) container.appendChild(newEl);
        return newEl;
    }

    adoptBtnEl.addEventListener('click', addPetEventListener);
}