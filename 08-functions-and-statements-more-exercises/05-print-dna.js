function printDnA(number) {
    let helix = [['A', 'T'], ['C', 'G'], ['T', 'T'], ['A', 'G'], ['G', 'G']];
    let helixMapper = {
        0: (x, y) => console.log(`**${x}${y}**`),
        1: (x, y) => console.log(`*${x}--${y}*`),
        2: (x, y) => console.log(`${x}----${y}`),
        3: (x, y) => console.log(`*${x}--${y}*`),
    };

    for (let i = 0; i < number; i++) {
        let x = helix[i % helix.length][0];
        let y = helix[i % helix.length][1];
        helixMapper[i % 4](x, y);
    }
}

printDnA(10);