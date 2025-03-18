function colorize() {
    let elemnts = document.querySelectorAll('tbody tr:nth-child(even)');
    for (let element of elemnts){
        element.style.backgroundColor = 'Teal';
    }
}