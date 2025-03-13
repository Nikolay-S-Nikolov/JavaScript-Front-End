function carWash(commands) {
    let cleanliness = 0;
    let actionMapper = {
        'soap': (x) => x + 10,
        'water': (x) => x * 1.2,
        'vacuum cleaner': (x) => x * 1.25,
        'mud': (x) => x * 0.9
    }

    for (let action of commands) {
        cleanliness=actionMapper[action](cleanliness);
    }

    console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);