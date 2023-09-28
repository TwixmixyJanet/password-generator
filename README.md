# Password Generator
[View Project Here](https://twixmixyjanet.github.io/password-generator/ "Password Generator")<br />
![image of portfolio](assets/img/projectimage.png "image of Janet Webster's Portfolio - mobile view")
| Technology Used    | Resource URL |
| --------  | ------- |
| HTML      | https://developer.mozilla.org/en-US/docs/Web/HTML |
| CSS       | https://developer.mozilla.org/en-US/docs/Web/CSS |
| Git       | https://git-scm.com/ |
| VSCode    | https://code.visualstudio.com/ |
| Web Accessibility Evaluation Tool | https://wave.webaim.org/ |

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Description:

### Action Plan
1. Create and deploy portfolio that demonstrates work and skills
2. Include name, title, photo, personal highlights, skills, work, and contact information
3. Activate navigation links to scroll users to sections on page
4. Work projects direct the user to engage with their live sites
5. The first work project is emphasized by being the largest
6. Site is responsive for various screen sizes
7. Code is reviewed by accessibility tools: https://wave.webaim.org/

### HTML
Initiated the project by framing out the semantic HTML with the content that I knew I wanted to include in the project
* Updated HTML as needed during testing of CSS and responsiveness
* Used semantic elements as much as possible
* Utilized a tutoring session to walk through display:flex and element dimensions
* Refactored to make some DIV elements surrounding elements I needed to have flex/flow better
* Added comments to various areas for clarity

### CSS
I had a rough idea of how I wanted to engage my selectors based off of previously building a portfolio.
* Started from top to bottom in terms of how the HTML flows
* Created :root variants to have base colors and fonts to call upon
* Styled the website from a mobile-focus first, then added media queries to set min-width for tablet and desktop
* Utilized a tutoring session to walk through display:flex and element dimensions
* Refactored to optimized the various areas flex/wrap better
* Reviewed each selector and property/value to make sure it served it's best purpose
* Consolidated selectors where it made sense to do so
* Removed redundant selectors and properties

### Delivery
1. Website Deployed: https://twixmixyjanet.github.io/janet-webster-portfolio/
2. Critical details included<br />
![image of navigation](assets/img/requirement1.png "2. Critical details included")
3. Active navigation applied<br />
![image of same page navigation links](assets/img/requirement2.png "3. Active navigation applied")
4. Work projects linked<br />
![image of hyperlinked project](assets/img/requirement3.png "4. Work projects linked")
5. First project is emphasized<br />
![image of first project being larger than others](assets/img/requirement4.png "5. First project is emphasized")
6. Site is responsive<br />
![image of full screen](assets/img/requirement5a.png "6. Site is responsive")
![image of mid-screen](assets/img/requirement5b.png "6. Site is responsive")
![image of mobile](assets/img/requirement5c.png "6. Site is responsive")
7. Code reviewed<br />
![image of wave.webaim.org displaying website passes standards](assets/img/acessibility-test.png)

## Installation

1. Create a new repository on GitHub, to store this project.
2. Clone the repository to your computer.
3. Copy files to your own repository.
4. Make changes to the code.
5. Commit the changes to the local repo.
6. Push the changes to the remote repo.

## Usage

This one page website portfolio can be used as a base template. Simply swap out information, work, skills, and contact you may need for it to match your requirements.

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

### FIRST ATTEMPT
// ~ What I learned from this attempt is that there are "many ways to pet a cat". Ultimately I was attempting to engineer it in a very backwards way which I had to individually account for each potential issue. Which means there is more chance of the code breaking (which it did as I never got it fully working). After sitting in on study sessions, going through the code drills, reviewing online best practices, and working through class activities, I think I found some better methods of "petting this cat". I learned a lot along the way and I hope it's illustrative above in the comments I made about my statements made. ~ //

### SECOND ATTEMPT
// ~ I'm still trying to grasp some of the fundamentals. I went DRY this time and tried to make it as simple as possible. However, I still did some over engineering by hi-jacking the starter code because I couldn't think of how else to accomplish the task to initiate the functions that I had written. I was able to get everything to function through the for loop, but I was not able to implement a fail safe for if the user selected no character options. ~ //

### THIRD ATTEMPT
// ~ I worked with a tutor to review my work. We re-engineered my if statement confirms to be variables, so that we could store the true/false result. We then collected the results into an object, so that we could pass them to another function and use them in a for loop to make the giant array and then randomly select the characters from there.