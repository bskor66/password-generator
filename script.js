function generatePassword() {
	document.querySelector("#input-form").style.display = "none";
	document.querySelector("#password").style.display = "block";

	let passwordLength = document.getElementById("password-length").value;
	let characterChoice = [
		document.getElementById("lowercase").value,
		document.getElementById("uppercase").value,
		document.getElementById("number").value,
		document.getElementById("special-characters").value,
	];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
