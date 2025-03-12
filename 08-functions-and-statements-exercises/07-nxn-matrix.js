 function nXnMatrix(number){
    for (let j=0;j<number;j++){
        let row = '';
        for (let j=0;j<number;j++){
            row+=`${number} `;
        }
        console.log(row);
    }
 }

 nXnMatrix(3);