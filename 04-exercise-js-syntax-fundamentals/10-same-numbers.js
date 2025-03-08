function sameNumbers(num) {
    let str = String(num);
    let allDigits = true;
    let sum = 0;
    for (i = 0; i < str.length; i++) {
        sum += Number(str[i]);
        if (allDigits && i > 0) {
            if(str[i-1] != str[i]){
                allDigits=false;
            };
        };
    };
    console.log(allDigits);
    console.log(sum);
};

sameNumbers(2222222);
sameNumbers(1234);