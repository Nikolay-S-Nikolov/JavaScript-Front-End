window.addEventListener("load", solve);

function solve() {
  let emailEl = document.getElementById('email');
  let eventEl = document.getElementById('event');
  let locationEl = document.getElementById('location');
  let nextBtnEl = document.getElementById('next-btn');

  let previewList = document.getElementById('preview-list');
  let eventList = document.getElementById('event-list');

  function registerEvent(ev) {
    ev.preventDefault();
    let [email, event, location] = [emailEl.value, eventEl.value, locationEl.value];
    if (!email || !event || !location) return;

    let liEl = createElement('li', { className: 'application' }, previewList);
    let articleEl = createElement('article', {}, liEl);
    createElement('h4', { textContent: email }, articleEl);

    let pEvent = createElement('p', {}, articleEl);
    pEvent.innerHTML = `<strong>Event:</strong><br>${event}`;


    let pLocation = createElement('p', {}, articleEl);
    pLocation.innerHTML = `<strong>Location:</strong><br>${location}`;

    let editBtnEl = createElement('button', { className: 'action-btn edit', textContent: 'edit' }, liEl);
    let applyBtnEl = createElement('button', { className: 'action-btn apply', textContent: 'apply' }, liEl);

    [emailEl, eventEl, locationEl].forEach(el => el.value = '');

    nextBtnEl.setAttribute('disabled', '');

    editBtnEl.addEventListener('click', () => editEvent(email, event, location, liEl));
    applyBtnEl.addEventListener('click', () => applyEvent(liEl, editBtnEl, applyBtnEl));

  }

  function applyEvent(liEl, editBtnEl, applyBtnEl) {
    editBtnEl.remove();
    applyBtnEl.remove();

    eventList.appendChild(liEl);
    nextBtnEl.removeAttribute('disabled');
  }

  function editEvent(email, event, location, liEl) {
    [emailEl.value, eventEl.value, locationEl.value] = [email, event, location];
    liEl.remove();
    nextBtnEl.removeAttribute('disabled');
  }

  function createElement(tag, properties, container) {
    let ele = document.createElement(tag);
    Object.assign(ele, properties);
    if (container) container.appendChild(ele);
    return ele;
  }

  nextBtnEl.addEventListener('click', registerEvent);
}
