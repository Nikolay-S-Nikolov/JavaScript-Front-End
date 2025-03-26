function solve() {
    let result = document.getElementById('check');
    let table = document.querySelector('table');

    document.querySelector('#solutionCheck').addEventListener('submit', (e) => {
        e.preventDefault();

        const data = Array.from(document.querySelectorAll('tbody tr'));
        let matrix = [];

        result.textContent = '';        

        data.forEach((row) => matrix.push(Array.from(row.querySelectorAll('input')).map(x => x.value)));

        for (let i = 0; i < 3; i++) {

            let checkRow = new Set(matrix[i]);
            let checkCol = new Set();

            for (let j = 0; j < 3; j++) {
                checkCol.add(matrix[j][i]);
            }

            if (checkRow.size < 3 || checkCol.size < 3) {
                result.textContent = 'Keep trying ...';
                table.style.borderColor = 'red';
                return;
            }

        }

        if (result.textContent == '') {
            result.textContent = 'Success!';
            table.style.borderColor  = 'green';
        }

    })

    document.querySelector('input[type="reset"]').addEventListener('click', (e) => {
        let boxes = document.querySelectorAll('input[type="number"]');

        boxes.forEach((element)=>element.value = '');
        result.textContent = '';
        table.style.borderColor = '#234465'
    })
}