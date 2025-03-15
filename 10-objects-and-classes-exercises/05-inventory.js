function heroInventory(inputArr) {
    let heroesList = [];

    for (let heroData of inputArr) {
        let [name, level, items] = heroData.split(' / ');
        heroesList.push({ 'name': name, 'level': Number(level), 'items': items });
    }

    heroesList.sort((a,b)=>a.level-b.level).forEach(
        (x)=>console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`)
    );
}

// heroInventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
//     ]
//     );