// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.alert("Please answer the following questions for preferred password criteria.");
//use variables to leverage user input
 var length= window.prompt("How many characters would you like? Choose between 8 and 126.")
 //this statement makes sure the input is within min and max parameters
 if (length >=8 && length <=128){
 }
 else{
   (window.prompt("Choose between 8 and 126!"))
 };

  var upperCase = window.confirm("Do you want uppercase letters?")
  

  var lowerCase = window.confirm("How about lowercase letters?")
 

  var numbers = window.confirm("Do you want numbers?")
 

  var specialCharacters = window.confirm("What about special characters?")


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
