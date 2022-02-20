// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  window.alert("Please answer the following questions for preferred password criteria.");
//use variables to leverage user input
 var length= window.prompt("How many characters would you like? Choose between 8 and 126.")
 //this statement makes sure the input is within min and max parameters
 if (length >=8 && length <=128){
   function generatePassword(){
    var upperCase = window.confirm("Do you want uppercase letters?")
    var lowerCase = window.confirm("How about lowercase letters?")
    var numbers = window.confirm("Do you want numbers?")
    var specialCharacters = window.confirm("What about special characters?")
    var passwordText = document.querySelector("#password");

    var empty = "";
    var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var stringLower = "abcdefghijklmnopqrstuvwxyz"
    var stringNumbers= "0123456789"
    var stringSpecial = "'!@#$%^&*()_+={}[]|?/><:;"
    
    if (upperCase){
      empty += stringUpper;
    }
    if (lowerCase){
      empty += stringLower;
    }
    if (numbers){
      empty += stringNumbers;
    }
    if (specialCharacters){
      empty += stringSpecial;
    }

    var password = "";
    for (var i = 0; i< length; i++){
      password += empty.charAt(Math.floor(Math.random()*empty.length));
    }
  console.log(password)
    passwordText.value = password;
  return password;
   }
   generatePassword();
 }
 else{
   window.alert("Choose between 8 and 128 characters");
   writePassword()
;
 } 
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
