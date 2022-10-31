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
function splitSentenceIntoWords(sentence) {
    let words = sentence.split(' ');
    return words;
}

function spinWords(sentence) {
    let words = splitSentenceIntoWords(sentence);
    let spinnedWords = [];

    for (let word of words) {
        spinnedWords.push(ReverseBigWord(word));
    }

    return spinnedWords.join(' ');
}

module.exports = {
    doesWordContain5OrMoreLetters,
    reverseWord,
    ReverseBigWord,
    splitSentenceIntoWords,
    spinWords
}