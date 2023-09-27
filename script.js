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
		let addingChar;
		switch ("uppercase") {
			case "uppercase":
				addingChar = randomChar(characterSet[0]).toUpperCase();
				break;
			case "lowercase":
				addingChar = randomChar(characterSet[0]);
				break;
			case "number":
				addingChar = Math.floor(Math.random() * 10);
				break;
			case "special":
				addingChar = randomChar(characterSet[1]);
				break;
		}
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
