function factorialDivision(num1, num2){
    let fact1=num1;
    let fact2=num2;
    
    for (let i=num1-1;i>1; i--){
        fact1*=i;
    }

    for (let j=num2-1;j>1; j--){
        fact2*=j;
    }

    console.log(`${(fact1/fact2).toFixed(2)}`);

}

factorialDivision(5,2);