function addressBookInfo(info){
    let addressBook={};

    for (let token of info){
        let [name, address] = token.split(':');
        addressBook[name]=address;
    }

    let result = Object.entries(addressBook);

    for (let [key,value] of result.sort((a,b)=>a[0].localeCompare([b[0]]))){
        console.log(`${key} -> ${value}`);
    }
}

// addressBookInfo(['Bob:Huxley Rd',
//     'John:Milwaukee Crossing',
//     'Peter:Fordem Ave',
//     'Bob:Redwing Ave',
//     'George:Mesta Crossing',
//     'Ted:Gateway Way',
//     'Bill:Gateway Way',
//     'John:Grover Rd',
//     'Peter:Huxley Rd',
//     'Jeff:Gateway Way',
//     'Jeff:Huxley Rd']
//     );
