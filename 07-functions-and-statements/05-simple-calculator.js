function calculator(num1, num2, operator) {

    let operatorMapper = {
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b
    };

    console.log(operatorMapper[operator](num1, num2));
}

calculator(5, 5, 'multiply')
calculator(40, 8, 'divide')
calculator(12, 19, 'add')
calculator(50, 13, 'subtract')
