function sumTable() {
    let elements = document.querySelectorAll('tbody>tr:not(:last-child)>td:nth-child(2)');
    let sum = 0;

    for (let elemnt of elements) {
        sum += Number(elemnt.textContent);
    }

    document.querySelector('tbody>tr:last-child>td:nth-child(2)').textContent = sum;
}