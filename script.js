// USER STORY
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security

// ACCEPTANCE CRITERIA
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment code here
function generatePassword(securePassword) {
  // variable arrays
  specialCharactersArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  lowercaseLettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  uppercaseLettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  // store password input components
  var includeLowercase;
  var includeUppercase;
  var includeNumbers;
  var includeSpecialChars;
  var inputSummary;

  // PROMPTS
  // prompt for length of password (8 - 128 chars)
  var lengthInput = parseInt(prompt("Choose length of password (8-128 characters)"));
  // if the input value is !not a number
    if (!lengthInput) {
      // Inform the user the input cannot be validated
      alert("Not validated. This needs to be a number!");
      // Page should refresh
      location.reload();
      // If input is less than 8 or greater than 128, user must try again!
    } else if (lengthInput < 8 || lengthInput > 128) {
      lengthInput = parseInt(prompt("Try again! Length of password must be between 8 and 128 characters"));
    } else {
      // Using backticks and ${variable} because it's easier than concatinating
      alert(`You chose ${lengthInput} for your password length. Please answer the following questions.`)
    };

      // prompt to include lowercase true/false
      includeLowercase = confirm("Would you like to include lowercase letters?");

      // prompt to incude uppercase true/false
      includeUppercase = confirm("Would you like to include uppercase letters?");

      // prompt to include numbers
      includeNumbers = confirm("Would you like to include numbers?");

      // prompt to include special chars true/false
      includeSpecialChars = confirm("Would you like to include special characters?");

  // VERIFY
  // verify prompt input
      // If all the above prompts were false
      if(!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
        inputSummary = alert("You must choose at least one criteria (letters, numbers, or special characters)");
      }

      else if (includeLowercase && includeUppercase && includeNumbers && includeSpecialChars) {
        inputSummary = specialCharactersArr.concat(numberArr, lowercaseLettersArr, uppercaseLettersArr);
      }

      else {
        alert("Somehow you missed a criteria, try again!");
      }

      // store the password length input by user
      var passwordLength = [];

  // GENERATE
  // create password passed off prompt criteria
      // creating a loop to iterate through the concatinated array and then utilizing random math multiplied times the length
      for (var i = 0; i < lengthInput; i++) {
        var scrambleInputSummary = inputSummary[Math.floor(Math.random() * inputSummary.length)];
        passwordLength.push(scrambleInputSummary);
      }

      // turning the array into a string variable
      var pwGenerated = passwordLength.join("");
      writePassword(pwGenerated);
      var pwGenerated = "test";

  // OUTPUT:
  // Updated DOM to display password
  // return end result of password generated
  return pwGenerated;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
