function astroAdventure(inputArr) {
    let num = inputArr.shift();
    let astronauts = {};

    for (let i = 0; i < num; i++) {
        let [astronautName, oxygenLevel, energyReserves] = inputArr[i].split(' ');

        astronauts[astronautName] = { oxygenLevel: Number(oxygenLevel), energyReserves: Number(energyReserves) };
    }

    for (let commandInfo of inputArr) {
        let [command, ...info] = commandInfo.split(' - ');
        if (command == 'End') break;

        if (command == 'Explore') {
            let [name, energyNeeded] = [info[0], Number(info[1])];

            if (astronauts[name].energyReserves >= energyNeeded) {
                astronauts[name].energyReserves -= energyNeeded;
                console.log(`${name} has successfully explored a new area and now has ${astronauts[name].energyReserves} energy!`);
            } else {
                console.log(`${name} does not have enough energy to explore!`);
            }
        } else if (command == 'Refuel') {
            let [name, amount] = [info[0], Number(info[1])];

            let amountRecovered = Math.min(amount, (200 - astronauts[name].energyReserves));

            astronauts[name].energyReserves += amountRecovered;
            console.log(`${name} refueled their energy by ${amountRecovered}!`);

        } else if (command == 'Breathe') {
            let [name, amount] = [info[0], Number(info[1])];

            let amountRecovered = Math.min(amount, 100 - astronauts[name].oxygenLevel);
            // let amountRecovered = astronauts[name].oxygenLevel + amount <= 100 ? amount
            //     : 100 - astronauts[name].oxygenLevel;

            astronauts[name].oxygenLevel += amountRecovered;
            console.log(`${name} took a breath and recovered ${amountRecovered} oxygen!`);
        };

    }

    Object.keys(astronauts).forEach((astronaut) => {
        console.log(`Astronaut: ${astronaut}, Oxygen: ${astronauts[astronaut].oxygenLevel}, Energy: ${astronauts[astronaut].energyReserves}`)
    })
}

astroAdventure(['4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']
)