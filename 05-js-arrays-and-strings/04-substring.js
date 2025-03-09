function doSubstring(str, num1, num2) {
    ;
    console.log(str.substring(num1, num1 + num2));
};

function solve(string, startindex, count) {
    let result = "";
    let arr = string.split("");
    for (let i = startindex; i <= startindex + count; i++) {
        if (arr[i] == undefined) {
            break;
        }
        result += arr[i];
    }
    console.log(result);
}

function solve(string, startindex, count) {
    let result = "";
    let arr = string.split("");
    for (let i = startindex; i <= startindex + count; i++) {
        result += arr[i] != undefined ? arr[i] : '';
    }
    console.log(result);
}

solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);
doSubstring('SkipWord12345', 4, 7);

