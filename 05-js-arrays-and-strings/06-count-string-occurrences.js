function countOccurrences(text, word) {
    let count = 0;
    let textArr = text.split(" ");
    for (let w of textArr) {
        if (w == word) {
            count++;
        };
    };
    console.log(count)
};

function countOccurrences(text, word) {
    let regWord = '\\b' + word + '\\b';
    const regex = new RegExp(regWord, 'g');
    let count = text.match(regex);
    console.log(count ? count.length : 0);
};

function countOccurrences(text, word) {
    let regWord = '\\b' + word + '\\b';
    const regex = new RegExp(regWord, 'g');
    let count = text.match(regex) || [];
    console.log(count.length);
};


function countOccurrences(text, word) {
    const textArr = text.split(" ");
    const count = textArr.filter(w => w == word).length;
    console.log(count)
};

countOccurrences('This is a word and it also is a sentence', 'tis')
