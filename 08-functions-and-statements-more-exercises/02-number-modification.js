function numberModification(num) {
    let numArr = `${num}`.split('').map(Number);
    
    while ((numArr.reduce((a, b) => a + b, 0) / numArr.length) <= 5) {
        numArr.push(9);
    }

    console.log(numArr.join(''));

}

numberModification(101);
numberModification(5835)