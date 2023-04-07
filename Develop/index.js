const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('success');
        }
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