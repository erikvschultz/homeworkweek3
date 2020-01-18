// Assignment Code
const $generateBtn = document.querySelector("#generate");
const $copyBtn = document.querySelector("#copy");

// Add event listener to generate button
$generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let $passwordText = document.querySelector("#password");

  $passwordText.value = password;

  $copyBtn.removeAttribute("disabled");
  $copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

function generatePassword() {
  // setup strings with all possible char types for password
  const upperValues = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
  const lowerValues = "abcdefghijklmnopqrstuvwxyz";
  const numValues = "1234567890";
  const specialValues = "!@#$%^&*()_+[]";

  // final string to be used to generate password via for loop
  let totalValues = "";
  
  // setup some initial variables
  let count = 0;
  let password = "";

  // prompt user for all needed input to generate password
  let passLength = prompt("Please enter password length (between 8 and 128 characters).");
  let upperCase = confirm("Would you like Uppercase values?");
  let lowerCase = confirm("Would you like Lowercase values?");
  let numbers = confirm("Would you like Numerical values?");
  let specialChars = confirm("Would you like Special Characters?");

  // Given a string of possible values, add a random character to the password
  function generate(values) {
    password = password + values.charAt(Math.floor(Math.random() * (values.length - 1)));
  }
  
  // The next 4 if statements make 100% sure that at least one of each char type chosen is generated
  if (upperCase) {
    generate(upperValues);
    totalValues = totalValues + upperValues;
    count++;
  }
  if (lowerCase) {
    generate(lowerValues);
    totalValues = totalValues + lowerValues;
    count++;
  }
  if (numbers) {
    generate(numValues);
    totalValues = totalValues + numValues;
    count++;
  }
  if (specialChars) {
    generate(specialValues);
    totalValues = totalValues + specialValues;
    count++;
  }

  // This for loop then generates the rest of the password randomly
  for (var i = 0; i < passLength - count; i++) {
    generate(totalValues);
  }
  
  // Validate password length chosen by user
  if (passLength < 8 || passLength > 128) {
    password = "Password must be between 8 and 128 characters";
  }

  // Validate that user selected at least one character type
  if (upperCase === false && lowerCase === false && numbers === false && specialChars == false) {
    password = "You must choose at least one character type.";
  }

  return password;
}
