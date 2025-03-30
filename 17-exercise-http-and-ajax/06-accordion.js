let baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/'

function solution() {
    fetch(baseUrl + 'list')
        .then(res => res.json())
        .then(showAllArticles)
        .catch(err => console.error(err))
}

function extarctDetails(event, hidenEl, textEl) {
    if (textEl.textContent == '') {

        fetch(baseUrl + 'details/' + event.target.id)
            .then(res => res.json())
            .then(data => displayHideDetails(textEl, hidenEl, event.target, data.content))
            .catch(err => console.error(err))

    } else { displayHideDetails(textEl, hidenEl, event.target) }

}

function showAllArticles(articles) {
    let mainDiv = document.getElementById('main');
    articles.forEach((article) => {
        let accordionDivEl = document.createElement('div');
        accordionDivEl.classList.add('accordion');

        let headDivEl = document.createElement('div');
        headDivEl.classList.add('head');

        let spanEl = document.createElement('span');
        spanEl.textContent = article.title;

        let buttonEl = document.createElement('button');
        Object.assign(buttonEl, { className: 'button' }, { id: article._id }, { textContent: 'More' });

        let extraDivEl = document.createElement('div');
        extraDivEl.classList.add('extra');

        let pEl = document.createElement('p');

        headDivEl.append(spanEl);
        headDivEl.append(buttonEl);
        extraDivEl.append(pEl);
        accordionDivEl.append(headDivEl);
        accordionDivEl.append(extraDivEl);
        mainDiv.append(accordionDivEl);

        buttonEl.addEventListener('click', (e) => extarctDetails(e, extraDivEl, pEl));
    })
}

function displayHideDetails(element, hidenDiv, button, details = null) {
    if (details) {
        element.textContent = details;
    }

    if (button.textContent == 'More') {
        hidenDiv.style.display = 'block';
        button.textContent = 'Less'
    } else {
        hidenDiv.style.display = 'none';
        button.textContent = 'More'
    }
}

solution()