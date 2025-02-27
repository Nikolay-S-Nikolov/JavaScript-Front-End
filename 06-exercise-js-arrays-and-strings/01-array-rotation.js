function arrayRotation(inputArr, n) {
    for (i = 0; i < n; i++) {
        const rotateElement = inputArr.shift();
        inputArr.push(rotateElement);

    };
    console.log(...inputArr);
};

arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)