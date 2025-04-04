window.addEventListener("load", solve);

function solve() {
  let studentEl = document.getElementById('student');
  let universityEl = document.getElementById('university');
  let scoreEl = document.getElementById('score');
  let nextBtnEl = document.getElementById('next-btn');

  let previewListEl = document.getElementById('preview-list');
  let candidatesListEl = document.getElementById('candidates-list');

  nextBtnEl.addEventListener('click', (e) => {
    let [student, university, score] = [studentEl.value, universityEl.value, scoreEl.value];
    if (!student || !university || !score) return;

    let liEl = createElement('li', { className: 'application' }, previewListEl);
    let articleEl = createElement('article', {}, liEl);
    createElement('h4', { textContent: student }, articleEl);
    createElement('p', { textContent: `University: ${university}` }, articleEl);
    createElement('p', { textContent: `Score: ${score}` }, articleEl);
    let actionBtnEdit = createElement('button', { className: 'action-btn edit', textContent: 'edit' }, liEl);
    let actionBtnApply = createElement('button', { className: 'action-btn apply', textContent: 'apply' }, liEl);

    [studentEl, universityEl, scoreEl].forEach((el) => el.value = '');
    nextBtnEl.setAttribute('disabled', '');

    actionBtnEdit.addEventListener('click', (e) => {
      [studentEl.value, universityEl.value, scoreEl.value] = [student, university, score];
      liEl.remove();
      nextBtnEl.removeAttribute('disabled');
    });

    actionBtnApply.addEventListener('click', (e) => {
      let clonnedLi = articleEl.cloneNode(true);
      let newliEl = createElement('li', { className: 'application' }, candidatesListEl);
      newliEl.appendChild(clonnedLi);
      liEl.remove();
      nextBtnEl.removeAttribute('disabled');
    });

  })

  function createElement(tag, properties, container = null) {
    let newEl = document.createElement(tag);
    Object.assign(newEl, properties);
    if (container) container.appendChild(newEl);
    return newEl;
  }
}

