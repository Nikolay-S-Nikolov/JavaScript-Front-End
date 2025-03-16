function schoolRegister(inputArr) {
    let register = {};

    for (let studentInfo of inputArr) {
        let [nameInfo, gradeInfo, scoreInfo] = studentInfo.split(', ');
        let name = nameInfo.split('Student name: ')[1];
        let lastGrade = Number(gradeInfo.split('Grade: ')[1]);
        let score = Number(scoreInfo.split('Graduated with an average score: ')[1]);

        if (score >= 3) {
            let key = lastGrade + 1;

            if (!(key in register)) {
                register[key] = [];
            }

            register[key].push({ 'name': name, 'score': score });
        }
    }

    for (let [key, value] of Object.entries(register)) {
        let studentsList = [];
        let scoreSum = 0;

        value.forEach((x) => {
            studentsList.push(x.name);
            scoreSum += x.score;
        });

        console.log(`${key} Grade`);
        console.log(`List of students: ${studentsList.join(', ')}`);
        console.log(`Average annual score from last year: ${(scoreSum / studentsList.length).toFixed(2)}`);
        console.log();

    }

}

schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]);