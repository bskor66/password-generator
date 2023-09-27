const characterSet = [
	"abcdefghijklmnopqrstuvwxyz",
	"!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
];

function randomChar(chars) {
	return chars.charAt([Math.floor(Math.random() * chars.length)]);
}

function generatePassword() {
	document.querySelector("#input-form").style.display = "none";
	document.querySelector("#password").style.display = "block";

	let passwordLength = document.getElementById("password-length").value;
	let characterChoice = [
		document.getElementById("lowercase").checked,
		document.getElementById("uppercase").checked,
		document.getElementById("numbers").checked,
		document.getElementById("special-characters").checked,
	];
	let password = "";
	for (let i = 0; i < passwordLength; i++) {
		password += randomChar(characterSet[0]);
	}

	return password;
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
