function doesWordContain5OrMoreLetters(word) {
    return word.length >= 5;
}

function reverseWord(word) {
    wordAsArray = word.split('');
    let reversedWordAsArray = wordAsArray.reverse();
    return reversedWordAsArray.join('');
}

module.exports = {
    doesWordContain5OrMoreLetters,
    reverseWord
}