function solve() {
    let number = Number(document.getElementById('input').value);
    let result = document.getElementById('result');

    let option = Array.from(
        document.getElementById('selectMenuTo').children
    ).filter((x) => x.selected == true)[0].value;

    if (option == 'binary') {
        result.value = number.toString(2);

    } else if (option == 'hexadecimal') {
        result.value = number.toString(16).toUpperCase();
    }
}