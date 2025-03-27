function loadCommits() {
    let baseUrl = 'https://api.github.com/repos/';
    let user = document.getElementById('username');
    let repo = document.getElementById('repo');
    let parrent = document.getElementById('commits')
    parrent.replaceChildren()

    fetch(`${baseUrl}${user.value}/${repo.value}/commits`)
        .then(response => response.json())
        .then(data => {

            if (data.message == 'Not Found') {
                addRepoList(data, true)

            } else {
                data.forEach(commit => addRepoList(commit))
            }
        })
        .catch(error => console.error(error))

    function addRepoList(commit, notFound) {
        let newLi = document.createElement('li');
        let liText = ''

        liText = notFound ? `Error: ${commit.status} (Not Found)}`
            : `${commit.author.login}: ${commit.commit.message}`;

        Object.assign(newLi, { 'textContent': liText })
        parrent.appendChild(newLi)

    }
}