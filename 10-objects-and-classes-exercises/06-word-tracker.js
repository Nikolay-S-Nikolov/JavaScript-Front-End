function wordTracker(inputArr) {
    let words = inputArr.shift().split(' ');
    let matches = [];

    for (let word of words) {
        let regex = new RegExp('^' + word + '$')
        let count = inputArr.filter((x) => x.match(regex)).length;
        matches.push({ 'word': word, 'count': count });
    }

    matches.sort((a, b) => b.count - a.count).forEach((x) => console.log(`${x.word} - ${x.count}`));
}

// wordTracker([
//     'this sentence', 
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
//     ]
//     );
// wordTracker([
//     'is the',
//     'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
// );