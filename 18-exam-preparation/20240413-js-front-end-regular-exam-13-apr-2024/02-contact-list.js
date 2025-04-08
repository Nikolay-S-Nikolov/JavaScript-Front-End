window.addEventListener("load", solve);

function solve() {
  let nameEl = document.getElementById('name');
  let phoneEl = document.getElementById('phone');
  let categoryEl = document.getElementById('category');

  let addBtnEl = document.getElementById('add-btn');

  let checkListEl = document.getElementById('check-list');
  let contactListEl = document.getElementById('contact-list');

  addBtnEl.addEventListener('click', (e) => {
    let [contactName, phone, category] = [nameEl.value, phoneEl.value, categoryEl.value];
    if (!contactName || !phone || !category) return;    

    let liEl = createElement('li', {}, checkListEl);
    let articleEl = createElement('article', {}, liEl);

    createElement('p', { textContent: `name:${contactName}` }, articleEl);
    createElement('p', { textContent: `phone:${phone}` }, articleEl);
    createElement('p', { textContent: `category:${category}` }, articleEl);

    let divEl = createElement('div', { className: 'buttons' }, liEl);
    let editBtnEl = createElement('button', { className: 'edit-btn' }, divEl);
    let saveBtnEl = createElement('button', { className: 'save-btn' }, divEl);

    [nameEl, phoneEl, categoryEl].forEach(x => x.value = '');

    editBtnEl.addEventListener('click', (e) => {
      [nameEl.value, phoneEl.value, categoryEl.value] = [contactName, phone, category];
      liEl.remove();
    })

    saveBtnEl.addEventListener('click', (e) => {
      divEl.remove();
      let newLiEl = liEl.cloneNode(true);
      liEl.remove();
      
      contactListEl.appendChild(newLiEl);
      let delBtnEl = createElement('button', { className: 'del-btn' }, newLiEl);

      delBtnEl.addEventListener('click', () => {
        newLiEl.remove();
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