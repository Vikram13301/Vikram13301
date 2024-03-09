function login() {
    // Implement authentication logic here
    // For simplicity, let's assume a hardcoded username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials (you should use a more secure authentication method)
    if (username === 'user' && password === 'pass') {
        // If authentication is successful, show weather information
        showWeather();
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function showWeather() {
    // Implement code to fetch weather data from the API
    // For demonstration, let's assume a sample weather data
    const weatherContainer = document.getElementById('weatherContainer');
    weatherContainer.innerHTML = '<h2>Weather Forecast</h2>' +
        '<p>Temperature: 25°C</p>' +
        '<p>Condition: Sunny</p>' +
        '<p>Wind Speed: 10 km/h</p>';
    // You would typically use an API like OpenWeatherMap for real weather data
    // and make an asynchronous request using Fetch or XMLHttpRequest.
}
