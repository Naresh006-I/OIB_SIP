function convertTemperature() {
    let temp = document.getElementById("temperature").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let resultBox = document.getElementById("result");
    let errorBox = document.getElementById("error");

    errorBox.innerText = "";
    resultBox.innerText = "";

    // Validation
    if (temp === "" || isNaN(temp)) {
        errorBox.innerText = "Please enter a valid number";
        return;
    }

    temp = parseFloat(temp);
    let result;

    // Conversion logic
    if (from === to) {
        result = temp;
    }
    else if (from === "celsius" && to === "fahrenheit") {
        result = (temp * 9/5) + 32;
    }
    else if (from === "celsius" && to === "kelvin") {
        result = temp + 273.15;
    }
    else if (from === "fahrenheit" && to === "celsius") {
        result = (temp - 32) * 5/9;
    }
    else if (from === "fahrenheit" && to === "kelvin") {
        result = (temp - 32) * 5/9 + 273.15;
    }
    else if (from === "kelvin" && to === "celsius") {
        result = temp - 273.15;
    }
    else if (from === "kelvin" && to === "fahrenheit") {
        result = (temp - 273.15) * 9/5 + 32;
    }

    // Display result
    let unit = to === "celsius" ? "°C" : to === "fahrenheit" ? "°F" : "K";
    resultBox.innerText = `Converted Temperature: ${result.toFixed(2)} ${unit}`;
}
