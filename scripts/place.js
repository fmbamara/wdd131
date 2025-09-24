// Wind Chill Calculation
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature
        - 11.37 * Math.pow(windSpeed, 0.16)
        + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Run after DOM is parsed (since script uses defer)
(function () {
    // Update Year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Update Last Modified
    const lastModified = new Date(document.lastModified);
    const options = {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    const formattedDate = lastModified.toLocaleDateString('en-US', options).replace(/,/g, '');
    document.getElementById('last-modified').textContent = formattedDate;

    // Wind Chill
    const temperature = 28; // in °C
    const windSpeed = 12;   // in km/h
    const windChillElement = document.getElementById('wind-chill');

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(1)} °C`;
    } else {
        windChillElement.textContent = "N/A";
        windChillElement.classList.add('na-value');
    }
})();
