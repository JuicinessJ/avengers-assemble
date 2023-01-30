const employee = require('./employee');

class manager extends employee {
    constructor(officeNumber) {
        super(name, id, email) 
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return 'Manager';
    };
};


module.exports = manager;