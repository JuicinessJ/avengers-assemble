const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe('Intern', () => {
    it('Return School', () => {
        const example = 'MIT';
        const test = new Intern('bob', 101, 'Bob@gmail.com', example);
        expect(test.getSchool()).toBe(example);
    })

    it('Returns Intern', () => {
        const example = 'Intern';
        const test = new Intern('bob', 101, 'Bob@gmail.com', 'MIT', example);
        expect(test.getRole()).toBe(example);
    })
})