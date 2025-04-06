window.addEventListener("load", solve);

function solve() {
    let expenseEl = document.getElementById('expense');
    let amountEl = document.getElementById('amount');
    let dateEl = document.getElementById('date');
    let addBtnEl = document.getElementById('add-btn');

    let previewListEl = document.getElementById('preview-list');
    let expensesListEl = document.getElementById('expenses-list');

    let btnDeleteEl = document.querySelector('.btn.delete');

    btnDeleteEl.addEventListener('click', ()=>location.reload());

    addBtnEl.addEventListener('click', () => {
        let [expense, amount, date] = [expenseEl.value, amountEl.value, dateEl.value];
        if (!expense || !amount || !date) return;

        let liEl = createElement('li',{className: 'expense-item'},previewListEl);
        let articleEl = createElement('article',{},liEl);

        createElement('p',{textContent:`Type: ${expense}`},articleEl);
        createElement('p',{textContent:`Amount: ${amount}$`},articleEl);
        createElement('p',{textContent:`Date: ${date}`},articleEl);

        let divEL = createElement('div',{className:'buttons'},liEl);
        let btnEditEl = createElement('button',{className:'btn edit',textContent:'edit'},divEL);
        let btnOkEl = createElement('button',{className:'btn ok',textContent:'ok'},divEL);

        [expenseEl, amountEl, dateEl].forEach((x)=>x.value = '');
        addBtnEl.setAttribute('disabled','');

        btnEditEl.addEventListener('click', ()=>{
            [expenseEl.value, amountEl.value, dateEl.value] =  [expense, amount, date];

            addBtnEl.removeAttribute('disabled');
            liEl.remove();
        });

        btnOkEl.addEventListener('click', ()=>{
            let newLiEl = createElement('li',{className: 'expense-item'},expensesListEl);
            let cllonedArticle = articleEl.cloneNode(true);

            newLiEl.appendChild(cllonedArticle);
            liEl.remove();

            addBtnEl.removeAttribute('disabled');
        });
    })

    function createElement(tag,properties,container = null){
        let newEl = document.createElement(tag);
        Object.assign(newEl,properties);
        if(container)container.appendChild(newEl);
        return newEl;
    };
}