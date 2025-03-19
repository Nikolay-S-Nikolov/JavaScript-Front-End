function extract(content) {
    let text = document.getElementById(content).textContent;
    let pattern = /\((.*?)\)/g;
    let result = [];

    for (let ele of text.matchAll(pattern)){
        result.push(ele[1]);
    }

    return result.join(', ');
}