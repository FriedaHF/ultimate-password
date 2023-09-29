// arrays for user to select password options from
const uppCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
const lowCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

const numbr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
const symbol = ["!", "#", "$", "%", "&", "*", "?", "@", "^", ];

// Assignment Code
var genBtn = document.querySelector("#generate");
let passArr = [];
let passObj = {};
let pass = [];

// PROMPT for password length (8-122) || ALERT if not valid
// PROMPT for Upper Case => passwordArr
// PROMPT for Lower Case => passwordArr 
// PROMPT for Number => passwordArr
// PROMPT for Symbol => passwordArr

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);