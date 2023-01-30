const inquirer = require("inquirer");
const engineer = require('./engineer');
const intern = require('./intern');
const manager = require('./manager');

class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName() {
        return this.name;
    };

    getID() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return 'employee';
    };
};

module.exports = employee;