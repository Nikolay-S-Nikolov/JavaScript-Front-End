function getInfo() {
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo/'
    let stopNum = document.getElementById('stopId');
    let stopDiv = document.getElementById('stopName');
    let busesUl = document.getElementById('buses');

    stopDiv.replaceChildren();
    busesUl.replaceChildren();

    fetch(`${baseUrl}${stopNum.value}`)
        .then(response => response.json())
        .then(data => appendBusInfo(data.name, data.buses))
        .catch((error) => stopDiv.textContent = 'Error')

    function appendBusInfo(stopName, busesInfo){

        stopDiv.textContent = stopName;

        Object.keys(busesInfo).forEach((busId)=>{
            let newLi = document.createElement('li');
            
            newLi.textContent = `Bus ${busId} arrives in ${busesInfo[busId]} minutes`;
            busesUl.appendChild(newLi);
        })
    }
}