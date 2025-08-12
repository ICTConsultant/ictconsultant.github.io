document.addEventListener('DOMContentLoaded', () => {
    const url = `http://api.weatherapi.com/v1/current.json?key=6a4e09f9f46e4a75a67171320251208&q=B76&aqi=no`;
    const weatherDisplay = document.getElementById('weather-display');

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather API: Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const location = data.location.name;
            const tempC = data.current.temp_c;
            const humidity = data.current.humidity;
            const windKph = data.current.wind_kph;
            const conditionText = data.current.condition.text;
            const conditionIcon = data.current.condition.icon;

            weatherDisplay.innerHTML = `
            <span class="text-gray-600 text-sm md:text-base">
                ${tempC}°C
            </span>
            `;
        })
        .catch(error => {
            weatherDisplay.innerHTML = `<p style="color: red;">Error fetching weather data: ${error.message}</p>`;
            console.error('Weather API: Error:', error);
        });
});