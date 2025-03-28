function solve() {
    let info = document.querySelector('.info');
    let buttonDepart = document.getElementById('depart');
    let buttonArrive = document.getElementById('arrive');

    let stopName = '';
    let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';
    let stopId = 'depot';

    function depart() {
        fetch(`${baseUrl}${stopId}`)
            .then(res => res.json())
            .then(data => {
                stopName = data.name;
                stopId = data.next;

                buttonDepart.disabled = true;
                buttonArrive.disabled = false;
                info.textContent = `Next stop ${stopName}`;
            })
            .catch(() => {
                buttonDepart.disabled = true;
                buttonArrive.disabled = true;
                info.textContent = 'Error'
            })
    }

    function arrive() {
        buttonDepart.disabled = false;
        buttonArrive.disabled = true;
        info.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();