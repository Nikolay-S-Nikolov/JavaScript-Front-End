function convertToJSON(firstName, lastName, hairColor ){
    let person = {};
    person.name=firstName;
    person.lastName = lastName;
    person.hairColor =hairColor;

    return JSON.stringify(person);
}

console.log(convertToJSON('George', 'Jones', 'Brown'))