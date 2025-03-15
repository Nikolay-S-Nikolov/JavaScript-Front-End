function storeProvision(storeArr, orderArr) {
    let store = {};

    for (let i = 0; i < storeArr.length; i += 2) {
        store[storeArr[i]] = Number(storeArr[i + 1]);
    }

    for (let i = 0; i < orderArr.length; i += 2) {

        if (!store.hasOwnProperty(orderArr[i])) {
            store[orderArr[i]] = 0;
        }

        store[orderArr[i]] += Number(orderArr[i + 1]);
    }

    finalArr = Object.entries(store);
    finalArr.forEach((k) => console.log(`${k[0]} -> ${k[1]}`));
}

// storeProvision(
//     ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//     ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
// );

