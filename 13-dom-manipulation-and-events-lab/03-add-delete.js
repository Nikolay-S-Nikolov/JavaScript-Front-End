function addItem() {
    const inputText = document.getElementById('newItemText');
    const element = document.createElement('li');
    const parrent = document.getElementById('items');
    const button = document.createElement('a');

    if(inputText.value == '') return;

    element.textContent = inputText.value;
    button.href = '#'
    button.textContent = '[Delete]'

    parrent.appendChild(element);
    element.appendChild(button);

    inputText.value = '';

    button.addEventListener('click',(e)=>button.parentElement.remove());
}
