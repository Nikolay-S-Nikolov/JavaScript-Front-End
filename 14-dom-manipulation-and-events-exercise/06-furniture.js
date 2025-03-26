function solve() {
    const generateForm = document.getElementById('input');
    const shopForm = document.getElementById('shop');
  
    generateForm.addEventListener('submit', (e) => {
      e.preventDefault()
  
      let inputText = e.target.querySelector('textarea');
      let inputArr = JSON.parse(inputText.value);
  
      inputArr.forEach((product) => {
        let newTr = document.querySelector('tbody tr').cloneNode(true);
  
        newTr.children[0].innerHTML = `<img src="${product.img}">`;
        newTr.children[1].innerHTML = `<p>${product.name}</p>`;
        newTr.children[2].innerHTML = `<p>${product.price}</p>`;
        newTr.children[3].innerHTML = `<p>${product.decFactor}</p>`;
        newTr.children[4].innerHTML = `<input type="checkbox" />`;
  
        document.querySelector('tbody').appendChild(newTr);
      })
  
    })
  
    shopForm.addEventListener('submit', (e) => {
      e.preventDefault()
  
      let result = e.target.querySelector('textarea')
      let furnituresName = [];
      let totalPrice = 0;
      let decFactor = 0;
  
      Array.from(document.querySelectorAll('tr:has(input[type="checkbox"]:checked)')).forEach((element) => {
  
        furnituresName.push(element.querySelector('td:nth-child(2) p').textContent);
        totalPrice += Number(element.querySelector('td:nth-child(3) p').textContent);
        decFactor += Number(element.querySelector('td:nth-child(4) p').textContent);
      })
  
      result.textContent = `Bought furniture: ${furnituresName.join(', ')}\n`;
      result.textContent += `Total price: ${totalPrice}\n`;
      result.textContent += `Average decoration factor: ${decFactor / furnituresName.length}\n`;
    })
  }