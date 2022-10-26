const {
    doesWordContain5OrMoreLetters,
    reverseWord
} = require('../src/template');

describe(`This is a test suite for the Stop gninnipS My sdroW!-kata.
With this function we reverse all words consisting of 5 or more letters.\n`, () => {
    describe('Does a word contain 5 or more letters?', () => {
        it('Hallo contains 5 letters 😁', () => {
            expect(doesWordContain5OrMoreLetters('Hallo')).toBe(true);
        });
        it('Doei does not contain 5 letters 😥', () => {
            expect(doesWordContain5OrMoreLetters('Doei')).toBe(false);
        });
        it('A does not contain 5 letters 😥', () => {
            expect(doesWordContain5OrMoreLetters('A')).toBe(false);
        });
        it('Patagonia contains 5 letters 😁', () => {
            expect(doesWordContain5OrMoreLetters('Patagonia')).toBe(true);
        });
    });
    describe('We want to reverse a given word', () => {
        it('A reversed is still A', () => {
            expect(reverseWord('A')).toEqual('A');
        });
        it('Hello reversed is olleH', () => {
            expect(reverseWord('Hello')).toEqual('olleH');
        });
    });
});