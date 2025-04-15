window.addEventListener("load", solve);

function solve() {
    let eventEl = document.getElementById('event');
    let noteEl = document.getElementById('note');
    let dateEl = document.getElementById('date');

    let saveBtn = document.getElementById('save');
    let delBtn = document.querySelector('.btn.delete');

    let upcomingList = document.getElementById('upcoming-list');
    let eventsList = document.getElementById('events-list');

    function saveEvent() {
        let [event, note, date] = [eventEl.value, noteEl.value, dateEl.value];
        if (!event || !note || !date) return;

        let liEl = createElement('li', { className: 'event-item' }, upcomingList);
        let eventDiv = createElement('div', { className: 'event-container' }, liEl);
        let articleEl = createElement('article', {}, eventDiv);

        createElement('p', { textContent: `Name: ${event}` }, articleEl);
        createElement('p', { textContent: `Note: ${note}` }, articleEl);
        createElement('p', { textContent: `Date: ${date}` }, articleEl);

        let btnDiv = createElement('div', { className: 'buttons' }, eventDiv);
        let btnEditEl = createElement('button', { className: 'btn edit', textContent: 'Edit' }, btnDiv);
        let btnDoneEl = createElement('button', { className: 'btn done', textContent: 'Done' }, btnDiv);

        [eventEl, noteEl, dateEl].forEach(el => el.value = '');

        btnEditEl.addEventListener('click', () => editEvent(event, note, date, liEl));
        btnDoneEl.addEventListener('click', () => endEvent(liEl, articleEl));
    }

    function editEvent(event, note, date, elementLi) {
        [eventEl.value, noteEl.value, dateEl.value] = [event, note, date];
        upcomingList.removeChild(elementLi);
    }

    function endEvent(elLi, articleEl) {
        upcomingList.removeChild(elLi);
        elLi.innerHTML = '';

        elLi.appendChild(articleEl);
        eventsList.appendChild(elLi);
    }

    function createElement(tag, properties, container) {
        let newEl = document.createElement(tag);
        Object.assign(newEl, properties);
        if (container) container.appendChild(newEl);
        return newEl;
    }

    saveBtn.addEventListener('click', saveEvent);
    delBtn.addEventListener('click', () => eventsList.innerHTML = '');
}

