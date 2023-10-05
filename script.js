const passwordText = document.querySelector("#pw")
// arrays for user to select password options from
const uppCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
const lowCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

const numbr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
const symbol = ["!", "#", "$", "%", "&", "*", "?", "@", "^", ];

// Assignment Code
var genBtn = document.querySelector("#gen");
let passwordLength;
let includeUppCase;
let includeLowCase;
let includeNumbr;
let includeSymbol;
let passArr = [];
let passObj = {};
let pass = [];

function getRandomChar() {
  for (let i = 0; i < passwordLength; i++) {    
    let randomSel = Math.floor(Math.random() * passArr.length);
    pass.push(...passArr[randomSel]);
  }
  console.log(pass);
  passwordText.value = pass.join("");
}

function genPass() {
  passwordText.value = "";
  passArr = [];
  pass = [];
  if (includeUppCase) {
    passArr.push(...uppCaseLetter)
  };
  if (includeLowCase) {
    passArr.push(...lowCaseLetter)
  };
  if (includeNumbr) {
    passArr.push(...numbr)
  };
  if (includeSymbol) {
    passArr.push(...symbol)
  };
  console.log(passArr);
  getRandomChar();
}

function passOpts() {
  passwordLength = prompt("Enter the password length (between 8 and 128 characters):");
  console.log(passwordLength);
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    alert("Please enter a password length between 8 and 128.");
    passOpts();
  } else {
    includeUppCase = confirm("Would you like to include uppercase letters?");
    includeLowCase = confirm("Would you like to include lowercase letters?");
    includeNumbr = confirm("Would you like to include numbers?");
    includeSymbol = confirm("Would you like to include symbols?");
    console.log(includeUppCase, includeLowCase, includeNumbr, includeSymbol);
    genPass();
  }
}

// PROMPT for password length (8-128) || ALERT if not valid
// let passwordLength = prompt("Enter the password length (between 8 and 128 characters):");
// let (!(passwordLength >= 8 && passwordLength <= 128)) {
//     alert("Please enter a valid password length between 8 and 128 characters.");
// }
// PROMPT for Upper Case => passwordArr

// includeUppCase() = confirm("Include uppercase letters?");
// PROMPT for Lower Case => passwordArr 
// let includeLowCase = confirm("Include lowercase letters?");
// PROMPT for Number => passwordArr
// let includeNumbr = confirm("Include numbers?");
// PROMPT for Symbol => passwordArr
// let includeSymbol = confirm("Include symbols?");
// function generatePassword() {
  
// }

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#pw");

  // passwordText.value = password;
  passOpts()


}

// Add event listener to generate button
genBtn.addEventListener("click", writePassword);