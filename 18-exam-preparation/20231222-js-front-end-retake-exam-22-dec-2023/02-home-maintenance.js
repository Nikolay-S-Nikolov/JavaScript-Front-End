window.addEventListener("load", solve);

function solve() {
    let placeEl = document.getElementById('place');
    let actionEl = document.getElementById('action');
    let personEl = document.getElementById('person');
    let addBtnEl = document.getElementById('add-btn');

    let taskListUl = document.getElementById('task-list');
    let doneListUl = document.getElementById('done-list');

    addBtnEl.addEventListener('click', (e) => {
        let [place, action, person] = [placeEl.value, actionEl.value, personEl.value];
        if (!place || !action || !person) return;

        let liEl = createElement('li', { className: 'clean-task' }, taskListUl);
        let articleEl = createElement('article', {}, liEl);

        createElement('p', { textContent: `Place:${place}` }, articleEl);
        createElement('p', { textContent: `Action:${action}` }, articleEl);
        createElement('p', { textContent: `Person:${person}` }, articleEl);

        let divEl = createElement('div', { className: 'buttons' }, liEl);
        let editBtnEl = createElement('button', { className: 'edit', textContent: 'Edit' }, divEl);
        let doneBtnEl = createElement('button', { className: 'done', textContent: 'Done' }, divEl);

        [placeEl, actionEl, personEl].forEach((x) => x.value = '');

        editBtnEl.addEventListener('click', () => {
            [placeEl.value, actionEl.value, personEl.value] = [place, action, person];
            liEl.remove()
        })

        doneBtnEl.addEventListener('click', () => {
            divEl.remove();
            let clonedLi = liEl.cloneNode(true);
            liEl.remove();
            
            let delBtnEl = createElement('button', { className: 'delete', textContent: 'Delete' }, clonedLi);
            doneListUl.appendChild(clonedLi);

            delBtnEl.addEventListener('click', () => {
                clonedLi.remove();
            })
        })
    })

    function createElement(tag, properties, container = null) {
        let newEl = document.createElement(tag);
        Object.assign(newEl, properties);
        if (container) container.appendChild(newEl);
        return newEl;
    }
}