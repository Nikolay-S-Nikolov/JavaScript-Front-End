function flightSchedule(inputArr){
    let [flightsArr,canceldArr,command] = inputArr;
    let schedule = [];

    for (let flightInfo of flightsArr){
        let [flightNum, ...destination] = flightInfo.split(' ');
        schedule.push({
            'flightNum': flightNum, 
            'Destination': destination.join(' '), 
            'status': 'Ready to fly' 
        });
    }

    for (let flightChange of canceldArr){
        let [flight,newStatus] = flightChange.split(' ');
        let changedFligth = schedule.filter((x)=>x.flightNum == flight)[0];
        if(changedFligth){
            changedFligth.status = newStatus;
        }
    }

    let result = schedule.filter((x)=>x.status == command[0]);
    result.forEach((x)=>console.log(
        `{ Destination: '${x.Destination}', Status: '${x.status}' }`
        ));
}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
     'WN498 Las Vegas',
     'WN3145 Ohio',
     'WN612 Alabama',
     'WN4010 New York',
     'WN1173 California',
     'DL2120 Texas',
     'KL5744 Illinois',
     'WN678 Pennsylvania'],
     ['DL2120 Cancelled',
     'WN612 Cancelled',
     'WN1173 Cancelled',
     'SK330 Cancelled'],
     ['Ready to fly']
 ]
 )