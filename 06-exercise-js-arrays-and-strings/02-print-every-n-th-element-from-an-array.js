function sfn(arr, n) {
    let result = [];

    for (let i = 0; i < arr.length; i += n) {
        result.push(arr[i]);
    };

    return result;
};

sfn(['5', '20', '31', '4', '20'], 2)
sfn(['dsa', 'asd', 'test', 'tset'], 2)
sfn(['1', '2', '3', '4', '5'], 6)