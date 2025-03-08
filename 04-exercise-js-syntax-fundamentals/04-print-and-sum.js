function printAndSum(num1, num2) {
    let sum = 0;
    let result = '';
    for (i = num1; i <= num2; i++) {
        sum += i;
        result += i + " "
    }
    console.log(result);
    console.log("Sum: " + sum);
};

printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)