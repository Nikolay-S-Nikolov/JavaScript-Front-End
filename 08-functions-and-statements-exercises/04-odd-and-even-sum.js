function oddEvenSum(num) {
    let numStr = `${num}`;
    let oddSum = 0;
    let evenSum = 0;

    for (let char of numStr) {
        let number = Number(char);
        number % 2 == 1 ? oddSum += number : evenSum += number;
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddEvenSum( 1000435);
oddEvenSum(3495892137259234);