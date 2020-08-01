// Assignment Code
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
'P','Q','R','S','T','U','V','W','X','Y','Z'];
var uppercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
'p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];

function userInfo(){
var length = parseInt (prompt("How many chacters would you like your password to be"));
if( length < 8 || length > 129){
  alert("The password must be min 8 characters and no more than 128 chacters");
  return;
}
var upper = confirm("Would you like to use uppercase letters in your password");
var lower = confirm("Would you like to use lowercase letters in your password");
var num = confirm(" Would you like to use numbers in your password");
if(upper === false && lower === false && num === false){
  alert ("At lest one type of chacters must be used");
  return;}
  var useroptions = {
    length: length,
    upper: upper,
    lower: lower,
    num:num
  }

return useroptions;
}
function generatePassword(){
  var criteria = userInfo();
  var passwordsoptions = [];
  var results = [];
  if(criteria.upper === true){
    passwordsoptions = passwordsoptions.concat(uppercase)
  }
  if(criteria.lower === true){
    passwordsoptions = passwordsoptions.concat(lowercase)
  }
  if(criteria.num === true){
    passwordsoptions = passwordsoptions.concat(numbers)
  }
  for(var i = 0; i< criteria.length;i++){
    results.push( passwordsoptions[Math.floor(Math.random() * passwordsoptions.length)]);
  }

return results.join("");

}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
