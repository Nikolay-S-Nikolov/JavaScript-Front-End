function solve() {
    const button = document.querySelector('input[type="button"]');

    let convertToMeter = {
        "km": 1000,
        "m": 1,
        "cm": 0.01,
        "mm": 0.001,
        "mi": 1609.34,
        "yrd": 0.9144,
        "ft": 0.3048,
        "in": 0.0254
    }

    button.addEventListener('click', (e) => {
        let inputDistance = document.getElementById('inputDistance');
        
        let outputUnits = document.getElementById('outputUnits').value;
        let inputUnits = document.getElementById('inputUnits').value;

        document.getElementById('outputDistance').value = convertToMeter[inputUnits] * Number(inputDistance.value) / convertToMeter[outputUnits];

    })
}