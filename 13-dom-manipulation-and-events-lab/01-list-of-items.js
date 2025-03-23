function addItem() {
    const inputText = document.getElementById('newItemText');
    const element = document.createElement('li');
    const parrent = document.getElementById('items');

    if(inputText.value == '') return;

    element.textContent = inputText.value;

    parrent.appendChild(element);

    inputText.value = '';

}
