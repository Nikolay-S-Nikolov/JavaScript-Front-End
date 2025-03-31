function horseRacing(inputArr) {
    let [horses, ...commands] = [...inputArr];

    horses = horses.split('|');

    for (let command of commands) {
        let [action, ...actionInfo] = command.split(' ');

        if (action == 'Finish') break;

        if (action == 'Miracle') {
            let lastHorse = horses.shift()
            horses.push(lastHorse)
            console.log(`What a miracle - ${lastHorse} becomes first.`)

        } else if (action == 'Retake') {
            let overtakingHorseIndex = horses.indexOf(actionInfo[0]);
            let overtakenHorseIndex = horses.indexOf(actionInfo[1]);

            if (overtakingHorseIndex < overtakenHorseIndex) {

                [horses[overtakingHorseIndex], horses[overtakenHorseIndex]] = [horses[overtakenHorseIndex], horses[overtakingHorseIndex]];

                console.log(`${actionInfo[0]} retakes ${actionInfo[1]}.`)
            }

        } else if (action == 'Trouble') {
            let troubleHorseIndex = horses.indexOf(actionInfo[0]);

            if (troubleHorseIndex > 0) {

                [horses[troubleHorseIndex], horses[troubleHorseIndex - 1]] = [horses[troubleHorseIndex - 1], horses[troubleHorseIndex]];

                console.log(`Trouble for ${actionInfo[0]} - drops one position.`)
            }
        } else if (action == 'Rage') {
            let rageHorseIndex = horses.indexOf(actionInfo[0]);
            let newIndex = Math.min(horses.length - 1, rageHorseIndex + 2);

            rageHorse = horses.splice(rageHorseIndex, 1)[0];
            horses.splice(newIndex, 0, rageHorse);

            console.log(`${actionInfo[0]} rages 2 positions ahead.`)
        }
    }
    console.log(horses.join('->'));
    console.log(`The winner is: ${horses[horses.length - 1]}`);
}


// horseRacing((['Onyx|Domino|Sugar|Fiona',
//     'Trouble Onyx',
//     'Retake Onyx Sugar',
//     'Rage Domino',
//     'Miracle',
//     'Finish'])
// )
// horseRacing((['Fancy|Lilly',
//     'Retake Lilly Fancy',
//     'Trouble Lilly',
//     'Trouble Lilly',
//     'Finish',
//     'Rage Lilly'])
// )
