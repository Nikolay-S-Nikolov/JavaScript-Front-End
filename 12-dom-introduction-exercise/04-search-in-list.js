function solve() {

    let towns = Array.from(document.getElementById('towns').children);
 
    for (let town of towns){
       town.style.textDecoration = '';
       town.style.fontWeight = '';
       town.style.opacity = '0.5';
    }
 
    let searchedText = document.getElementById('searchText').value;
 
    let result = towns.filter((x)=>(x.textContent).includes(searchedText));
 
    for (let ele of result){   
       ele.style.textDecoration = 'underline';
       ele.style.fontWeight = 'bold';
       ele.style.opacity = '1';
    }
 
    document.getElementById('result').textContent = `${result.length} matches found`;
 }