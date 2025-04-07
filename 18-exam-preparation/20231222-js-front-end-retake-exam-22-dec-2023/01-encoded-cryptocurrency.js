function encodedCryptocurrency(inputArr) {
    let message = inputArr.shift();

    for (let commandInfo of inputArr) {
        let [command, ...info] = commandInfo.split('?');

        if (command == 'Buy') break;

        if (command == 'TakeEven') {
            message = message.split('').filter((x, i) => i % 2 == 0).join('');
            console.log(message);
        } else if (command == 'ChangeAll') {
            [substring, replacement] = info;

            while (message.includes(substring)) {
                message = message.replace(substring, replacement);
            }
            console.log(message);
        } else if (command == 'Reverse') {
            [substring] = info;

            if (message.includes(substring)) {
                message = message.replace(substring, '');
                message += substring.split('').reverse().join('');

                console.log(message);
            } else {
                console.log('error');
            }
        }
    }
    console.log(`The cryptocurrency is: ${message}`);
}

encodedCryptocurrency(["PZDfA2PkAsakhnefZ7aZ", 
    "TakeEven",
    "TakeEven",
    "TakeEven",
    "ChangeAll?Z?X",
    "ChangeAll?A?R",
    "Reverse?PRX",
    "Buy"]

)
// encodedCryptocurrency(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
//     "TakeEven",
//     "Reverse?!nzahc",
//     "ChangeAll?m?g",
//     "Reverse?adshk",
//     "ChangeAll?z?i",
//     "Buy"]
// )