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

// ~~~~~~~~~~~~~~~~~~~~ ISSUES ~~~~~~~~~~~~~~~~~~~~ //
//  PROMPT does not restart when nothing is selected
//  PROMPT does not restart when incorrect value given
//  undefined returned in text area when not done correctly

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// ~~~~~~~~~~~~~~~~~~~~ Assignment code here ~~~~~~~~~~~~~~~~~~~~ //
// FUN VARIABLES
const robot = "🤖";
const checkbox = "✅";
const questionMark = "❓";

// BASE VARIABLES
// length of password choice
var inputCharLength = 8;
// storage for prompt input options
var potentialOptions = [];

// ARRAYS // to pull password input option characters
var specialCharactersArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowercaseLettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// NEW FUNCTION: handles all the confirms
function getPasswordOptions() {
  
// CONFIRM - LOWERCASE LETTERS
    // Using backticks and ${variable} because it's easier than concatinating and adding emojis is fun!
  var hasLowercaseLetters = confirm(`${questionMark} Would you like to include lowercase letters?`);

  // CONFIRM - UPPERCASE LETTERS
  var hasUppercaseLetters = confirm(`${questionMark} Would you like to include uppercase letters?`);

  // CONFIRM - NUMBERS
  var hasNumbers = confirm(`${questionMark} Would you like to include numbers?`);

  // CONFIRM - SPECIAL CHARACTERS
  var hasSpecialCharacters = confirm(`${questionMark} Would you like to special characters?`);

  // CONFIRM - NO SELECTIONS
  if (!hasLowercaseLetters && !hasUppercaseLetters && !hasNumbers && !hasSpecialCharacters) {
    alert(`${robot} You gave us nothing to work with. Please try again.`);
    generatePassword();
  }

  // CONFIRM SELECTION RESULTS
  // worked with the tutor to understand how I could pull the results from the confirms and place them into an object
  var options = {
    hasLowercaseLetters: hasLowercaseLetters,
    hasUppercaseLetters: hasUppercaseLetters,
    hasNumbers: hasNumbers,
    hasSpecialCharacters: hasSpecialCharacters
  }

  // Export options to be used in generatePassword() function
  return options;
}

// INPUT PROMPTS FUNCTION
// generatePassword became too large and clunky, separating out prompts
function generatePassword() {
  // reset input array to be empty, in case multiple passwords need generated
  potentialOptions = [];
  // updating the var inputCharLength to the user input, setting to parseInt to turn it into a number
  inputCharLength = parseInt(prompt("Choose length of password (8-128 characters)"));

  // Check if a number is NaN using the isNaN() function
  // Check that input is not less than 8 or greater than 128
  if(isNaN(inputCharLength) || inputCharLength < 8 || inputCharLength > 128) {
    // feedback to the user to input a valid number
    alert(`${robot} Entry not valid. This needs to be a number between 8 - 128 characters. Please try again.`);
    var password = `${robot} Hey there! Please read the prompts carefully after pressing the "Generate Password" button.
                    \n ${questionMark} Confused? Yeah, me too.`;
    return password;
  } else {

  alert(`${checkbox} You chose ${inputCharLength} for your password length. Please answer the following questions. You must select "OK" for at least one option.`)
  
  var options = getPasswordOptions();
  // IF STATEMENTS - if confirm option is selected as true, then add that option to all the potential options array
  if (options.hasLowercaseLetters) {
    potentialOptions = potentialOptions.concat(lowercaseLettersArr);
  }
  if (options.hasUppercaseLetters) {
    potentialOptions = potentialOptions.concat(uppercaseLettersArr);
  }
  if (options.hasNumbers) {
    potentialOptions = potentialOptions.concat(numberArr);
  }
  if (options.hasSpecialCharacters) {
    potentialOptions = potentialOptions.concat(specialCharactersArr);
  }
  
  var password = "";
  // loop through the input array to create the randomly generated password at the appropriate length
  for(var i = 0; i < inputCharLength; i++) {
    // Math.random to return a random between 0 and 1(0.999). Combined with Math.floor it applies the randomization to the array.
    var randomResult = Math.floor(Math.random() * potentialOptions.length);

    // taking new pw variable and reassigning the value from nothing and adding the input array to it with the random values within our random result
    password += potentialOptions[randomResult]
  };
  console.log(password);

  // RETURN THAT PASSWORD!!! (said with the same emphasis of "move that bus" from extreme home makeover: https://youtu.be/lEroUawUaSQ)
  return password;
  };

};


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
