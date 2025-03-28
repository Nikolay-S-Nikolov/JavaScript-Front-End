function attachEvents() {

    let button = document.getElementById('submit');
    let forecast = document.getElementById('forecast');
    let weatherSymbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂'
    }

    button.addEventListener('click', () => {
        let location = document.getElementById('location');
        let currentCity = ''

        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch locations');
                }
                return res.json();
            })
            .then(data => {
                currentCity = data.find(city => city.name == location.value);

                if (!currentCity) {
                    throw new Error('City not found');
                }

                forecast.style.display = 'block';

                fetch(`http://localhost:3030/jsonstore/forecaster/today/${currentCity.code}`)
                    .then(res => {
                        if (!res.ok) {
                            throw new Error('Failed to fetch current weather');
                        }
                        return res.json();
                    })
                    .then(data => showForcastToday(data))
                    .catch((error) => {
                        console.error(error);
                        displayError(error.message);
                    })
            })
            .then(() => {
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${currentCity.code}`)
                    .then(res => {
                        if (!res.ok) {

                            throw new Error('Failed to fetch 3-day frorecast');
                        }
                        return res.json();
                    })
                    .then(data => showUpcomingForecast(data.forecast))
                    .catch((error) => {
                        console.error(error);
                        displayError(error.message);
                    })

            })
            .catch((error) => {
                console.error(error);
                displayError(error.message);
            })

        function showForcastToday(data) {
            let mainDiv = document.getElementById('current');
            mainDiv.innerHTML = '<div class="label">Current conditions</div>';

            let parent = document.createElement('div');
            parent.classList.add('forecasts');

            let symbol = weatherSymbols[data.forecast.condition];
            let temperature = `${data.forecast.low}°/${data.forecast.high}°`;

            parent.appendChild(createSpan(symbol, 'condition', 'symbol'));

            let commonSpan = createSpan('', 'condition');
            commonSpan.appendChild(createSpan(data.name, 'forecast-data'))
            commonSpan.appendChild(createSpan(temperature, 'forecast-data'))
            commonSpan.appendChild(createSpan(data.forecast.condition, 'forecast-data'))

            parent.appendChild(commonSpan);
            mainDiv.appendChild(parent);
        }

        function showUpcomingForecast(forecast) {
            let mainDiv = document.getElementById('upcoming');
            mainDiv.innerHTML = '<div class="label">Three-day forecast</div>';

            let parent = document.createElement('div');
            parent.classList.add('forecast-info');

            for (let day of forecast) {
                let commonSpan = createSpan('', 'upcoming');
                let symbol = weatherSymbols[day.condition];
                let temperature = `${day.low}°/${day.high}°`;

                commonSpan.appendChild(createSpan(symbol, 'symbol'));
                commonSpan.appendChild(createSpan(temperature, 'forecast-data'));
                commonSpan.appendChild(createSpan(day.condition, 'forecast-data'));
                parent.appendChild(commonSpan)
            }

            mainDiv.appendChild(parent);
        }

        function displayError(error) {
            if (!error) error = 'Error';
            forecast.style.display = 'block';
            forecast.style.textAlign = 'center';
            forecast.innerHTML = `<div class="label">${error}</div>`;

        }

        function createSpan(text, className1, className2) {
            let newSpan = document.createElement('span')

            if (text) newSpan.textContent = text;
            if (className1) newSpan.classList.add(className1);
            if (className2) newSpan.classList.add(className2);
            return newSpan
        }
    })
}

attachEvents();