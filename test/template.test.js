const {
    doesWordContain5OrMoreLetters,
    reverseWord,
    ReverseBigWord,
    splitSentenceIntoWords,
    spinWords
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
    describe('Only words of 5 or more letters will be reversed', () => {
        it('Doei will be Doei ', () => {
            expect(ReverseBigWord('Doei')).toEqual('Doei');
        });
        it('Hallo will be ollaH', () => {
            expect(ReverseBigWord('Hallo')).toEqual('ollaH');            
        }); 
        it('Weekend will be dnekeeW', () => {
            expect(ReverseBigWord('Weekend')).toEqual('dnekeeW');            
        });
    });
    describe('Split a sentence into individual words', () => {
        it('"Hallo" contains one word: "Hallo"', () => {
            expect(splitSentenceIntoWords('Hallo')).toEqual(['Hallo']);
        });
        it('"Hallo doei" contains two words: "Hallo" and "doei"', () => {
            expect(splitSentenceIntoWords('Hallo doei')).toEqual(['Hallo', 'doei']);
        });
        it('"Hallo doei weekend" contains three words: "Hallo", "doei" and "weekend"', () => {
            expect(splitSentenceIntoWords('Hallo doei weekend')).toEqual(['Hallo', 'doei', 'weekend']);
        });
    });
    describe('We want to apply all the rules of the kata to a sentence', () => {
        it('"Hey fellow warriors" becomes "Hey wollef sroirraw"', () => {
            expect(spinWords("Hey fellow warriors")).toEqual("Hey wollef sroirraw");
        });
        it('"This is a test" becomes "This is a test"', () => {
            expect(spinWords("This is a test")).toEqual("This is a test");
        });
        it('"This is another test" becomes "This is rehtona test"', () => {
            expect(spinWords("This is another test")).toEqual("This is rehtona test");
        });
    });
});