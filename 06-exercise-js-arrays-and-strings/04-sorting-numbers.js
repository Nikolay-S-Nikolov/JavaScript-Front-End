function sortNumbers(arr) {
    arr.sort((a, b) => a - b);
    let sorted = [];
    while (arr.length) {
        sorted.push(arr.shift());
        if (arr.length) {
            sorted.push(arr.pop());
        };
    };
    return sorted;
};

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));