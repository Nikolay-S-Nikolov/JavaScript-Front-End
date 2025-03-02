function pyramid(base, increment) {

    let layer = 1;
    let stones = 0;
    let marbles = 0;
    let lapis = 0;


    while (base > 2) {
        layer % 5 == 0 ? lapis += base * 4 - 4 : marbles += base * 4 - 4;
        stones += (base - 2) ** 2;
        base -= 2;
        layer++;
    };

    console.log(`Stone required: ${Math.ceil(stones*increment)}`);
    console.log(`Marble required: ${Math.ceil(marbles*increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis*increment)}`);
    console.log(`Gold required: ${Math.ceil(base*base*increment)}`);
    console.log(`Final pyramid height: ${Math.floor(layer*increment)}`);

};

pyramid(23,0.5);