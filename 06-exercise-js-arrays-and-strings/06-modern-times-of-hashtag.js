function findWords(text) {
    const pattern = /#([a-zA-Z]+)/g;
    let result = text.matchAll(pattern);

    for (const match of result){
        console.log(match[1]);
    };
};

findWords('Nowadays everyone uses # to tag a #special word in #socialMedia')