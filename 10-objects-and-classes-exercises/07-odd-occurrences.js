function oddOccurrences(input) {
    let wordsArr = input.split(' ');
    let words = [];

    for (let currentWord of wordsArr) {
        let word = currentWord.toLowerCase()
        let regex = new RegExp('^' + word + '$', 'i');
        let count = wordsArr.filter((x) => x.match(regex)).length;

        if (count % 2 != 0 && !words.includes(word)) {
            words.push(word);
        }
    }
    console.log(...words);
}



// oddOccurrences('Java C# Php PHP Java PhP 3 c# 3 1 5 C#');