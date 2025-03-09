function evenOddSubtraction(input) {
    let even = 0;
    let odd = 0;
    for (i = 0; i < input.length; i++) {
        if (i % 2 == 1) {
            even += input[i];
        } else {
            odd += input[i];
        };
    };
    console.log(even);
    console.log(odd);
    console.log(even - odd);
};

evenOddSubtraction([1, 2, 3, 4, 5, 6])
evenOddSubtraction([3, 5, 7, 9])
evenOddSubtraction([2, 4, 6, 8, 10])