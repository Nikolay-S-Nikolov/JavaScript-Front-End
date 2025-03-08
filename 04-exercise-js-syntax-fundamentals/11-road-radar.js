function roadRadar(speed, area) {
    let limit = 0;
    if (area == 'motorway') {
        limit = 130;
    } else if (area == 'interstate') {
        limit = 90;
    } else if (area == 'city') {
        limit = 50;
    } else if (area == 'residential') {
        limit = 20;
    };

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let status;
        let over = speed - limit;
        if (over <= 20) {
            status = 'speeding';
        } else if (over <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        };
        console.log(`The speed is ${over} km/h faster than the allowed speed of ${limit} - ${status}`);
    };
};


function roadRadar(speed, area) {
    let limit = 0;
    switch (area){
    case 'motorway': limit = 130; break;
    case 'interstate': limit = 90; break;
    case 'city': limit = 50; break;
    case'residential': limit = 20; break;
    };

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let status;
        let over = speed - limit;
        if (over <= 20) {
            status = 'speeding';
        } else if (over <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        };
        console.log(`The speed is ${over} km/h faster than the allowed speed of ${limit} - ${status}`);
    };
};


roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')

