function softUniStudents(inputArr) {
    let courses = {};
    let courseStudent = {};

    for (let info of inputArr) {
        if (info.includes(': ')) {
            let [courseName, courseCapacity] = info.split(': ');
            courseCapacity = Number(courseCapacity);

            if (courseName in courses) {
                courses[courseName] += courseCapacity;
            } else {
                courses[courseName] = courseCapacity;
                courseStudent[courseName] = [];
            }

        } else if (info.includes('[')) {
            let [username, info1] = info.split('[');
            let [creditscount, info2] = info1.split('] ');
            let [email, courseName] = info2.split('with email ')[1].split(' joins ');

            if (courseName in courses && courses[courseName] > 0) {
                courses[courseName] -= 1;

                courseStudent[courseName].push({
                    username,
                    credits: Number(creditscount),
                    email
                });
            }
        }
    }

    let sortedCourses = Object.entries(courseStudent).sort(
        (a, b) => b[1].length - a[1].length
    );

    for (let [nameCourse, studentsList] of sortedCourses) {
        console.log(`${nameCourse}: ${courses[nameCourse]} places left`);

        studentsList.sort((a, b) => b.credits - a.credits);

        for (let student of studentsList) {
            console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
        }
    }
}


// softUniStudents(['JavaBasics: 2',
//     'user1[25] with email user1@user.com joins C#Basics',
//     'C#Advanced: 3', 'JSCore: 4',
//     'user2[30] with email user2@user.com joins C#Basics',
//     'user13[50] with email user13@user.com joins JSCore',
//     'user1[25] with email user1@user.com joins JSCore',
//     'user8[18] with email user8@user.com joins C#Advanced',
//     'user6[85] with email user6@user.com joins JSCore',
//     'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics',
//     'user45[105] with email user45@user.com joins JSCore',
//     'user007[20] with email user007@user.com joins JSCore',
//     'user700[29] with email user700@user.com joins JSCore',
//     'user900[88] with email user900@user.com joins JSCore']);