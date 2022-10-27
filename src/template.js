function doesWordContain5OrMoreLetters(word) {
    return word.length >= 5;
}

function reverseWord(word) {
    wordAsArray = word.split('');
    let reversedWordAsArray = wordAsArray.reverse();
    return reversedWordAsArray.join('');
}

function ReverseBigWord(word) {
    if (doesWordContain5OrMoreLetters(word))
        return reverseWord(word); 
    else 
        return word
}

module.exports = {
    doesWordContain5OrMoreLetters,
    reverseWord,
    ReverseBigWord
}