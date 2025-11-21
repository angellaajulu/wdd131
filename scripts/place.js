// FOOTER YEAR + LAST MODIFIED
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// WIND CHILL CALCULATION
function calculateWindChill(tempC, windKmh) {
    if (tempC <= 10 && windKmh > 4.8) {
        return (
            13.12 +
            0.6215 * tempC -
            11.37 * Math.pow(windKmh, 0.16) +
            0.3965 * tempC * Math.pow(windKmh, 0.16)
        ).toFixed(1);
    }
    return "N/A";
}

// Static values for assignment
const temp = 26;
const wind = 10;

document.getElementById("temp").textContent = temp + "°C";
document.getElementById("wind").textContent = wind + " km/h";
document.getElementById("windchill").textContent = calculateWindChill(temp, wind) + "°C";