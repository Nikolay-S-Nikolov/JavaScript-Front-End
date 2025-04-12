window.addEventListener("load", solve);

function solve() {
  const checkListEl = document.getElementById('check-list');
  const laptopsListEl = document.getElementById('laptops-list');

  const laptopModelEl = document.getElementById('laptop-model');
  const storageEl = document.getElementById('storage');
  const priceEl = document.getElementById('price');

  const addBtnEl = document.getElementById('add-btn');
  const clearBtnEl = document.querySelector('.btn.clear');

  function addLaptop(ev) {
    ev.preventDefault();
    let [model, storage, price] = [laptopModelEl.value, storageEl.value, priceEl.value];
    if (!model || !storage || !price) return;

    let liEl = createElement('li', { className: 'laptop-item' }, checkListEl);
    let articleEl = createElement('article', {}, liEl);

    createElement('p', { textContent: model }, articleEl);
    createElement('p', { textContent: 'Memory: ' + storage +' TB' }, articleEl);
    createElement('p', { textContent: 'Price: ' + price+'$' }, articleEl);

    let btnEditEl = createElement('button', { className: 'btn edit', textContent: 'edit' }, liEl);
    let btnOkEl = createElement('button', { className: 'btn ok', textContent: 'ok' }, liEl);

    [laptopModelEl, storageEl, priceEl].forEach(el => el.value = '');
    addBtnEl.setAttribute('disabled', '');

    btnEditEl.addEventListener('click', () => editLaptop(model, storage, price,liEl));
    btnOkEl.addEventListener('click', () => laptopTowishLIst(liEl,articleEl));
  }

  function laptopTowishLIst(liEl,articleEl){
    liEl.innerHTML = '';
    liEl.appendChild(articleEl);
    laptopsListEl.appendChild(liEl);
    addBtnEl.removeAttribute('disabled');
  }

  function editLaptop(model, storage, price,liEl){
    [laptopModelEl.value, storageEl.value, priceEl.value]= [model, storage, price];
    addBtnEl.removeAttribute('disabled');
    liEl.remove();
  }

  function createElement(tab, properties, container) {
    let el = document.createElement(tab);
    Object.assign(el, properties);
    if (container) container.appendChild(el);
    return el;
  }

  addBtnEl.addEventListener('click', addLaptop);
  clearBtnEl.addEventListener('click', ()=>location.reload());
}
