// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "?", "<", ">", "/"];
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var combinedArray = [];
var randomPassword = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Enter the amount of characters you need for your new password. It can be betweeen 8 to 128 characters");
  
  if (!passwordLength || passwordLength <= 7 || passwordLength >=129) {
    return alert("Response is invalid. Please try again!");
  }

  var useLowerCase = confirm("Do you want your new password to have lowercase letters?");
  if (useLowerCase === true) {
    combinedArray = combinedArray.concat(LowerCase);
  }

  var useUpperCase = confirm("Do you want your new password to have uppercase letters?");
  if (useUpperCase === true) {
    combinedArray = combinedArray.concat(upperCase);
  }

  var useNumbers = confirm("Do you want your new password to have numbers?");
  if (useNumbers === true) {
    combinedArray = combinedArray.concat(numbers);
  }

  var useSpecialCharacters = confirm("Do you want your new password to have special characters?");
  if (useSpecialCharacters === true) {
    combinedArray = combinedArray.concat(specialCharacters);
  }
  
  var randomPassword ="";
  for (var i = 0; i < passwordLength; i++) {
    randomPassword += combinedArray[Math.floor(Math.random() * (combinedArray.length))];
    console.log(Math.floor(Math.random() * (combinedArray.length)));
    console.log(randomPassword);
  }

  return randomPassword;
}
