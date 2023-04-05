// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(
        questions
    )
    .then(function(data) {
        console.log(data)
        fs.writeFile('README.md', generateMarkdown({...data}), (err) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
        })
    })
}

// Function call to initialize app
init();
