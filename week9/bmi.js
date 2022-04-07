window.onload = () => {
	let button = document.querySelector("#btn");

	// Function to calculate BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	/* Getting input from user and store it to height variable after converting it to an int. */
	let height = parseInt(document
		.querySelector("#height").value);

	/* Getting input from user and store it into weight varaible after converting it to an int.*/
	let weight = parseInt(document
		.querySelector("#weight").value);

	let output = document.querySelector("#output");

	// Checking the user providing a proper
	// value or not
	if (height === "" || isNaN(height))
		output.innerHTML = "Please ENTER a valid Height!";

	else if (weight === "" || isNaN(weight))
		output.innerHTML = "Please ENTER a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		// Fixing upto 2 decimal places
		let bmi = (weight / ((height * height) /
			10000)).toFixed(3);

		/* Your BMI Categories:
		Underweight = <18.5
		Normal weight = 18.5–24.9
		Overweight = 25–29.9
		Obesity = BMI of 30 or greater*/

		// Dividing as per the bmi conditions
		if (bmi < 15) output.innerHTML =
			` you are very severely underweight: <span>${bmi}</span>`;

		else if (bmi >= 15 && bmi < 16) output.innerHTML =
			`severely underweight: <span>${bmi}</span> `;
		else if (bmi >= 16 && bmi < 18.6) output.innerHTML =
			`You are Under Weight : <span>${bmi}</span>`;
		else if (bmi >= 18.6 && bmi < 25)
			output.innerHTML =
			`You are Normal : <span>${bmi}</span>`;
		else if (bmi >= 25 && bmi < 30)
			output.innerHTML =
			`You are Overweight : <span>${bmi}</span>`;
		else if (bmi >= 30 && bmi < 35) output.innerHTML =
			`You are obese class I: : <span>${bmi}`;

		else if (bmi >= 35 && bmi < 40) output.innerHTML =
			`You are obese class II: : <span>${bmi}`;

		else output.innerHTML =
			`You are Obese class III: <span>${bmi}</span>`;


		// if (bmi < 18.6) output.innerHTML =
		// 	`Under Weight : <span>${bmi}</span>`;

		// else if (bmi >= 18.6 && bmi < 24.9)
		// 	output.innerHTML =
		// 	`Normal : <span>${bmi}</span>`;

		// else output.innerHTML =
		// 	`Over Weight : <span>${bmi}</span>`;
	}
}