import add from '../../src/add';

describe('Add', () => {
    it('2 + 2 should equal 4', () => {
        expect(add(2,2)).toBe(4);
    })
})