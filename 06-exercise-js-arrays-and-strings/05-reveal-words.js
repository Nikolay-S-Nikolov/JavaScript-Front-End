function revealWords(words, text) {
    const wordsArr = words.split(', ');

    for (const w of wordsArr) {
        text = text.replace('*'.repeat(w.length), w);
    };

    console.log(text);
};


revealWords('great', 'softuni is ***** place for learning new programming languages')
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')