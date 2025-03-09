function firstLastSum(elements) {
    let first = elements[0];
    let last = elements[elements.length - 1];
    let sum = Number(first) + Number(last);
    console.log(sum);
};

firstLastSum([20, 30, 40]);
firstLastSum([10, 17, 22, 33]);
firstLastSum([11, 58, 69]);