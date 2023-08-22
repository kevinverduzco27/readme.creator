const fs = require('fs');
const inquirer = require('inquirer');
const license = require('./utils/generateMarkdown');

const questions = [
  {   
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},

{   
    type: 'input',
    name: 'description',
    message: 'Give a description of your project!'
},

{   
  type: 'input',
  name: 'installation',
  message: 'Enter installation instruction!'
},

{   
    type: 'input',
    name: 'usage',
    message: 'Please describe how your project/app/website/software is meant to be used!'
},

{   
    type: 'checkbox',
    name: 'license',
    message: 'Choose a license!',
    choices: ["Boost Software License 1.0", "BSD 3-Clause License", "Eclipse Public License 1.0", "GNU GPL v3", 
    "The Hippocratic License 2.1", "IBM Public License Version 1.0", "ISC",  "MIT", "None"]
},

{   
    type: 'input',
    name: 'contribution',
    message: 'Please list any contributors!'
},

{   
    type: 'input',
    name: 'gbcontact',
    message: 'Please provide your GitHub username!'
},

{
    type: 'input',
    name: 'email',
    message: 'Please provide an email to in order to be contacted!'
}
];
//creats the read me
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, license(data), (err) =>
err ? console.error(err) : console.log('yepperonies you did it')
);
}

//finishes the file
function init() {
  inquirer
      .prompt(questions)
          .then(response => {
              writeToFile('README.md', response)
          })}
init();
//Function call to initialize app
