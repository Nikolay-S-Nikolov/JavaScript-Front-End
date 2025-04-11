window.addEventListener("load", solve);

function solve() {
    let previewLiistEl = document.getElementById('preview-list');
    let archiveLiistEl = document.getElementById('archive-list');

    let nameEl = document.getElementById('name');
    let timeEl = document.getElementById('time');
    let descriptionEl = document.getElementById('description');
    let addBtnEl = document.getElementById('add-btn');

    addBtnEl.addEventListener('click', (e) => {
        e.preventDefault();
        let [eventName, time, description] = [nameEl.value, timeEl.value, descriptionEl.value];
        if (!eventName || !time || !description) { return };

        let liEl = createElement('li', {}, previewLiistEl);
        let articleEl = createElement('article', {}, liEl);

        createElement('p', { textContent: eventName }, articleEl);
        createElement('p', { textContent: time }, articleEl);
        createElement('p', { textContent: description }, articleEl);


        let divEl = createElement('div', { className: 'buttons' }, liEl);
        let editBtnEl = createElement('button', { className: 'edit-btn', textContent: 'Edit' }, divEl);
        let nextBtnEl = createElement('button', { className: 'next-btn', textContent: 'Next' }, divEl);

        [nameEl, timeEl, descriptionEl].forEach(x => x.value = '');
        addBtnEl.setAttribute('disabled','');

        editBtnEl.addEventListener('click', () => {
            [nameEl.value, timeEl.value, descriptionEl.value] = [eventName, time, description];
            liEl.remove();

            addBtnEl.removeAttribute('disabled');
        })

        nextBtnEl.addEventListener('click', () => {
            previewLiistEl.removeChild(liEl);
            liEl.removeChild(divEl);
            archiveLiistEl.appendChild(liEl);
            
            let archiveBtnEl = createElement('button', { className: 'archive-btn', textContent: 'Archive' }, liEl);
            addBtnEl.removeAttribute('disabled');

            archiveBtnEl.addEventListener('click', () => archiveLiistEl.removeChild(liEl))
        })
    })

    function createElement(tag, properties, container = null) {
        let newEl = document.createElement(tag);
        Object.assign(newEl, properties);
        if (container) container.appendChild(newEl);
        return newEl;
    }
}