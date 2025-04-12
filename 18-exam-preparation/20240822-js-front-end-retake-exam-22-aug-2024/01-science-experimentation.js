function scienceExperimentation(inputArr) {
    let chemicals = {};
    let commandMapper = {
        'Mix': mix,
        'Replenish': replenish,
        'Add Formula': addFormula
    };
    let num = Number(inputArr.shift());

    for (let i = 0; i < num; i++) {
        [chemicalName, quantity] = inputArr.shift().split(' # ');
        chemicals[chemicalName] = { quantity: Number(quantity) };
    }

    for (let commandInfo of inputArr) {
        let [command, ...args] = commandInfo.split(' # ');
        if (command == 'End') break;

        commandMapper[command](...args);
    }

    Object.keys(chemicals).forEach(printChemInfo);

    function mix(chemicalOne, chemicalTwo, amount) {
        amount = Number(amount);
        let noQuantity = chemicals[chemicalOne].quantity < amount || chemicals[chemicalTwo].quantity < amount;

        if (noQuantity) {
            console.log(`Insufficient quantity of ${chemicalOne}/${chemicalTwo} to mix.`);
        } else {
            chemicals[chemicalOne].quantity -= amount;
            chemicals[chemicalTwo].quantity -= amount;
            console.log(`${chemicalOne} and ${chemicalTwo} have been mixed. ${amount} units of each were used.`);
        };
    }

    function replenish(chemName, amount) {
        amount = Number(amount);

        if (chemicals.hasOwnProperty(chemName)) {
            let addedAmount = Math.min(500 - chemicals[chemName].quantity, amount);
            chemicals[chemName].quantity += addedAmount;

            if (chemicals[chemName].quantity == 500) {
                console.log(`${chemName} quantity increased by ${addedAmount} units, reaching maximum capacity of 500 units!`);
            } else {
                console.log(`${chemName} quantity increased by ${amount} units!`);
            }
        } else {
            console.log(`The Chemical ${chemName} is not available in the lab.`);
        }
    }

    function addFormula(chemName, formula) {
        if (chemicals.hasOwnProperty(chemName)) {
            chemicals[chemName]['formula'] = formula;
            console.log(`${chemName} has been assigned the formula ${formula}.`);
        } else {
            console.log(`The Chemical ${chemName} is not available in the lab.`);
        }
    }

    function printChemInfo(chemical) {
        if (chemicals[chemical].hasOwnProperty('formula')) {
            console.log(`Chemical: ${chemical}, Quantity: ${chemicals[chemical].quantity}, Formula: ${chemicals[chemical].formula}`);
        } else {
            console.log(`Chemical: ${chemical}, Quantity: ${chemicals[chemical].quantity}`);
        }
    }
}

scienceExperimentation(['4',
    'Water # 200',
    'Salt # 100',
    'Acid # 50',
    'Base # 80',
    'Mix # Water # Salt # 50',
    'Replenish # Salt # 150',
    'Add Formula # Acid # H2SO4',
    'End']
)