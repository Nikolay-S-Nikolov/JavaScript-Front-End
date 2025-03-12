function passwordValidator(text) {
    let validPassword = true;

    if (text.length < 6 || text.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        validPassword = false;
    }

    if (text.match(/[^A-Za-z\d]/g)) {
        console.log("Password must consist only of letters and digits");
        validPassword = false;
    }

    if ((text.match(/[\d]/g) || []).length < 2) {
        console.log("Password must have at least 2 digits");
        validPassword = false;
    }

    if (validPassword) {
        console.log("Password is valid");
    }

}

passwordValidator('logIn');
console.log("-------")
passwordValidator('MyPass123');
console.log("-------")
passwordValidator('Pa$s$s');