let baseUrl = 'http://localhost:3030/jsonstore/games/';

let loadGamesBtnEl = document.getElementById('load-games');
let addGamesBtnEl = document.getElementById('add-game');
let editGamesBtnEl = document.getElementById('edit-game');

let gNameEl = document.getElementById('g-name');
let typeEl = document.getElementById('type');
let playersEl = document.getElementById('players');

let gamesListEl = document.getElementById('games-list');

let currentGameId = '';

function takeGamesData() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(showAllGames)
        .catch(err => console.error(err));
}

function addGameData(obj) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(takeGamesData)
        .catch(err => console.error(err));
}

function updateGameData(updatedObj) {
    fetch(baseUrl + updatedObj._id, {
        method: 'PUT',
        body: JSON.stringify(updatedObj)
    })
        .then(res => res.json())
        .then(() => {
            [gNameEl, typeEl, playersEl].forEach(x => x.value = '');

            editGamesBtnEl.setAttribute('disabled', '');
            addGamesBtnEl.removeAttribute('disabled');
            takeGamesData();
        })
        .catch(err => console.error(err));
}

function deleteGameData(objId) {
    fetch(baseUrl + objId, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(takeGamesData)
        .catch(err => console.error(err));
}

function addGameDataEventListener() {
    let [gName, type, players] = [gNameEl.value, typeEl.value, playersEl.value];
    if (!gName || !type || !players) return;

    let newGame = { name: gName, type, players };
    [gNameEl, typeEl, playersEl].forEach(x => x.value = '');
    addGameData(newGame);
}

function showAllGames(games) {
    gamesListEl.innerHTML = '';
    Object.values(games).forEach((game) => {
        let mainDivEl = createElement('div', { className: 'board-game' }, gamesListEl);
        let contentDivEl = createElement('div', { className: 'content' }, mainDivEl);

        createElement('p', { textContent: game.name }, contentDivEl);
        createElement('p', { textContent: game.type }, contentDivEl);
        createElement('p', { textContent: game.players }, contentDivEl);

        let buttonsDivEl = createElement('div', { className: 'buttons-container' }, mainDivEl);
        let changeBtnEl = createElement('button', { className: 'change-btn', textContent: 'Change' }, buttonsDivEl);
        let deleteBtnEl = createElement('button', { className: 'delete-btn', textContent: 'Delete' }, buttonsDivEl);

        changeBtnEl.addEventListener('click', changeGame);
        deleteBtnEl.addEventListener('click', () => {
            mainDivEl.remove();
            deleteGameData(game._id);
        });

        function changeGame() {
            [gNameEl.value, typeEl.value, playersEl.value] = [game.name, game.type, game.players];
            mainDivEl.remove();
            addGamesBtnEl.setAttribute('disabled', '');
            editGamesBtnEl.removeAttribute('disabled');

            currentGameId = game._id;
            editGamesBtnEl.removeEventListener('click', editGamesEventListener);
            editGamesBtnEl.addEventListener('click', editGamesEventListener);
        }
    })
}


function editGamesEventListener() {
    console.log(currentGameId);
    let editedGame = {
        name: gNameEl.value,
        type: typeEl.value,
        players: playersEl.value,
        _id: currentGameId
    };

    updateGameData(editedGame);
}

function createElement(tag, properties, container = null) {
    let newEl = document.createElement(tag);
    Object.assign(newEl, properties);
    if (container) container.appendChild(newEl);
    return newEl;
}

loadGamesBtnEl.addEventListener('click', takeGamesData);
addGamesBtnEl.addEventListener('click', addGameDataEventListener);