function farmManagement(inputArr) {
    let farmers = {};
    const num = Number(inputArr.shift());
    const commandMapper = {
        'Execute': execute,
        'Change Area': changeArea,
        'Learn Task': learnTask
    };

    for (let i = 0; i < num; i++) {
        let [farmerName, workArea, task] = inputArr.shift().split(' ');
        farmers[farmerName] = { workArea, 'tasks': task.split(',') };
    }

    for (let commandInfo of inputArr) {
        let [command, ...args] = commandInfo.split(' / ');
        if (command == 'End') break;

        commandMapper[command](...args);
    }

    Object.keys(farmers).forEach(printFarmerInfo);

    function execute(name, area, task) {
        const canExecuteTask = farmers[name].workArea == area && farmers[name].tasks.includes(task);

        if (canExecuteTask) {
            console.log(`${name} has executed the task: ${task}!`);
        } else {
            console.log(`${name} cannot execute the task: ${task}.`);
        }
    }

    function changeArea(name, newArea) {
        farmers[name].workArea = newArea;
        console.log(`${name} has changed their work area to: ${newArea}`);
    }

    function learnTask(name, newTask) {
        const knowsTask = farmers[name].tasks.includes(newTask);

        if (knowsTask) {
            console.log(`${name} already knows how to perform ${newTask}.`);
        } else {
            farmers[name].tasks.push(newTask);
            console.log(`${name} has learned a new task: ${newTask}.`);
        }
    }

    function printFarmerInfo(farmer){
        let tasks = farmers[farmer].tasks.sort((a,b)=>a.localeCompare(b))
        console.log(`Farmer: ${farmer}, Area: ${farmers[farmer].workArea}, Tasks: ${tasks.join(', ')}`)
    }
}

// farmManagement([
//     "2",
//     "John garden watering,weeding",
//     "Mary barn feeding,cleaning",
//     "Execute / John / garden / watering",
//     "Execute / Mary / garden / feeding",
//     "Learn Task / John / planting",
//     "Execute / John / garden / planting",
//     "Change Area / Mary / garden",
//     "Execute / Mary / garden / cleaning",
//     "End"
// ]
// )

farmManagement([
    "3",
    "Alex apiary harvesting,honeycomb",
    "Emma barn milking,cleaning",
    "Chris garden planting,weeding",
    "Execute / Alex / apiary / harvesting",
    "Learn Task / Alex / beeswax",
    "Execute / Alex / apiary / beeswax",
    "Change Area / Emma / apiary",
    "Execute / Emma / apiary / milking",
    "Execute / Chris / garden / watering",
    "Learn Task / Chris / pruning",
    "Execute / Chris / garden / pruning",
    "End"
  ]
  
)