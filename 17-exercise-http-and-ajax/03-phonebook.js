function attachEvents() {
    let baseUrl = 'http://localhost:3030/jsonstore/phonebook'
    let btnLoad = document.getElementById('btnLoad');
    let btnCreate = document.getElementById('btnCreate');

    btnLoad.addEventListener('click', showAllContacts);
    btnCreate.addEventListener('click', createContact);

    function createContact() {
        let inputElements = document.querySelectorAll('input[type="text"]');
        let [person, phone] = [...inputElements].map((el) => el.value);
        if (!person || !phone) return;
        let newContact = { person, phone };

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(newContact)
        })
            .then(() => {
                [...inputElements].forEach((el) => el.value = '');
                btnLoad.click();
            })
            .catch(err => console.error(err))
    }

    function showAllContacts() {
        let parentUlEl = document.getElementById('phonebook');
        parentUlEl.replaceChildren();

        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                Object.values(data).forEach((contact) => {
                    let { person, phone, _id } = contact;

                    let newLiEl = document.createElement('li');
                    Object.assign(newLiEl, { 'id': _id }, { 'textContent': `${person}: ${phone}` });

                    let delBtn = document.createElement('button');
                    delBtn.textContent = 'Delete';

                    newLiEl.append(delBtn);
                    parentUlEl.append(newLiEl);

                    delBtn.addEventListener('click', deleteElement);
                })
            })
            .catch(err => console.error(err))
    }

    function deleteElement(e) {
        contactEl = e.target.parentElement
        fetch(baseUrl + '/' + contactEl.id, {
            method: 'DELETE'
        })
            .then(() => contactEl.remove())
            .catch(err => console.error(err))
    }
}