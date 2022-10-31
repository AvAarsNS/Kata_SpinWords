# Kata Kata_SpinWords

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

## E2E
Hey fellow warriors -> Hey wollef sroirraw 😊
This is a test -> This is a test 😊
This is another test -> This is rehtona test 😊

## Atomic behaviours
### Does a word contain 5 or more letters?
- "Hallo" -> yes 😊
- "Doei" -> no 😊
- "A" -> no 😊
- "Patagonia" -> yes 😊

### Reverse a word
- "A" -> "A" 😊
- "Hallo" -> "ollaH" 😊

### Reverse a word with 5 or more letters
- "Doei" -> "Doei" 😊
- "Hallo" -> "ollaH" 😊
- "Weekend" -> "dnekeeW" 😊

### Split a sentence into individual words
- "Hallo" -> ["Hallo"] 😊
- "Hallo doei" -> ["Hallo", "doei"] 😊
- "Hallo doei weekend" -> ["Hallo", "doei", "weekend"] 😊

## Guards
- Input contains only letters and spaces
- A word does not include the space