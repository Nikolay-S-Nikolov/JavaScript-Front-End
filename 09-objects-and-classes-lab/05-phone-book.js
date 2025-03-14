function phoneBookInfo(input) {
    let phonebook = {};
    for (let info of input) {
        let [name, phone] = info.split(" ");
        phonebook[name]=phone;
    }

    for (let key in phonebook){
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

phoneBookInfo(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);