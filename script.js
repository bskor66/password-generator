const characterSet = [
	"abcdefghijklmnopqrstuvwxyz",
	"!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
];

function refreshPage() {
	location.reload();
	return;
}

function randomInt(max) {
	return Math.floor(Math.random() * max);
}

function randomChar(chars) {
	return chars.charAt(randomInt(chars.length));
}

function generatePassword() {
	document.querySelector("#input-form").style.display = "none";
	document.querySelector("#password").style.display = "block";

	let passwordLength = document.getElementById("password-length").value;
	let selectedChars = [];

	if (document.getElementById("lowercase").checked) {
		selectedChars.push(document.getElementById("lowercase").value);
	}
	if (document.getElementById("uppercase").checked) {
		selectedChars.push(document.getElementById("uppercase").value);
	}
	if (document.getElementById("numbers").checked) {
		selectedChars.push(document.getElementById("numbers").value);
	}
	if (document.getElementById("special-characters").checked) {
		selectedChars.push(document.getElementById("special-characters").value);
	}

	let password = "";
	for (let i = 0; i < passwordLength; i++) {
		let addingChar;

		switch (selectedChars[randomInt(selectedChars.length)]) {
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
		password += addingChar;
	}

	return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var backToOptionsBtn = document.querySelector("#back-to-options");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
backToOptionsBtn.addEventListener("click", refreshPage);
