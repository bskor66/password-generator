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
	document.querySelector("#generate").innerHTML = "Regenerate";
	document.querySelector("#password").style.display = "block";
	document.querySelector("#back-to-options").style.display = "inline-block";

	let passwordLength = document.getElementById("password-length").value;
	let selectedChars = [];
	let lowercaseSelect = document.getElementById("lowercase");
	let uppercaseSelect = document.getElementById("uppercase");
	let numberSelect = document.getElementById("numbers");
	let specialSelect = document.getElementById("special-characters");

	if (lowercaseSelect.checked) {
		selectedChars.push(lowercaseSelect.value);
	}
	if (uppercaseSelect.checked) {
		selectedChars.push(uppercaseSelect.value);
	}
	if (numberSelect.checked) {
		selectedChars.push(numberSelect.value);
	}
	if (specialSelect.checked) {
		selectedChars.push(specialSelect.value);
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
