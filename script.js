document.getElementById("calculate").addEventListener("click", calculateBMI);
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert to meters 
    if (isNaN(weight) || isNaN(height)) {
        document.getElementById("result").innerText = "Please enter valid values.";
        return;
    }
    const bmi = weight / (height * height);
    const bmiCategory = getBMICategory(bmi);

    const resultText = `Your BMI: ${bmi.toFixed(2)} (${bmiCategory})`;
    document.getElementById("result").innerText = resultText;
}
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 24.9) {
        return "Normal weight";
    } else if (bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
