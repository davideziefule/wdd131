// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year in the footer
document.getElementById("currentyear").textContent = currentYear;

// Display the last modified date
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

    // Static values matching the displayed weather (metric)
const temperature = 10;   // °C
const windSpeed = 5;      // km/h

// Calculate wind chill (one-line return as required)
function calculateWindChill(temp, wind) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

// Display wind chill only if conditions are met
function displayWindChill() {
  const windChillElement = document.getElementById("wind-chill");

  // Viable conditions for metric: temp ≤ 10°C and wind > 4.8 km/h
  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill.toFixed(1)} °C`;
  } else {
    windChillElement.textContent = "N/A";
  }
}