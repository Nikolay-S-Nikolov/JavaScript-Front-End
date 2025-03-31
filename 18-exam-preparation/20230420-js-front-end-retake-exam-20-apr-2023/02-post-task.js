window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById('publish-btn');
  let taskTitle = document.getElementById('task-title');
  let taskCategory = document.getElementById('task-category');
  let taskContent = document.getElementById('task-content');
  let reviewList = document.getElementById('review-list');

  publishBtn.addEventListener('click', () => {
    let [title, category, content] = [taskTitle.value, taskCategory.value, taskContent.value]

    if (title.trim() == '' || category.trim() == '' || content.trim() == '') return;

    let rpostLiEl = createElement('li', { className: 'rpost' }, reviewList);
    let articleEl = createElement('article', {}, rpostLiEl);

    createElement('h4', { textContent: title }, articleEl);
    createElement('p', { textContent: 'Category: ' + category }, articleEl);
    createElement('p', { textContent: 'Content: ' + content }, articleEl);

    let clonedLI = rpostLiEl.cloneNode(true)

    let editBtnEl = createElement('button', { className: 'action-btn edit', textContent: 'Edit' }, rpostLiEl);
    let postBtnEl = createElement('button', { className: 'action-btn post', textContent: 'Post' }, rpostLiEl);
    
    [taskTitle, taskCategory, taskContent].forEach((x) => x.value = '');

    editBtnEl.addEventListener('click', editTaskEventListener);

    postBtnEl.addEventListener('click', postTaskEventListener);

    function editTaskEventListener() {

      [taskTitle.value, taskCategory.value, taskContent.value] = [title, category, content];

      reviewList.removeChild(rpostLiEl);
    }

    function postTaskEventListener() {
      let publishedList = document.getElementById('published-list');

      publishedList.appendChild(clonedLI);
      reviewList.removeChild(rpostLiEl);
    }

  })

  function createElement(tag, properties, conteiner = null) {
    let newEl = document.createElement(tag);

    Object.keys(properties).forEach((key) => {
      typeof properties[key] == 'object' ? Object.assign(newEl.dataset, properties[key])
        : newEl[key] = properties[key]
    })

    if (conteiner) conteiner.appendChild(newEl);
    
    return newEl;
  }
}