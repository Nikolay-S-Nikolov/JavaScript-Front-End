function stringSubstring(word, text) {
    let textArr = text.split(' ').map((i) => i.toLowerCase());

    if (textArr.includes(word.toLowerCase())) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    };

};

stringSubstring('javascript',
    'JavaScript is the best programming language'
);

stringSubstring('python',
    'JavaScript is the best programming language'
);