const baseUrl = 'http://localhost:3030/jsonstore/orders/';

const nameEl = document.getElementById('name');
const quantityEl = document.getElementById('quantity');
const dateEl = document.getElementById('date');

const editOrderBtn = document.getElementById('edit-order');
const createOrderBtn = document.getElementById('order-btn');

let editedOrderId = null;

async function getAllOrdersData() {
    try {
        const res = await fetch(baseUrl);
        const data = await res.json();
        return Object.values(data);
    } catch (err) {
        console.error(err);
    }
}

async function postOrderData(order) {
    const options = {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(order)
    };

    try {
        await fetch(baseUrl, options);
    } catch (err) {
        console.error(err);
    };
}

async function updateOrderData(order) {
    const options = {
        method: 'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(order)
    };

    try {
        await fetch(baseUrl + order._id, options);
    } catch (err) {
        console.error(err);
    };
}

async function deleteOrderData(id) {
    const options = {
        method: 'DELETE'
    };

    try {
        await fetch(baseUrl + id, options);
    } catch (err) {
        console.error(err);
    };
}

async function loadAllOrders() {
    let orders = await getAllOrdersData();

    let listEl = document.getElementById('list');
    listEl.innerHTML = '';
    orders.forEach((order) => {
        let divEl = createElement('div', { className: 'container' }, listEl);

        createElement('h2', { textContent: order.name }, divEl);
        createElement('h3', { textContent: order.date }, divEl);
        createElement('h3', { textContent: order.quantity }, divEl);

        let changeBtn = createElement('button', { className: 'change-btn', textContent: 'Change' }, divEl);
        let doneBtn = createElement('button', { className: 'done-btn', textContent: 'Done' }, divEl);

        changeBtn.addEventListener('click', () => changeOrder(order, divEl));
        doneBtn.addEventListener('click', () => deleteOrder(order._id, divEl));
    });
}

function changeOrder(order, divEl) {
    [nameEl.value, quantityEl.value, dateEl.value] = [order.name, order.quantity, order.date];
    editedOrderId = order._id;

    divEl.remove();
    createOrderBtn.setAttribute('disabled', '');
    editOrderBtn.removeAttribute('disabled');
}

async function createOrder(ev) {    
    ev.preventDefault();
    let [name, quantity, date] = [nameEl.value, quantityEl.value, dateEl.value];
    if (!name || !quantity || !date) return;

    let newOrder = {name, quantity, date};
    await postOrderData(newOrder);
    
    [nameEl, quantityEl, dateEl].forEach(ele=>ele.value = '');
    await loadAllOrders(); 
}

async function editOrder(ev) {
    ev.preventDefault();
    let [name, quantity, date] = [nameEl.value, quantityEl.value, dateEl.value];
    if (!name || !quantity || !date) return;

    let editedOrder = {name, quantity, date, _id:editedOrderId};
    await updateOrderData(editedOrder);

    editOrderBtn.setAttribute('disabled', '');
    createOrderBtn.removeAttribute('disabled');

    editedOrderId = null;
    await loadAllOrders(); 
}

async function deleteOrder(orderId) {
    await deleteOrderData(orderId);
    await loadAllOrders();
}

function createElement(tag, properties, container) {
    let el = document.createElement(tag);
    Object.assign(el, properties);
    if (container) container.appendChild(el);
    return el;
}

document.getElementById('load-orders').addEventListener('click', loadAllOrders);
editOrderBtn.addEventListener('click', editOrder);
createOrderBtn.addEventListener('click', createOrder);