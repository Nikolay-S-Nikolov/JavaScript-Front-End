function reverseArray(n, input) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(input[i]);
    };
    console.log(...newArr.reverse());
};

function reverseArray(n, input) {
    let newArr = input.slice(0, n)
    console.log(...newArr.reverse());
};

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);