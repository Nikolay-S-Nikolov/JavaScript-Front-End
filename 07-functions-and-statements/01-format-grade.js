function gradeDescription(grade) {
    let description = '';
    
    if (grade < 3.00) {
        description = "Fail";
    } else if (grade < 3.50) {
        description = "Poor";
    } else if (grade < 4.50) {
        description = "Good";
    } else if (grade < 5.50) {
        description = "Very good";
    } else {
        description = "Excellent";
    }

    console.log(`${description} (${grade < 3 ? 2 : grade.toFixed(2)})`);
}

gradeDescription(3.33)
gradeDescription(4.5)
gradeDescription(2.99)