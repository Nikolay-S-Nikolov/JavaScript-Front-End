function solve() {
    let text = document.getElementById('input').value;
    let result = document.getElementById('output');
  
    text = text.split('.').map((item)=> item.trim()).filter(Boolean);
  
    for (let i = 0; i < text.length; i += 3) {
      let paragraph = text.slice(i, i + 3);
  
      let p = document.createElement('p');
      p.textContent = paragraph.join('. ') + '.';
  
      result.append(p);
    }
  }