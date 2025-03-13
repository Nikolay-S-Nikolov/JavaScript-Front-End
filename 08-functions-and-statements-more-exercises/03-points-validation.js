function pointsValidation(pointsArr) {
    for (let i = 0; i < 5; i+=2) {
        let distance = 0;
        let x1 = i == 4 ? pointsArr[0] : pointsArr[i];
        let x2 = i == 4 ? pointsArr[2] : 0;
        let y1 = i == 4 ? pointsArr[1] : pointsArr[i + 1];        
        let y2 = i == 4 ? pointsArr[3] : 0;
        
        distance = Math.sqrt((x2- x1) ** 2 + (y2- y1) ** 2);
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(distance) ? '':'in'}valid`);
    }
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);