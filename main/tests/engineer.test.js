const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('Return GitHub', () => {
        const example = 'ASkaskafaf';
        const test = new Engineer('bob', 101, 'Bob@gmail.com', example);
        expect(test.getGithub()).toBe(example);
    })

    it('Returns Engineer', () => {
        const example = 'Engineer';
        const test = new Engineer('bob', 101, 'Bob@gmail.com', 'ASkaskafaf', example);
        expect(test.getRole()).toBe(example);
    })
})