function meetingsManager(stringArr) {
    let week = {};

    for (let info of stringArr) {
        let [day, name] = info.split(' ');

        if (week.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            week[day] = name;
            console.log(`Scheduled for ${day}`);
        }

    }
    for (let key in week){
        console.log(`${key} -> ${week[key]}`);
    }
}

meetingsManager(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
   )