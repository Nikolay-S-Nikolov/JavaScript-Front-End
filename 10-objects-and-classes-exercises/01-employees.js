function employeesInfo(input) {
    let employeesList = [];

    class Employees {
        constructor(employeeName, personalNum) {
            this.employeeName = employeeName;
            this.personalNum = personalNum;
        }
    }
    
    input.forEach((e) => employeesList.push(new Employees(e,e.length)));

    employeesList.forEach(
        (e) => console.log(`Name: ${e.employeeName} -- Personal Number: ${e.personalNum}`)
);
}

// employeesInfo(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
// employeesInfo(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);