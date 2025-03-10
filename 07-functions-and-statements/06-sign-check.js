function signCheck(...args) {
    let counter = 0;

    for (let el of args.map((x) => `${x}`)) {
        el[0] == '-' ? counter++ : null;
    }
    
    console.log(counter % 2 == 1 ? "Negative" : "Positive");
}

signCheck(5, 12, -15);
signCheck(5, -12, -15);
signCheck(-5, -12, -15);
signCheck(5, 12, 15);