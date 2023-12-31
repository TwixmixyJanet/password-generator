# Password Generator
### [View Project Here](https://twixmixyjanet.github.io/password-generator/ "Password Generator")<br />
![image of password generator](img/projectimage.png "image of Password Generator app")
| Technology Used    | Resource URL |
| --------  | ------- |
| HTML      | https://developer.mozilla.org/en-US/docs/Web/HTML |
| CSS       | https://developer.mozilla.org/en-US/docs/Web/CSS |
| JavaScript | https://developer.mozilla.org/en-US/docs/Web/JavaScript |
| Git       | https://git-scm.com/ |
| GitHub     | https://github.com/ |
| VSCode    | https://code.visualstudio.com/ |


## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Description:
This is a JavaScript focused project with the goal to create a random password generator through dialog boxes.<br />
Active Coding Time Spent: ![wakatime](https://wakatime.com/badge/user/5829d3fb-d499-4e31-bed0-2d4b3e092db3/project/edc703e4-e858-4d33-8ecf-94d6e653a8f6.svg)<br />
<br />
How to use this app:

* Click button "Generate Password"
* Answer criteria prompts
* Receive unique password!
* Select, copy, and utilize as needed

#### User Story
- AS AN employee with access to sensitive data
- I WANT to randomly generate a password that meets certain criteria
- SO THAT I can create a strong password that provides greater security

#### Acceptance Criteria
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

### Lessons Learned

#### FIRST ATTEMPT
// ~ What I learned from this attempt is that there are "many ways to pet a cat". Ultimately I was attempting to engineer it in a very backwards way which I had to individually account for each potential issue. Which means there is more chance of the code breaking (which it did as I never got it fully working). After sitting in on study sessions, going through the code drills, reviewing online best practices, and working through class activities, I think I found some better methods of "petting this cat". ~ //

#### SECOND ATTEMPT
// ~ I'm still trying to grasp some of the fundamentals. I went DRY this time and tried to make it as simple as possible. However, I still did some over engineering by hi-jacking the starter code because I couldn't think of how else to accomplish the task to initiate the functions that I had written. I was able to get everything to function through the for loop, but I was not able to implement a fail safe for if the user selected no character options. ~ //

#### THIRD ATTEMPT
// ~ I worked with a tutor to review my work. We re-engineered my if statement confirms to be variables, so that we could store the true/false result. We then collected the results into an object, so that we could pass them to another function and use them in a for loop to make the giant array and then randomly select the characters from there. ~ //

#### WRAPPING UP
// ~ I was still receiving an undefined error when the length prompt was failing, so I did some scope review via the inspect sources in the browser (Thanks to [Jorge Castro](https://github.com/Jacastro619/) for the tip) to find that my return password wasn't retaining the final password string. I ended up needing to wrap the password generation math in an else statement ~ // <br />
![code snippet](img/codesnippet.png)

## Installation

1. Create a new repository on GitHub, to store this project.
2. Clone the repository to your computer.
3. Copy files to your own repository.
4. Make changes to the code.
5. Commit the changes to the local repo.
6. Push the changes to the remote repo.

## Usage

This is a password generator designed to produce a randomly generated password through various criteria. If you would like to use this app follow the installation steps and curate it to your needs. If you would like to use this app to generate a password, follow the steps under the description above and click the link at the top of this page.

## License

MIT License
Copyright (c) 2023 Twixmixy / Janet Webster

<hr />

## About The Author
### Janet Webster
Full Stack MERN Software Engineer in training.

- [GitHub](https://github.com/TwixmixyJanet/)
- [LinkedIn](https://www.linkedin.com/in/twixmixy/)
- [Twitter](https://twitter.com/Twixmixy)
- [WakaTime](https://wakatime.com/@Twixmixy)

![Janet with her dog Winona on the beach](https://avatars.githubusercontent.com/u/117195025?v=4)