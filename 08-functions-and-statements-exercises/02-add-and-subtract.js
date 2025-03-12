function addSubstract(numOne, numTwo, numThree) {

    let numSum = sum(numOne, numTwo);

    console.log(subtract(numSum, numThree));

    function sum(numOne, numTwo) {
        return numOne + numTwo;
    }

    function subtract(sum, num) {
        return sum - num;
    }
}

addSubstract(23, 6, 10);
addSubstract(1, 17, 30);
addSubstract(42, 58, 100);