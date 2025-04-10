function spellbook(inputArr) {
    let spell = inputArr[0];
    let i = 1;
    
    while (inputArr[i] != 'End') {
        let [command, ...info] = inputArr[i++].split('!')

        if (command == 'RemoveEven') {
            spell = spell.split('').filter((char, idx) => idx % 2 == 0).join('');

            console.log(spell);

        } else if (command == 'TakePart') {
            let [fromIndex, toIndex] = info;
            spell = spell.substring(Number(fromIndex), Number(toIndex));

            console.log(spell);

        } else if (command == 'Reverse') {
            let substring = info[0];

            if (spell.includes(substring)) {
                spell = spell.replace(substring, '');

                substring = substring.split('').reverse().join('');
                spell += substring;

                console.log(spell);

            } else {
                console.log('Error');
            }
        }
    }
    console.log(`The concealed spell is: ${spell}`)
}

// spellbook(["asAsl2adkda2mdaczsa",
//     "RemoveEven",
//     "TakePart!1!9",
//     "Reverse!maz",
//     "End"])

spellbook(["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m", 
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"])
    