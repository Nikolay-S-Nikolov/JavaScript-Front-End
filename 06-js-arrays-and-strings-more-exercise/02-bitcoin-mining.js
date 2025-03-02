/**
 * @param {Array} goldArr;
 */


function bitcoinMining(goldArr) {

    let money = 0;
    let day = 0;
    let count = 0;
    const bitcoinPriceLv = 11949.16;
    const gramGoldPriceLv = 67.51;

    for (let i = 0; i < goldArr.length; i++) {
        let dailyMined = (i + 1) % 3 == 0 ? goldArr[i] * 0.7 : goldArr[i];
        money += dailyMined * gramGoldPriceLv;

        if (money >= bitcoinPriceLv) {
            if (day === 0) {
                day = i + 1;
            };
            let bougthBitcoins = Math.floor(money / bitcoinPriceLv);
            count += bougthBitcoins;
            money -= bougthBitcoins * bitcoinPriceLv;
        };

    };

    console.log(`Bought bitcoins: ${count}`);

    if (count) {
        console.log(`Day of the first purchased bitcoin: ${day}`);
    };

    console.log(`Left money: ${money.toFixed(2)} lv.`);
};

function bitcoinMining(goldArr) {

    let money = 0;
    let day = 0;
    let count = 0;
    const bitcoinPriceLv = 11949.16;
    const gramGoldPriceLv = 67.51;

    for (let i = 0; i < goldArr.length; i++) {
        let dailyMined = (i + 1) % 3 == 0 ? goldArr[i] * 0.7 : goldArr[i];
        money += dailyMined * gramGoldPriceLv;

        if (money >= bitcoinPriceLv) {
            day = day === 0 ? i + 1 : day;
            let bougthBitcoins = Math.floor(money / bitcoinPriceLv);
            count += bougthBitcoins;
            money -= bougthBitcoins * bitcoinPriceLv;
        };

    };

    console.log(`Bought bitcoins: ${count}`);

    count ? console.log(`Day of the first purchased bitcoin: ${day}`) : null;

    console.log(`Left money: ${money.toFixed(2)} lv.`);
};

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);

