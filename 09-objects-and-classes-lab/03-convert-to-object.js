function jsonToObj(jsonString){
    let myObj= JSON.parse(jsonString);
    let entries = Object.entries(myObj);
    for (let [key,value] of entries){
        console.log(`${key}: ${value}`);
    }
}


jsonToObj('{"name": "George", "age": 40, "town": "Sofia"}');