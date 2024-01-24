function calculateConversion() {
    // Retrieve input value and conversion type
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var conversionType = document.getElementById("conversionType").value;

    // Perform conversion calculations
    var result;
    if (conversionType === "kgToLb") {
        // Kilogram to Pound conversion
        result = inputValue * 2.20462;
    } else if (conversionType === "lbToKg") {
        // Pound to Kilogram conversion
        result = inputValue / 2.20462;
    } else {
        // Invalid conversion type
        alert("Invalid conversion type!");
        return;
    }

    // Display the result
    document.getElementById("resultContainer").innerHTML = "Result: " + result.toFixed(2);
}
