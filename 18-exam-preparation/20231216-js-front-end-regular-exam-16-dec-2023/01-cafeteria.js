function cafeteria(inputArr) {
    let baristas = {};
    let num = inputArr.shift();

    for (let i = 0; i < num; i++) {
        let [baristaName, shift, coffeeTypes] = inputArr.shift().split(' ');
        coffeeTypes = coffeeTypes.split(',');
        
        baristas[baristaName] = { shift, coffeeTypes };
    }

    for (let commandInfo of inputArr) {
        let [command, ...info] = commandInfo.split(' / ');

        if (command == 'Closed') break;
        if (command == 'Prepare') {
            let [name, shiftToPrepare, coffeeType] = info;

            if (baristas[name].shift == shiftToPrepare && baristas[name].coffeeTypes.includes(coffeeType)) {
                console.log(`${name} has prepared a ${coffeeType} for you!`);
            } else {
                console.log(`${name} is not available to prepare a ${coffeeType}.`);
            }
        } else if (command == 'Change Shift') {
            let [name, newShift] = info;

            baristas[name].shift = newShift;
            console.log(`${name} has updated his shift to: ${newShift}`)
        } else if (command == 'Learn') {
            let [name, newCoffeeType] = info;

            if (baristas[name].coffeeTypes.includes(newCoffeeType)) {
                console.log(`${name} knows how to make ${newCoffeeType}.`)
            }else{
                baristas[name].coffeeTypes.push(newCoffeeType);
                console.log(`${name} has learned a new coffee type: ${newCoffeeType}.`)
            }
        };

    }
    Object.keys(baristas).forEach((barista)=>{
        console.log(`Barista: ${barista}, Shift: ${baristas[barista].shift}, Drinks: ${baristas[barista].coffeeTypes.join(', ')}`)
    })
}

// cafeteria([
//     '3',
//     'Alice day Espresso,Cappuccino',
//     'Bob night Latte,Mocha',
//     'Carol day Americano,Mocha',
//     'Prepare / Alice / day / Espresso',
//     'Change Shift / Bob / night',
//     'Learn / Carol / Latte',
//     'Learn / Bob / Latte',
//     'Prepare / Bob / night / Latte',
//     'Closed']
// )

cafeteria(['4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / day',
    'Learn / Carol / Latte',
    'Prepare / Bob / night / Latte',
    'Learn / David / Cappuccino',
    'Prepare / Carol / day / Cappuccino',
    'Change Shift / Alice / night',
     'Learn / Bob / Mocha',
    'Prepare / David / night / Espresso',
    'Closed'])

