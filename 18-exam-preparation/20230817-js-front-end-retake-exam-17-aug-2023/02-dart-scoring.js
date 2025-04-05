window.addEventListener("load", solve);

function solve() {
  let playerEl = document.getElementById('player');
  let scoreEl = document.getElementById('score');
  let roundEl = document.getElementById('round');
  let addBtnEL = document.getElementById('add-btn');

  let sureList = document.getElementById('sure-list');
  let scoreboardList = document.getElementById('scoreboard-list');

  let btnClearEl = document.querySelector('.btn.clear');

  
  btnClearEl.addEventListener('click',()=>location.reload())

  addBtnEL.addEventListener('click', (e) => {
    let [player, score, round] = [playerEl.value, scoreEl.value, roundEl.value];
    if (!player || !score || !round) return;

    let liEl = createElement('li', { className: 'dart-item' }, sureList);

    let articleEl = createElement('article', {}, liEl);
    createElement('p', { textContent: player }, articleEl);
    createElement('p', { textContent: `Score: ${score}` }, articleEl);
    createElement('p', { textContent: `Round: ${round}` }, articleEl);
    let btnEditEl = createElement('button', { className: 'btn edit', textContent: 'edit' }, liEl);
    let btnOkEl = createElement('button', { className: 'btn ok', textContent: 'ok' }, liEl);

    addBtnEL.setAttribute('disabled', '');
    [playerEl, scoreEl, roundEl].forEach((x) => x.value = '');

    btnEditEl.addEventListener('click', (e) => {
      [playerEl.value, scoreEl.value, roundEl.value] = [player, score, round];
      addBtnEL.removeAttribute('disabled');
      liEl.remove();
    })

    btnOkEl.addEventListener('click', (e) => {
      let newliEl = createElement('li', { className: 'dart-item' }, scoreboardList);

      let articleElList = articleEl.cloneNode(true);
      newliEl.appendChild(articleElList);

      liEl.remove();
      addBtnEL.removeAttribute('disabled');
    })
  })

  function createElement(tag, properties, container = null) {
    let newEl = document.createElement(tag);
    Object.assign(newEl, properties);
    if (container) container.appendChild(newEl);
    return newEl;
  }
}