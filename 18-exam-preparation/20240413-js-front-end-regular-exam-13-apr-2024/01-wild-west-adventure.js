function adventure(inputArr) {
    let num = inputArr.shift();
    let posse = {};
    for (let i = 0; i < num; i++) {
        let [heroName, hP, bullets] = inputArr.shift().split(' ');
        posse[heroName] = { hP: Number(hP), bullets: Number(bullets) };
    }

    for (let commandInfo of inputArr) {
        let [command, ...info] = commandInfo.split(' - ')
        if (command == 'Ride Off Into Sunset') break;

        if (command == 'FireShot') {
            let [characterName, target] = info;
            if (posse[characterName].bullets > 0) {
                posse[characterName].bullets -= 1;

                console.log(`${characterName} has successfully hit ${target} and now has ${posse[characterName].bullets} bullets!`);
            } else {
                console.log(`${characterName} doesn't have enough bullets to shoot at ${target}!`);
            }

        } else if (command == 'TakeHit') {
            let [characterName, damage, attacker] = info;
            damage = Number(damage);

            if (posse[characterName].hP - damage > 0) {
                posse[characterName].hP -= damage;

                console.log(`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${posse[characterName].hP} HP!`);
            } else {
                delete posse[characterName];

                console.log(`${characterName} was gunned down by ${attacker}!`);
            }

        } else if (command == 'Reload') {
            let [characterName] = info;

            if (posse[characterName].bullets < 6) {
                let bulletsReloaded = 6 - posse[characterName].bullets;
                posse[characterName].bullets = 6;

                console.log(`${characterName} reloaded ${bulletsReloaded} bullets!`);
            } else {
                console.log(`${characterName}'s pistol is fully loaded!`)
            }

        } else if (command == 'PatchUp') {
            let [characterName, amount] = info;
            amount = Number(amount);

            if (posse[characterName].hP == 100) {
                console.log(`${characterName} is in full health!`)
            } else {
                let amountRecovered = Math.min(amount, 100 - posse[characterName].hP)
                posse[characterName].hP += amountRecovered;

                console.log(`${characterName} patched up and recovered ${amountRecovered} HP!`)
            }
        }
    }

    Object.keys(posse).forEach((hero) => {
        console.log(`${hero}\n HP: ${posse[hero].hP}\n Bullets: ${posse[hero].bullets}`)
    })
}

// adventure(["2",
//     "Jesse 100 4",
//     "Walt 100 5",
//     "FireShot - Jesse - Bandit",
//     "TakeHit - Walt - 30 - Bandit",
//     "PatchUp - Walt - 20",
//     "Reload - Jesse",
//     "Ride Off Into Sunset"])

// adventure(["2",
//     "Gus 100 0",
//     "Walt 100 6",
//     "FireShot - Gus - Bandit",
//     "TakeHit - Gus - 100 - Bandit",
//     "Reload - Walt",
//     "Ride Off Into Sunset"])

adventure(["2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"])
 
 