function solve() {
    let rows = Array.from(document.querySelector('.container tbody').children);
    let searchedText = document.getElementById('searchField').value;
 
    for (let row of rows) {
       row.classList.remove('select');
    }
 
    if (searchedText != '') {
       for (let row of rows) {
 
          for (tdChild of row.children) {
             let text = tdChild.textContent;
 
             if (text.includes(searchedText)) {
                row.classList.add('select');
                break;
             }
          }
       }
    }
 }