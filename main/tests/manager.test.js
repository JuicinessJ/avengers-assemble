const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe('Manager', () => {
    it('Return Office Number', () => {
        const example = 'A101';
        const test = new Manager('bob', 101, 'Bob@gmail.com', example);
        expect(test.getOfficeNumber()).toBe(example);
    })

    it('Returns Manager', () => {
        const example = 'Manager';
        const test = new Manager('bob', 101, 'Bob@gmail.com', 'A101', example);
        expect(test.getRole()).toBe(example);
    })
})