function townsInfo(inputArr) {
    let towns = [];

    inputArr.forEach(
        (el) => towns.push(
            {
                town: el.split(' | ')[0],
                latitude: Number(el.split(' | ')[1]).toFixed(2),
                longitude: Number(el.split(' | ')[2]).toFixed(2)
            }
        )
    );

    towns.forEach((t) => console.log(t));
}


// console.log(townsInfo(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']));
// console.log(townsInfo(['Plovdiv | 136.45 | 812.575']));