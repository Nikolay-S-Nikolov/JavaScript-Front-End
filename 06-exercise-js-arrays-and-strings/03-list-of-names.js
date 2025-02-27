function solve(arr) {
    arr = arr.sort((a,b)=> a.localeCompare(b));

    let count = 1;
    for (let w of arr) {
        console.log(`${count++}.${w}`);
    };

};

function solve(arr) {
    const sortedArr = arr.sort((a,b)=> a.localeCompare(b))

    for (let i = 0; i < sortedArr.length; i++) {
        console.log(`${i + 1}.${sortedArr[i]}`)
    };

};

solve(["John", "Bob", "emo",  "Christina", "Ema"]); 
solve(["John", "bob", "Christina", "ema"]); 