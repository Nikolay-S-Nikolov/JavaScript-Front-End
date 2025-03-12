function smallestNumber(numOne, numTwo, numThree) {
    let result = 0;
    numOne <= numTwo ? result = numOne : result = numTwo;
    result > numThree ? result = numThree : null;
    console.log(result);
}

smallestNumber(2, 5, 3);
smallestNumber(600, 342, 123);
smallestNumber(25, 21, 4);
smallestNumber(2, 2, 2);