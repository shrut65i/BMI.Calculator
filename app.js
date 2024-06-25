window.onload = () => {
    let button = document.querySelector("#btn");
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    let height = parseFloat(document.querySelector("#height").value);
    let weight = parseFloat(document.querySelector("#weight").value);
    let age = parseInt(document.querySelector("#age").value);
    let gender = document.querySelector("#gender").value;
    let result = document.querySelector("#result");

    // Checking if inputs are valid
    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Provide a valid Height!";
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Provide a valid Weight!";
    } else if (isNaN(age) || age <= 0) {
        result.innerHTML = "Provide a valid Age!";
    } else {
        // Calculate BMI based on selected units
        let bmi;
        if (document.querySelector("#units").value === "metric") {
            bmi = (weight / ((height / 100) ** 2)).toFixed(2); // Convert cm to m for BMI calculation
        } else {
            bmi = (703 * weight / (height ** 2)).toFixed(2); // BMI calculation for imperial units
        }

        // Display BMI and category
        let bmiCategory;
        if (bmi < 18.5) {
            bmiCategory = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiCategory = "Normal Weight";
        } else if (bmi >= 24.9 && bmi < 29.9) {
            bmiCategory = "Overweight";
        } else {
            bmiCategory = "Obese";
        }

        result.innerHTML = `
            <h2>Your BMI: ${bmi}</h2>
            <p>Category: ${bmiCategory}</p>
            <p>Age: ${age}</p>
            <p>Gender: ${gender}</p>
        `;
    }
}

