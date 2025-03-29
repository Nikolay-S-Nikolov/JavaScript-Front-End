function attachEvents() {
    let baseUrl = 'http://localhost:3030/jsonstore/messenger'
    let refreshBtn = document.getElementById('refresh');
    let submitBtn = document.getElementById('submit');

    refreshBtn.addEventListener('click', loadAllMessages);
    submitBtn.addEventListener('click', submitMessage);

    function loadAllMessages() {
        fetch(baseUrl)
            .then(res => res.json())
            .then(showAllMessages)
            .catch(err => console.error(err))
    }

    function submitMessage() {
        let name = document.querySelector('input[name="author"]');
        let content = document.querySelector('input[name="content"]');

        if (!name.value || !content.value) return;

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({
                author: name.value,
                content: content.value,
            }),
        })
            .then(() => {
                name.value = '';
                content.value = '';
                refreshBtn.click();
            })
            .catch(err => console.error(err))
    }

    function showAllMessages(data){
        let allMessages = [];

        Object.values(data).forEach((message) => {
            allMessages.push(`${message.author}: ${message.content}`);
        })

        document.getElementById('messages').value = allMessages.join('\n');
    }
}

attachEvents();