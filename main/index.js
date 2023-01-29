const inquirer = require('inquirer');
const { writeFile } = require('fs');

const questions = [
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
]

// Function: prompts inquirer questions to generate webpage.
function init() {
    inquirer.prompt(questions)
    .then((answer) => writeFile('index.html'))
    .then(() => console.log('Successfully wrote html'))
    .catch((err) => console.log(err));
}

// Call
init();