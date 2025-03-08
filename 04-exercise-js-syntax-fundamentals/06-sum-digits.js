function sumDigits(num) {
    let str = String(num);
    let sum = 0;
    for (let i = 0; i <= str.length-1; i++) {
        sum += Number(str[i]);
    }
    console.log(sum);
};

sumDigits(543)
sumDigits(245678)
sumDigits(97561)

