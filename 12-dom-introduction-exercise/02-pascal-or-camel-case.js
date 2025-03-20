function solve() {
    let firstParameter = document.getElementById('text').value;
    let command = document.getElementById('naming-convention').value;
    let i;
  
    firstParameter = firstParameter.split(' ').map((x) => x.toLowerCase());
  
    if (command == 'Camel Case') {
      i = 1;
    } else if (command == 'Pascal Case') {
      i = 0;
    } else{
      document.getElementById('result').textContent = 'Error!';
      return;
    }
  
    for (i; i < firstParameter.length; i++) {
      firstParameter[i] = firstParameter[i].charAt(0).toUpperCase() + firstParameter[i].slice(1);
    }
  
    document.getElementById('result').textContent = firstParameter.join('');
  
  }