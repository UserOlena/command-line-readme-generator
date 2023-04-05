// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is the title of your project?',
        type: 'input',
    },
    {
    name: 'description',
    message: 'Write short description about your project.',
    type: 'input',
    },
 ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('success');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    )
    .then(function(data) {
        writeToFile('README.md', data)
    })
}

// Function call to initialize app
init();
