//Let's define a function countUniqueChars(s) that returns the number of unique characters on s.
//For example, calling countUniqueChars(s) if s = "LEETCODE" then "L", "T", "C", "O", "D" are the unique characters since they appear only once in s, therefore countUniqueChars(s) = 5.
//Given a string s, return the sum of countUniqueChars(t) where t is a substring of s. The test cases are generated such that the answer fits in a 32-bit integer.
//Notice that some substrings can be repeated so in this case you have to count the repeated ones too.
// Input: s = "ABC"
// Output: 10
// Explanation: All possible substrings are: "A","B","C","AB","BC" and "ABC".
// Every substring is composed with only unique letters.
// Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10

//DP
var uniqueLetterString = function(s) {
    let contribute = new Array(26).fill(0);
    let lastPos = new Array(26).fill(0);
    let res = 0;
    let cur = 0;
    for(let i = 0; i < s.length; i++) {
        let charIdx = s[i].charCodeAt(0) - 65;
        cur = cur - contribute[charIdx];
        contribute[charIdx] = i - (lastPos[charIdx] - 1);
        cur = cur + contribute[charIdx];
        lastPos[charIdx] = i + 1;
        res = res + cur;
    }
    return res;
}
