function convertTemperature() {
    const temperature = parseFloat(
        document.getElementById("temperature").value
    );

    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.textContent = "Please enter a temperature.";
        return;
    }

    let converted;

    if (unit === "celsius") {
        converted = `${temperature}°C = ${(temperature * 9 / 5 + 32).toFixed(2)}°F`;
    } 
    else if (unit === "fahrenheit") {
        converted = `${temperature}°F = ${((temperature - 32) * 5 / 9).toFixed(2)}°C`;
    } 
    else {
        converted = `${temperature}K = ${(temperature - 273.15).toFixed(2)}°C`;
    }

    result.textContent = converted;
}