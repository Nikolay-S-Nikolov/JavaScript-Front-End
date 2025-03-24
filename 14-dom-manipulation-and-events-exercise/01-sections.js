function solve() {
    let formEl = document.getElementById('task-input');
    let parrent = document.getElementById('content');
 
    formEl.addEventListener('submit', addDivsEventListener);
 
    function addDivsEventListener(event) {
       event.preventDefault();
 
       let inputData = document.querySelector('input[type="text"]');
       let inputText = inputData.value.split(', ');
 
       for (let el of inputText) {
          let newDiv = document.createElement('div');
          let newP = document.createElement('p');
          newP.textContent = el;
          newP.style.display = 'none';
 
          newDiv.append(newP);
          newDiv.ch
          newDiv.addEventListener('click', (e) => {
             e.target.querySelector('p').style.display = 'block'
          })
          parrent.append(newDiv);
 
       }
    }
 }