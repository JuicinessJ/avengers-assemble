const { default: inquirer } = require('inquirer');
const employee = require('./lib/employee');


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


//prompt for role to ask for role based questions afterwards, then it ask the universal questions.
inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: 'What is the role?',
        choices: ['Engineer', 'Intern', 'Manager']
    }])
    .catch((answer) => {
        switch(answer) {
            case 'Engineer':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is the Github?'
                    }
                ]);
                break;
            case 'Intern':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message: 'What is the school?'
                    }
                ]);
                break;
            case 'Manager':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: 'What is the office number?'
                    }
                ]);
                break;
        }
    })
    .then(inquirer.prompt(questions))
    .then((answer) => writeFile('',))


//prompt universal questions then ask for role to ask role based questions.
inquirer.prompt(questions)
.then((answer) => writeFile('',))
.then(inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: 'What is the role?',
        choices: ['Engineer', 'Intern', 'Manager']
    }]))
.catch((answer) => {
    switch(answer) {
        case 'Engineer':
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is the Github?'
                }
            ]);
            break;
        case 'Intern':
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is the school?'
                }
            ]);
            break;
        case 'Manager':
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is the office number?'
                }
            ]);
            break;
    }
})
.then((answer) => writeFile('',))


const employee = new employee();

employee.play();