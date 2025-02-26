function mathOperation(num1, num2, operation) {
    let result;
    if (operation == '+') {
        result = num1 + num2;
    } else if (operation == '-') {
        result = num1 - num2;
    } else if (operation == '*') {
        result = num1 * num2;
    } else if (operation == '/') {
        result = num1 / num2;
    } else if (operation == '%') {
        result = num1 % num2;
    } else if (operation == '**') {
        result = num1 ** num2;
    };
    console.log(result);

};

function mathOperation(num1, num2, operation) {
    let result;
    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    };
    console.log(result);

};


mathOperation(5, 6, '+');
mathOperation(3, 5.5, '*');