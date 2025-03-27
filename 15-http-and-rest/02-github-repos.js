function loadRepos() {
    fetch('https://api.github.com/users/testnakov/repos')
       .then(response => response.json())
       .then(data => console.log(JSON.stringify(data)))
       .catch(error => console.error(error))
 }
 
 