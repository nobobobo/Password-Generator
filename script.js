// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  let passLength = parseInt(prompt("Choose a length of the new password: "));

  while (passLength < 8 || passLength > 128){
    alert("The length must be between 8 and 128 charcters.")
    passLength = parseInt(prompt("Choose a length of the new password, again: "));
  }
  
  let hasLower = confirm("Do you want the password to contain lowercase characters?");
  let hasUpper = confirm("Do you want the password to contain uppercase characters?");
  let hasNumeric = confirm("Do you want the password to contain numbers?");
  let hasSpecial = confirm("Do you want the password to contain special characters?");

  while (!hasLower && !hasUpper && !hasNumeric && !hasSpecial){
    alert("Please select at least one type of the characters to be contained in the new password!")
    hasLower = confirm("Select again: Do you want the password to contain lowercase characters?");
    hasUpper = confirm("Select again: Do you want the password to contain uppercase characters?");
    hasNumeric = confirm("Select again: Do you want the password to contain numbers?");
    hasSpecial = confirm("Select again: Do you want the password to contain special characters?");
  }

  let charSet = "";

  if (hasLower){
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }

  if (hasUpper){ 
    charSet += "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
  }

  if (hasNumeric) {
    charSet += "0123456789";
  }

  if (hasSpecial) {
    charSet += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  let newPass = "";

  for (let i=0; i<passLength; i++){
    let charIndex = Math.floor(Math.random()*charSet.length);
    newPass += charSet[charIndex];
  }
  return newPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);