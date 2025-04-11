function superheroAlliance(inputArr) {
    let num = Number(inputArr.shift());
    let superheros = {};

    for (let i = 0; i < num; i++) {
        let [superheroName, superpowers, energy] = inputArr.shift().split('-');
        superheros[superheroName] = { superpowers: superpowers.split(','), energy: Number(energy) };
    }

    for (let coomandInfo of inputArr) {
        let [command, ...info] = coomandInfo.split(' * ');
        if (command == 'Evil Defeated!') break;

        if (command == 'Use Power') {
            let [heroName, superpower, energyRequired] = info;
            energyRequired = Number(energyRequired);

            if (superheros[heroName].superpowers.includes(superpower) && (superheros[heroName].energy >= energyRequired)) {

                superheros[heroName].energy -= energyRequired;
                console.log(`${heroName} has used ${superpower} and now has ${superheros[heroName].energy} energy!`);
            } else {
                console.log(`${heroName} is unable to use ${superpower} or lacks energy!`);
            }
        } else if (command == 'Train') {
            let [heroName, trainingEnergy] = info;

            if (superheros[heroName].energy == 100) {
                
                console.log(`${heroName} is already at full energy!`);
            } else {
                let energyGained = Math.min(100 - superheros[heroName].energy, trainingEnergy);

                superheros[heroName].energy += Number(energyGained);
                console.log(`${heroName} has trained and gained ${energyGained} energy!`);
            }
        } if (command == 'Learn') {
            let [heroName, newSuperpower] = info;

            if (superheros[heroName].superpowers.includes(newSuperpower)) {
                console.log(`${heroName} already knows ${newSuperpower}.`);
            } else {
                superheros[heroName].superpowers.push(newSuperpower);
                console.log(`${heroName} has learned ${newSuperpower}!`);
            }
        }
    }

    Object.keys(superheros).forEach((hero) => {
        console.log(`Superhero: ${hero}`);
        console.log(` - Superpowers: ${superheros[hero].superpowers.join(', ')}`);
        console.log(` - Energy: ${superheros[hero].energy}`);
    })
}

// superheroAlliance([
//     "3",
//     "Iron Man-Repulsor Beams,Flight-80",
//     "Thor-Lightning Strike,Hammer Throw-10",
//     "Hulk-Super Strength-60",
//     "Use Power * Iron Man * Flight * 30",
//     "Train * Thor * 20",
//     "Train * Hulk * 50",
//     "Learn * Hulk * Thunderclap",
//     "Use Power * Hulk * Thunderclap * 70",
//     "Evil Defeated!"
// ])

superheroAlliance([
    "2",
    "Iron Man-Repulsor Beams,Flight-20",
    "Thor-Lightning Strike,Hammer Throw-100",
    "Train * Thor * 20",
    "Use Power * Iron Man * Repulsor Beams * 30",
    "Evil Defeated!"
])
