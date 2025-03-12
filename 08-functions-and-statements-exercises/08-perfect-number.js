function perfectNumberCheck(number) {
    let result = "It's not so perfect."
    if (number % 2 == 0) {
        let sum = 1;
        for (let i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                sum += i;
            }
        }
        sum == number ? result = "We have a perfect number!" : null;
    }
    console.log(result);
}

perfectNumberCheck(496)
perfectNumberCheck(8128)