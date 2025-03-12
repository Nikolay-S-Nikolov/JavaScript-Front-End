function charInRange(char1, char2) {
    let result = '';
    let charArr = [char1, char2].sort();
    let start = charArr[0].charCodeAt(0) + 1;
    let end = charArr[1].charCodeAt(0);

    for (let i = start; i < end; i++) {
        result += String.fromCharCode(i) + ' ';
    }
    console.log(result);
}

charInRange('a', 'd');
charInRange('#', ':');
charInRange('C', '#');




