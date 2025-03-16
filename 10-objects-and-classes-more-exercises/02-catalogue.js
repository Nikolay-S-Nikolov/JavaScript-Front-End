function catalog(inputArr) {
    let productDict = {};

    for (let productData of inputArr.sort((a, b) => a.localeCompare(b))) {
        let sortLetter = productData[0];
        let product = productData.split(' :').join(':');

        if (!(sortLetter in productDict)) {
            productDict[sortLetter]= [];
        }

        productDict[sortLetter].push(product);
    }
    

    for (let [key,value] of Object.entries(productDict)){
        console.log(`${key}\n  ${value.join('\n  ')}`);
    }
}

catalog([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]
);