function motoRace(inputArr) {
    let num = inputArr.shift();
    let riders = {};

    for (let i = 0; i < num; i++) {
        let [rider, fuelCapacity, position] = inputArr.shift().split('|');

        fuelCapacity = Number(fuelCapacity);
        if (fuelCapacity > 100) fuelCapacity = 100;
        
        riders[rider] = { 'fuelCapacity': fuelCapacity, 'position': Number(position) };
    }

    for (let commandInfo of inputArr) {
        let [command, ...info] = commandInfo.split(' - ');

        if (command == 'Finish') break;

        if (command == 'StopForFuel') {
            let [currRider, minimumFuel, changedPosition] = info;

            if (riders[currRider].fuelCapacity < Number(minimumFuel)) {

                riders[currRider].position = Number(changedPosition);
                console.log(`${currRider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
            } else {

                console.log(`${currRider} does not need to stop for fuel!`);
            }
        } else if (command == 'Overtaking') {
            let [rider1, rider2] = info;

            if (riders[rider1].position < riders[rider2].position) {
                [riders[rider1].position, riders[rider2].position] = [riders[rider2].position, riders[rider1].position];
                console.log(`${rider1} overtook ${rider2}!`);
            }
        } else if (command == 'EngineFail') {
            let [currrRider, lapsLeft] = info;

            
            console.log(`${currrRider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
            delete riders[currrRider];
        };
    }

    Object.keys(riders).forEach((rider) => {
        console.log(rider);
        console.log(`Final position: ${riders[rider].position}`)
    })
}

motoRace((["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])

)