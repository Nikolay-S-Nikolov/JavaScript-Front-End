function fruit(fruit, weight, price) {
    let money = 0;
    money = (price / 1000) * weight;
    console.log(`I need $${money.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`)
};

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)