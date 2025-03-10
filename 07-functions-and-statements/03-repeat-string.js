function repeatString(string, count){
    let result = '';
    for (let i=0; i<count;i++){
        result+=string;
    }
    console.log(result);
}

repeatString("abc", 3);