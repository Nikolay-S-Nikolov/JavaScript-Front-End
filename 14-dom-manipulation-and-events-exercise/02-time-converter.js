function solve() {
    let buttons = document.querySelectorAll('input[value="Convert"]');


    for (let button of buttons) {
        button.addEventListener('click', convertEventListener);
        button.parentElement.querySelector('input[type="number"]').value;
    }

    function convertEventListener(event) {
        event.preventDefault();

        let secondsMapper = {
            'secondsBtn': (x) => x,
            'minutesBtn': (x) => x * 60,
            'hoursBtn': (x) => x * 3600,
            'daysBtn': (x) => x * 86400
        };
        let unitValue = Number(event.target.parentElement.querySelector('input[type="number"]').value);
        let units = event.target.id;
        let seconds = secondsMapper[units](unitValue);
        document.getElementById('days-input').value = (seconds / 86400).toFixed(2);
        document.getElementById('hours-input').value = (seconds / 3600).toFixed(2);
        document.getElementById('minutes-input').value = (seconds / 60).toFixed(2);
        document.getElementById('seconds-input').value = seconds.toFixed(2);
    }
}