# Password Generator

## DESCRIPTION

### User Story
- AS AN employee with access to sensitive data
- I WANT to randomly generate a password that meets certain criteria
- SO THAT I can create a strong password that provides greater security

### Acceptance Criteria
- GIVEN I need a new, secure password
- WHEN I click the button to generate a password
- THEN I am presented with a series of prompts for password criteria
- WHEN prompted for password criteria
- THEN I select which criteria to include in the password
- WHEN prompted for the length of the password
- THEN I choose a length of at least 8 characters and no more than 128 characters
- WHEN asked for character types to include in the password
- THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
- WHEN I answer each prompt
- THEN my input should be validated and at least one character type should be selected
- WHEN all prompts are answered
- THEN a password is generated that matches the selected criteria
- WHEN the password is generated
- THEN the password is either displayed in an alert or written to the page

## Lessons Learned

FIRST ATTEMPT<br />
// ~ What I learned from this attempt is that there are "many ways to pet a cat". Ultimately I was attempting to engineer it in a very backwards way which I had to individually account for each potential issue. Which means there is more chance of the code breaking (which it did as I never got it fully working). After sitting in on study sessions, going through the code drills, reviewing online best practices, and working through class activities, I think I found some better methods of "petting this cat". I learned a lot along the way and I hope it's illustrative above in the comments I made about my statements made. ~ //