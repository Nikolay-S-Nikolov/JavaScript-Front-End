function order(product, count) {

    let priceProductMapper = {
        "coffee": 1.50,
        "water": 1.00,
        "coke": 1.40,
        "snacks": 2.00
    };
    
    console.log((priceProductMapper[product] * count).toFixed(2));
}

order("water", 5)
order("coffee", 2)