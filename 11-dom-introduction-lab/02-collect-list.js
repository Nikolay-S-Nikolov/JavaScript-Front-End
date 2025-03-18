function extractText() {
    let elements = Array.from(document.getElementById('items').children);
    let result = [];
    
    for (let element of elements){
        result.push(element.textContent);
    }

    document.getElementById('result').textContent = result.join('\n');
}