function loadRepos() {
	let baseUrl = 'https://api.github.com/users/';
	let parrent = document.getElementById('repos');
	let userName = document.getElementById('username').value;
	
	parrent.replaceChildren();

	fetch(`${baseUrl}${userName}/repos`)
		.then(response => response.json())
		.then(data => data.forEach(repo => addRepoToList(parrent, userName, repo.name)))
		.catch(error => console.error(error))

	function addRepoToList(parrentDoc, user, repoName) {
		let eleLi = document.createElement('li');
		let eleA = document.createElement('a');

		Object.assign(
			eleA,
			{ 'href': `https://github.com/${user}/${repoName}` },
			{ 'textContent': `${user}/${repoName}` }
		);
		
		eleLi.appendChild(eleA)
		parrentDoc.appendChild(eleLi)
	}
}