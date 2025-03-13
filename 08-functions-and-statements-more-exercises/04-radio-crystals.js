function radioCrystals(cristalsArr) {
    let finalThickness = cristalsArr.shift();

    function processCristal(cristal, operationName, value) {
        let count = 0;

        while (
            (operationName == 'Cut' && cristal / value >= finalThickness - 1) ||
            (operationName == 'Lap' && cristal * value >= finalThickness - 1) ||
            (operationName == 'Grind' && cristal - value >= finalThickness - 1) ||
            (operationName == 'Etch' && cristal - value >= finalThickness - 1)
        ) {
            cristal = operationName == 'Cut' ? cristal / value
                : operationName == 'Lap' ? cristal * value
                    : cristal - value;
            count++;
        }

        if (count) {
            console.log(`${operationName} x${count}`);
            cristal = Math.floor(cristal);
            console.log('Transporting and washing');
        }

        return cristal;
    }

    for (let cristal of cristalsArr) {
        console.log(`Processing chunk ${cristal} microns`);

        cristal = processCristal(cristal, 'Cut', 4);
        cristal = processCristal(cristal, 'Lap', 0.8);
        cristal = processCristal(cristal, 'Grind', 20);
        cristal = processCristal(cristal, 'Etch', 2);

        if ((finalThickness - 1) == cristal) {
            console.log('X-ray x1');
            cristal++;
        }

        console.log(`Finished crystal ${finalThickness} microns`);
    }
}

// function radioCrystals(cristalsArr) {
//     let finalThickness = cristalsArr.shift();
//     function transportingWashing(cristal) {
//         cristal = Math.floor(cristal);
//         console.log('Transporting and washing');
//         return cristal;
//     }

//     function cutCristal(finalDimention, cristal) {
//         let cut = 0;

//         while (cristal / 4 >= finalDimention - 1) {
//             cristal /= 4;
//             cut++;
//         }

//         if (cut) {
//             console.log(`Cut x${cut}`);
//             return transportingWashing(cristal);
//         }

//         return cristal;
//     }

//     function lapCristal(finalDimention, cristal) {
//         let lap = 0;
//         while (cristal * 0.8 >= finalDimention - 1) {
//             cristal *= 0.8;
//             lap++;
//         }

//         if (lap) {
//             console.log(`Lap x${lap}`);
//             return transportingWashing(cristal);
//         }

//         return cristal;
//     }

//     function grindCristal(finalDimention, cristal) {
//         let grind = 0;
//         while ((cristal - 20) >= finalDimention - 1) {
//             cristal -= 20;
//             grind++;
//         }

//         if (grind) {
//             console.log(`Grind x${grind}`);
//             return transportingWashing(cristal);
//         }

//         return cristal;
//     }

//     function etchCristal(finalDimention, cristal) {
//         let etch = 0;
//         while ((cristal - 2) >= finalDimention - 1) {
//             cristal -= 2;
//             etch++;
//         }

//         if (etch) {
//             console.log(`Etch x${etch}`);
//             return transportingWashing(cristal);
//         }

//         return cristal;
//     }

//     for (let cristal of cristalsArr) {
//         console.log(`Processing chunk ${cristal} microns`);

//         cristal = cutCristal(finalThickness, cristal);
//         cristal = lapCristal(finalThickness, cristal);
//         cristal = grindCristal(finalThickness, cristal);
//         cristal = etchCristal(finalThickness, cristal);

//         if ((finalThickness - 1) == cristal) {
//             console.log('X-ray x1');
//             cristal++;
//         }

//         console.log(`Finished crystal ${finalThickness} microns`);
//     }

// }

radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);