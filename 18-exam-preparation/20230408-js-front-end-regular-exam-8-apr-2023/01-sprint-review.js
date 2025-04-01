function sprintReview(inputArr) {
    let EngNum = inputArr.shift();
    let sprintInfo = {};

    for (let i = 0; i < EngNum; i++) {

        let [assignee, taskId, title, jobStatus, estimatedPoints] = inputArr.shift().split(':');
        if (!sprintInfo[assignee]) sprintInfo[assignee] = {};
        sprintInfo[assignee][taskId] = { title, jobStatus, estimatedPoints };
    }

    for (let comandInfo of inputArr) {
        let [command, ...info] = comandInfo.split(':');

        if (command == 'Add New') {

            let [assignee, taskId, title, jobStatus, estimatedPoints] = info;

            if (!(assignee in sprintInfo)) {

                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else {

                sprintInfo[assignee][taskId] = { title, jobStatus, estimatedPoints };
            }
        } else if (command == 'Change Status') {
            let [assignee, taskId, newStatus] = info;

            if (!(assignee in sprintInfo)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);

            } else if (!(taskId in sprintInfo[assignee])) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);

            } else {
                sprintInfo[assignee][taskId].jobStatus = newStatus;
            }
        } else if (command == 'Remove Task') {
            let [assignee, index] = info;

            if (!(assignee in sprintInfo)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);

            } else {
                let taskArr = Object.keys(sprintInfo[assignee]);

                if (index < 0 || index > taskArr.length - 1) { // TO DO checked if index can be negative
                    console.log("Index is out of range!");

                } else {
                    let taskIdToRemove = taskArr[index];
                    delete sprintInfo[assignee][taskIdToRemove];
                }
            }
        }
    }

    let toDoTasksTotalPoints = 0;
    let inProgressTasksTotalPoints = 0;
    let codeReviewTasksTotalPoints = 0;
    let doneTasksTotalPoints = 0;

    Object.keys(sprintInfo).forEach((currAssignee) => {
        Object.keys(sprintInfo[currAssignee]).forEach((job) => {

            let currentStatus = sprintInfo[currAssignee][job].jobStatus;

            if (currentStatus == 'ToDo') {
                toDoTasksTotalPoints += Number(sprintInfo[currAssignee][job].estimatedPoints)

            } else if (currentStatus == 'In Progress') {
                inProgressTasksTotalPoints += Number(sprintInfo[currAssignee][job].estimatedPoints)

            } else if (currentStatus == 'Code Review') {
                codeReviewTasksTotalPoints += Number(sprintInfo[currAssignee][job].estimatedPoints)

            } else if (currentStatus == 'Done') {
                doneTasksTotalPoints += Number(sprintInfo[currAssignee][job].estimatedPoints)
            }
        })
    })

    console.log(`ToDo: ${toDoTasksTotalPoints}pts`);
    console.log(`In Progress: ${inProgressTasksTotalPoints}pts`);
    console.log(`Code Review: ${codeReviewTasksTotalPoints}pts`);
    console.log(`Done Points: ${doneTasksTotalPoints}pts`);

    if (doneTasksTotalPoints >= (toDoTasksTotalPoints + codeReviewTasksTotalPoints + inProgressTasksTotalPoints)) {
        console.log('Sprint was successful!');

    } else {
        console.log('Sprint was unsuccessful...');
    }
}


sprintReview([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
])
// sprintReview([
//     '5',
//     'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//     'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//     'Peter:BOP-1211:POC:Code Review:5',
//     'Georgi:BOP-1212:Investigation Task:Done:2',
//     'Mariya:BOP-1213:New Account Page:In Progress:13',
//     'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//     'Change Status:Peter:BOP-1290:ToDo',
//     'Remove Task:Mariya:1',
//     'Remove Task:Joro:1',
// ])