function loginCheck(strArr) {

    const username = strArr.shift();
    const password = username.split('').reverse().join('');
    let i = 0;

    while (true) {

        if (strArr[i] == password) {
            console.log(`User ${username} logged in.`);
            break;
        };

        if (strArr[i] == undefined || i == 3) {
            console.log(`User ${username} blocked!`);
            break;
        };

        console.log("Incorrect password. Try again.");
        i++;

    };

};


/**
*@param {string} str;
*/

// Reverese string with recurtion
function reverseString(str) {
    if (str === '') {
        return '';
    } else {
        return reverseString(str.substring(1)) + str.charAt(0);
    };
};


// Reverese string with recurtion and conditional operator
function reverseString(str) {
    return (str == '') ? '' : reverseString(str.substring(1)) + str.charAt(0);
};

/**
*@param {array} strArr;
*/ 

// using Reverese string with recurtion
function loginCheck(strArr) {

    const username = strArr.shift();
    const password = reverseString(username);
    let i = 0;

    while (true) {

        if (strArr[i] == password) {
            console.log(`User ${username} logged in.`);
            break;
        };

        if (strArr[i] == undefined || i == 3) {
            console.log(`User ${username} blocked!`);
            break;
        };

        console.log("Incorrect password. Try again.");
        i++;

    };

};

loginCheck(['Acer', 'login', 'go', 'let me in', 'recA']);
loginCheck(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);