function circleArea(num) {
    let inputType = typeof (num);
    if (inputType != 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    } else {
        let result;
        result = Math.PI * num * num;
        console.log(result.toFixed(2));
    };
};

circleArea(5);
circleArea('name');