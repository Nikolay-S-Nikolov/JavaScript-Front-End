function solve() {
    let result = [];
    let rows = document.querySelector('tbody').children;

    let checkedColumns = Array.from(document.querySelectorAll('th')).map(
        (column, i) => column.children[0].checked ? [column.children[0].name, i] : null
    ).filter(Boolean)

    for (let row of rows) {
        let currentRow = {};

        for (let [columnName, index] of checkedColumns) {
            let curentTds = Array.from(row.children);
            currentRow[columnName] = curentTds[index].textContent;
        }

        result.push(currentRow);
    }

    document.getElementById('output').textContent = JSON.stringify(result);
}