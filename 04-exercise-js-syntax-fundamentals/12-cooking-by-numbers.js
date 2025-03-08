function cookingByNumbers(num, operation1, operation2, operation3, operation4, operation5) {
    let list = [operation1, operation2, operation3, operation4, operation5];
    for (i = 0; i <= 4; i++) {
        let operation = list[i];
        switch (operation) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num += 1; break;
            case 'bake': num *= 3; break;
            case 'fillet': num = num - num * 0.20; break;
        }
        console.log(num);
    };
};

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')