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

// ~~~~~~~~~~~~~~~~~~~~ Assignment code here ~~~~~~~~~~~~~~~~~~~~ //
// BASE VARIABLES
// length of password choice
var inputCharLength = 8;
// storage for prompt input options
var inputArr = [];

// ARRAYS
// to pull password input option characters
var specialCharactersArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // potentially need to turn these into strings if they don't work
var lowercaseLettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// PASSWORD CREATION FUNCTION
function generatePassword() {
  // new variable for the password to be generated into
  var pwGenerated = "";
  // loop through the input array to create the randomly generated password at the appropriate length
  for(var i = 0; i < inputCharLength; i++) {
    // Math.random to return a random between 0 and 1
    // Combined with Math.floor it applies the randomization to the array
    var randomResult = Math.floor(Math.random() * inputArr.length);
    // taking new pw variable and reassigning the value from nothing and adding the input array to it with the random values within our random result
    pwGenerated = pwGenerated + inputArr[randomResult]
  }

  // RETURN THAT PASSWORD!!! (said with the same emphasis of "move that bus" from extreme home makeover: https://youtu.be/lEroUawUaSQ)
  return pwGenerated;
};

// INPUT PROMPTS FUNCTION
// generatePassword became too large and clunky, separating out prompts
function activatePrompts() {
  // reset input array to be empty, in case multiple passwords need generated
  inputArr = [];
  // updating the var inputCharLength to the user input, setting to parseInt to turn it into a number
  inputCharLength = parseInt(prompt("Choose length of password (8-128 characters)"));

  // Check if a number is NaN using the isNaN() function
  // Check that input is not less than 8 or greater than 128
  if(isNaN(inputCharLength) || inputCharLength < 8 || inputCharLength > 128) {
    // feedback to the user to input a valid number
    alert("Entry not valid. This needs to be a number between 8 - 128 characters. Please try again.");

    // ****************************************************************
    //trying to find a way to re-initialize the prompts after this failure
    // ****************************************************************
    writePassword();

    // return used to exit the function if it's false
    return false;
  } 

  // Using backticks and ${variable} because it's easier than concatinating
  alert(`You chose ${inputCharLength} for your password length. Please answer the following questions. You must select "OK" for at least one option.`)

  // CONFIRM - LOWERCASE LETTERS
  // using if to return true/false from the input response
  if (confirm("Would you like to include lowercase letters?")) {
    // if TRUE concatinate lowercase letters into the input array
    inputArr = inputArr.concat(lowercaseLettersArr);
  } else {

  }

  // CONFIRM - UPPERCASE LETTERS
  // using if to return true/false from the input response
  if (confirm("Would you like to include uppercase letters?")) {
    // if TRUE concatinate uppercase letters into the input array
    inputArr = inputArr.concat(uppercaseLettersArr);
  }

  // CONFIRM - NUMBERS
  // using if to return true/false from the input response
  if (confirm("Would you like to include numbers?")) {
    // if TRUE concatinate numbers into the input array
    inputArr = inputArr.concat(numberArr);
  }

  // CONFIRM - SPECIAL CHARACTERS
  // using if to return true/false from the input response
  if (confirm("Would you like to special characters?")) {
    // if TRUE concatinate special characters into the input array
    inputArr = inputArr.concat(specialCharactersArr);
  }

  var arrIncludes = inputArr.includes("")
  // trying to return a message in case the user selects nothing
  if (arrIncludes) {
    console.log("You gave us nothing to work with. Please try again.")
  }

  // return used to exit the function if it's true!
  return true;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // trying something here! // should return true or false!!
  var promptSuccess = activatePrompts();

  if (promptSuccess) {

  //sorry for re-arranging your code...


      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;
  } 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// ~~~~~~~~~~~~~ FIRST ATTEMPT ~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~    FAILURE    ~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~ What I learned from this attempt is that there are "many ways to pet a cat". Ultimately I was attempting to engineer it in a very backwards way which I had to individually account for each potential issue. Which means there is more chance of the code breaking (which it did as I never got it fully working). After sitting in on study sessions, going through the code drills, reviewing online best practices, and working through class activities, I think I found some better methods of "petting this cat". I learned a lot along the way and I hope it's illustrative above in the comments I made about my statements made. ~ //

// function generatePassword(securePassword) {
//   // variable arrays
//   specialCharactersArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//   numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   lowercaseLettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//   uppercaseLettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//   // store password input components
//   var includeLowercase;
//   var includeUppercase;
//   var includeNumbers;
//   var includeSpecialChars;
//   var inputSummary;

//   // PROMPTS
//   // prompt for length of password (8 - 128 chars)
//   var lengthInput = parseInt(prompt("Choose length of password (8-128 characters)"));
//   // if the input value is !not a number
//     if (!lengthInput) {
//       // Inform the user the input cannot be validated
//       alert("Not validated. This needs to be a number!");
//       // Page should refresh
//       location.reload();
//       // If input is less than 8 or greater than 128, user must try again!
//     } else if (lengthInput < 8 || lengthInput > 128) {
//       lengthInput = parseInt(prompt("Try again! Length of password must be between 8 and 128 characters"));
//     } else {
//       // Using backticks and ${variable} because it's easier than concatinating
//       alert(`You chose ${lengthInput} for your password length. Please answer the following questions.`)
//     };

//       // prompt to include lowercase true/false
//       includeLowercase = confirm("Would you like to include lowercase letters?");

//       // prompt to incude uppercase true/false
//       includeUppercase = confirm("Would you like to include uppercase letters?");

//       // prompt to include numbers
//       includeNumbers = confirm("Would you like to include numbers?");

//       // prompt to include special chars true/false
//       includeSpecialChars = confirm("Would you like to include special characters?");

//   // VERIFY
//   // verify prompt input
//       // If all the above prompts were false
//       if(!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
//         inputSummary = alert("You must choose at least one criteria (letters, numbers, or special characters)");
//       }

//       else if (includeLowercase && includeUppercase && includeNumbers && includeSpecialChars) {
//         inputSummary = specialCharactersArr.concat(numberArr, lowercaseLettersArr, uppercaseLettersArr);
//       }

//       else {
//         alert("Somehow you missed a criteria, try again!");
//       }

//       // store the password length input by user
//       var passwordLength = [];

//   // GENERATE
//   // create password passed off prompt criteria
//       // creating a loop to iterate through the concatinated array and then utilizing random math multiplied times the length
//       for (var i = 0; i < lengthInput; i++) {
//         var scrambleInputSummary = inputSummary[Math.floor(Math.random() * inputSummary.length)];
//         passwordLength.push(scrambleInputSummary);
//       }

//       // turning the array into a string variable
//       var pwGenerated = passwordLength.join("");
//       writePassword(pwGenerated);
//       var pwGenerated = "test";

//   // OUTPUT:
//   // Updated DOM to display password
//   // return end result of password generated
//   return pwGenerated;
// }