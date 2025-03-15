function parkingLot(inputArr) {
    let parking = {};

    for (let carData of inputArr) {        
        let [direction, carNumber] = carData.split(', ');

        direction == 'IN' ? parking[carNumber] = 'IN' : delete parking[carNumber];
    }

    if (Object.keys(parking).length != 0){
        let sortedCars = Object.keys(parking).sort((a,b)=> a.localeCompare(b))

        sortedCars.forEach((car)=>console.log(car));

    } else {
        console.log("Parking Lot is Empty");
    }

}

// parkingLot([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'
// ]);

// parkingLot(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA']
//     );