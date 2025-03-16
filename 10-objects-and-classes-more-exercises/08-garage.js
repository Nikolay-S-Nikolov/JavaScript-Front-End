function garage(inputArr){
    let garages = {};

    for (let info of inputArr){
        let [garage, carInfo] = info.split(' - ');
        let car = {};

        if (!(garage in garages)){
            garages[garage] = [];
        }

        carInfo = carInfo.split(', ');

        for (let carData of carInfo){
            let [key,value] = carData.split(': ');
            car[key] = value;
        }

        garages[garage].push(car);
    }

    for (let currentGarage in garages){
        console.log(`Garage № ${currentGarage}`);

        for(currentCar of garages[currentGarage]){
            let carDetails = Object.entries(currentCar);
            let data = [];

            carDetails.forEach((x)=>data.push(`${x[0]} - ${x[1]}`));
            console.log(`--- ${data.join(', ')}`);
        }
    }
}

// garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])