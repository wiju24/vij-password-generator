// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "?", "<", ">", "/"];
let LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let masterArray = [];
let randomPassword = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let passwordLength = prompt("Enter the amount of characters you need for your new password. It can be betweeen 8 to 128 characters");
  
  if (!passwordLength || passwordLength <= 7 || passwordLength >=129) {
    return alert("Response is invalid. Please try again!");
  }

  let useLowerCase = confirm("Do you want your new password to have lowercase letters?");
  if (useLowerCase === true) {
    masterArray = masterArray.concat(LowerCase);
  }

  let useUpperCase = confirm("Do you want your new password to have uppercase letters?");
  if (useUpperCase === true) {
    masterArray = masterArray.concat(upperCase);
  }

  let useNumbers = confirm("Do you want your new password to have numbers?");
  if (useNumbers === true) {
    masterArray = masterArray.concat(numbers);
  }

  let useSpecialCharacters = confirm("Do you want your new password to have special characters?");
  if (useSpecialCharacters === true) {
    masterArray = masterArray.concat(specialCharacters);
  }
  
  let randomPassword ="";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += masterArray[Math.floor(Math.random() * (masterArray.lenght))];
    console.log(Math.floor(math.random() * (masterArray.length)));
    console.log(randomPassword);
  }

  return randomPassword;
}
