// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  /* 
  get a length of a new password from user's input. 
  check and retry if the input is not a number or the length is not between 8 and 128
  */

  let passLength = 0;

  do {
    let res = parseInt(prompt("Choose a length of the new password between 8 and 128: "));
    
    if (isNaN(res)){
      passLength = 0;
    } else {
      passLength = res;
    }
  } while (passLength < 8 || passLength > 128);

  /* 
  create booleans to trackt user's choice of types of characters using in a new password.
  hasLower - new password has lowercase characters
  hasUpper - new password has uppercase characters
  hasNumeric - new password has numeric characters
  hasSpecial - new password has special characters
  */ 

  let hasLower = false;
  let hasUpper = false;
  let hasNumeric = false;
  let hasSpecial = false;

  do {
    alert("Please select at least one type of characters to be used in a new password. ")
    hasLower = confirm("Do you want the password to contain lowercase characters?");
    hasUpper = confirm("Do you want the password to contain uppercase characters?");
    hasNumeric = confirm("Do you want the password to contain numbers?");
    hasSpecial = confirm("Do you want the password to contain special characters?");
  } while (!hasLower && !hasUpper && !hasNumeric && !hasSpecial);

  /* 
  create a character set based on choices of type of characters. 
  for each type of characters, concatenate a list of characters as a string:
  lowercase - "abcdefghijklmnopqrstuvwxyz"
  uppercase - "ABCDEFGHIJKLMNOPQRSTUVXWYZ"
  number - "0123456789"
  special characters - " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  */


  let charSet = "";
  let lower = "abcdefghijklmnopqrstuvwxyz"
  let upper = "ABCDEFGHIJKLMNOPQRSTUVXWYZ"
  let numeric = "0123456789";
  let special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  if (hasLower) {
    charSet += lower;
  }

  if (hasUpper) {
    charSet += upper;
  }

  if (hasNumeric) {
    charSet += numeric;
  }

  if (hasSpecial) {
    charSet += special;
  }

  /*
  generate a new password given a character set to be used. 
  having an object "typeChecker" to track each type of characters is used or not. 
  */
 
  let newPass = "";
  let typeChecker = {
    isLower: false,
    isUpper: false,
    isNumeric: false,
    isSpecial: false
  }

  do {
    newPass = "";
    typeChecker.isLower = false;
    typeChecker.isUpper = false;
    typeChecker.isNumeric = false;
    typeChecker.isSpecial = false;

    for (let i = 0; i < passLength; i++) {
       //Using random index to access the character set.
      let newChar = charSet[Math.floor(Math.random() * charSet.length)];

      newPass += newChar;

      if (lower.includes(newChar)) {
        typeChecker.isLower = true;
      }
      if (upper.includes(newChar)) {
        typeChecker.isUpper = true;
      }
      if (numeric.includes(newChar)) {
        typeChecker.isNumeric = true;
      }
      if (special.includes(newChar)) {
        typeChecker.isSpecial = true;
      }
    }

  } while (
    (hasLower && !typeChecker.isLower) ||
    (hasUpper && !typeChecker.isUpper) ||
    (hasNumeric && !typeChecker.isNumeric) ||
    (hasSpecial && !typeChecker.isSpecial)
  );

  return newPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);