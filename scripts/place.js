
// ==========================================
// FOOTER: CURRENT YEAR
// ==========================================

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


// ==========================================
// FOOTER: LAST MODIFIED DATE
// ==========================================

const lastModified = new Date(document.lastModified);

document.getElementById("lastModified").textContent =
    lastModified.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });


// ==========================================
// WEATHER: STATIC WEATHER VALUES
// ==========================================

// Singapore weather values (Metric)
const temperature = 29; // Celsius
const windSpeed = 10;   // Kilometers per hour


// ==========================================
// WEATHER: WIND CHILL FUNCTION
// ==========================================

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) -
        (11.37 * Math.pow(windSpeed, 0.16)) +
        (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}


// ==========================================
// WEATHER: CHECK CONDITIONS AND DISPLAY
// ==========================================

const windChillElement = document.getElementById("windChill");

if (temperature <= 10 && windSpeed > 4.8) {

    const windChill = calculateWindChill(temperature, windSpeed);

    windChillElement.textContent = windChill.toFixed(1) + "°C";

} else {

    windChillElement.textContent = "N/A";

}
