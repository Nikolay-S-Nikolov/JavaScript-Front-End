function solve() {
  const generateForm = document.getElementById('input');
  const shopForm = document.getElementById('shop');
  const tableBody = document.querySelector('tbody')

  generateForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let inputText = e.target.querySelector('textarea');
    let inputArr = JSON.parse(inputText.value);

    inputArr.forEach((product) => {
      let newTr = document.createElement('tr');

      appendNewEl(newTr, 'img', 'src', product.img);
      appendNewEl(newTr, 'p', 'textContent', product.name);
      appendNewEl(newTr, 'p', 'textContent', product.price);
      appendNewEl(newTr, 'p', 'textContent', product.decFactor);
      appendNewEl(newTr, 'input', 'type', 'checkbox');

      tableBody.appendChild(newTr);
    })
  })

  function appendNewEl(parent, element, property, text) {
    let newTd = document.createElement('td');
    let newEle = document.createElement(element);

    Object.assign(newEle, { [property]: text });

    newTd.appendChild(newEle);
    parent.appendChild(newTd);
  }

  shopForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let result = e.target.querySelector('textarea')
    let furnituresName = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    Array.from(document.querySelectorAll('tr:has(input[type="checkbox"]:checked)')).forEach((element) => {

      let [name, price, DecFactor] = element.querySelectorAll('td:nth-child(n+2) p');

      furnituresName.push(name.textContent);
      totalPrice += Number(price.textContent);
      totalDecFactor += Number(DecFactor.textContent);
    })

    let avgDecFactor = totalDecFactor / furnituresName.length

    result.textContent =
      `Bought furniture: ${furnituresName.join(', ')}\n` +
      `Total price: ${totalPrice}\n` +
      `Average decoration factor: ${avgDecFactor}\n`;
  })
}