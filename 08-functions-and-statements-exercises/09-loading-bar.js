function loadingBar(number) {
    
    if(number==100){
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }else{
        let result ='[' + '%'.repeat(number/10) + '.'.repeat(10-(number/10))+ ']';
        console.log(`${number}% ${result}`);
        console.log("Still loading...");
    }
}

loadingBar(100);