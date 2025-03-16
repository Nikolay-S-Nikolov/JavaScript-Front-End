function printUniqueArray(input) {
    let storedArr = [];

    for (let currentArr of input) {
        currentArr = JSON.parse(currentArr).sort((a, b) => b - a);
        currentArr = JSON.stringify(currentArr);

        if (!storedArr.includes(currentArr)) {
            storedArr.push(currentArr);
        }

    }

    storedArr = storedArr.map((x) => JSON.parse(x)).sort((a, b) => a.length - b.length);

    for (let element of storedArr) {
        console.log(`[${element.join(', ')}]`);
    }
}

printUniqueArray(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[10, 1, -17, 0, 2, 14]",
    "[1]",
    "[1]",
    "[]",
    "[]"]
)
// printUniqueArray(["[7.14, 7.180, 7.339, 80.099]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"]
// )