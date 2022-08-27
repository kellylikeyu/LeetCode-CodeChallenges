// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

var countCharacters = function(words, chars) {
    let result = "";
    let charCount = {};
    for (let char of chars) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
   
    for (let word of words) {
        let copy = {...charCount}
        let count = 0;
        for (let letter of word) {
            if (copy[letter] !== 0 && copy[letter] !== undefined) {
                copy[letter] --;
                count ++;
            }
        }
        if (count === word.length) result += word;
    }
    return result.length;
};
