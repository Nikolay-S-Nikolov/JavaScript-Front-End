function armies(inputArr) {
    let leaderArmy = {};
    let leaderArmyCount = {};

    for (let data of inputArr) {
        if (data.split(' ').includes('arrives')) {
            let leaderName = data.split(' arrives')[0];
            leaderArmy[leaderName] = [];
        } else if (data.includes(':')) {
            let [leaderName, armyInfo] = data.split(': ');
            if (leaderName in leaderArmy) {
                let currArmy = {};
                let [armyName, armyCount] = armyInfo.split(', ');
                currArmy[armyName] = Number(armyCount);
                leaderArmy[leaderName].push(currArmy);
            }
        } else if (data.includes('+')) {
            let [nameArmy, countArmy] = data.split(' + ');
            for (let currentLeader in leaderArmy) {
                for (let army of leaderArmy[currentLeader]) {
                    if (nameArmy in army) {
                        army[nameArmy] += Number(countArmy);
                        break;
                    }
                }
            }
        } else if (data.split(' ').includes('defeated')) {
            let leaderName = data.split(' defeated')[0];
            delete leaderArmy[leaderName];
        }
    }

    for (leader in leaderArmy) {
        leaderArmyCount[leader] = 0;

        for (let am of leaderArmy[leader]) {
            leaderArmyCount[leader] += Object.values(am)[0];
        }
    }

    let sortedLeaders = Object.entries(leaderArmyCount).sort((a, b) => b[1] - a[1]);
    for (let armyData of sortedLeaders) {
        let currentArmy = []
        for (let arm of leaderArmy[armyData[0]]) {
            currentArmy.push(Object.entries(arm)[0])
        }
        leaderArmy[armyData[0]] = currentArmy.sort((a, b) => b[1] - a[1])
    }

    for (let sortedData of sortedLeaders){
        console.log(`${sortedData[0]}: ${sortedData[1]}`)
        for (let sortedArmy of leaderArmy[sortedData[0]]){
            console.log(`>>> ${sortedArmy[0]} - ${sortedArmy[1]}`)
        }
    }

    console.log(leaderArmy)


}

armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
])