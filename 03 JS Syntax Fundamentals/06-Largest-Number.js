function largestNum(num1, num2, num3) {
    let largest;
    largest = Math.max(num1, num2, num3);
    console.log(`The largest number is ${largest}.`);
};



function largestNum(num1, num2, num3) {
    let largest;
    if (num1 > num2 && num1 > num3) {
        largest = num1;
    } else if (num2 > num1 && num2 > num3){
        largest = num2;
    }else{
        largest = num3;
    };
    console.log(`The largest number is ${largest}.`);
};

largestNum(1, 2, 3)
largestNum(5, -3, 16)
largestNum(-3, -5, -22.5)