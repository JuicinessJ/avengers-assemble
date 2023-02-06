const Employee = require('../lib/employee');

describe('employee', () => {
    it('Returning the name', () => {
        const example = 'Bob';
        const test = new Employee(example);
        expect(test.getName()).toBe(example);
    })

    it('Returning the ID', () => {
        const example = '101';
        const test = new Employee('bob', example);
        expect(test.getID()).toBe(example);
    })

    it('Returning the Email', () => {
        const example = 'Bob@gmail.com';
        const test = new Employee('bob', 101, example);
        expect(test.getEmail()).toBe(example);
    })

    it('Returning the role', () => {
        const example = 'employee';
        const test = new Employee('bob', 101, 'Bob@gmail.com');
        expect(test.getRole()).toBe(example);
    })
})

