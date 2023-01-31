const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const { writeFile, write } = require('fs');
const generateHTML = require('./src/generateHTML');

const employee = [];

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email?'
    },
];


function reRun() {
inquirer.prompt([
    {
        type: 'list',
        name: 'toDo',
        message: 'What would you like to do?',
        choices: ['Add a Engineer', 'Add a Intern', 'Add a Manager', 'Create the file']
    }])
    .then((answer) => {
        switch(answer.toDo) {
            case 'Add a Engineer':
                console.log('hello')
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'What is the name?'
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the ID?'
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is the email?'
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is the Github?'
                    }
                ])
                .then((answer) => {
                    let engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
                    employee.push(engineer);
                })
                reRun();
                break;
            case 'Add a Intern':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'What is the name?'
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the ID?'
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is the email?'
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: 'What is the school?'
                    }
                ])
                .then((answer) => {
                    let intern = new Intern(answer.name, answer.id, answer.email, answer.school);
                    employee.push(intern);
                })
                reRun();
                break;
            case 'Add a Manager':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'What is the name?'
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the ID?'
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is the email?'
                    },
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: 'What is the office number?'
                    }
                ])
                .then((answer) => {
                    let manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
                    employee.push(manager);
                })
                reRun();
                break;
            default:
                writeFile('index.html', generateHTML(answer))
        }
    })
}