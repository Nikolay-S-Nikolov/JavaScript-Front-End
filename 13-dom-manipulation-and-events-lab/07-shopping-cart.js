function solve() {
    const button = Array.from(document.getElementsByClassName('add-product'));
    const cart = document.querySelector('.shopping-cart textarea');
    const checkout = document.querySelector('.checkout');
    let order = {};
 
    button.forEach((ele) => {
       ele.addEventListener('click', addToCartEventListener);
    })
 
    checkout.addEventListener('click', checkoutEventListener);
 
    function addToCartEventListener(event) {
       let product = event.target.parentElement.parentElement;
       let productName = product.querySelector('.product-title').textContent;
       let productPrice = Number(product.querySelector('.product-line-price').textContent);
 
       order[productName] ??= 0;
       order[productName] += productPrice;
 
       cart.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
    }
 
    function checkoutEventListener(event) {
       let list = Object.keys(order);
       let totalPrice = Object.values(order).reduce((sum, cur) => sum + cur, 0);
 
       button.forEach((ele) => ele.disabled = true);
       checkout.disabled = true;
 
       cart.value += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;
    }
 
 }
 