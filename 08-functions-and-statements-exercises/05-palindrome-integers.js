function PalindromeIntegers(intArr) {

    for (let int of intArr) {

        let intStrArr = `${int}`.split('')

        while (true) {

            if (intStrArr.length <= 1) {
                console.log("true");
                break;
            } else if (intStrArr.shift() != intStrArr.pop()) {
                console.log("false");
                break;
            }
        }

    }
}

PalindromeIntegers([123,323,421,121]);
console.log("--------");
PalindromeIntegers([32,2,232,1010]);