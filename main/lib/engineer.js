const { default: inquirer } = require('inquirer');
const employee = require('./employee');

class engineer extends employee {
    constructor(github) {
        super(name, id, email) // fill in engineer name and email somehow, inquirer or html?
        this.github = github;
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return "Engineer";
    };
};

module.exports = engineer;