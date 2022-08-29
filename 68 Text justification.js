// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left-justified, and no extra space is inserted between words.

// Note:

// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.
 
// Example 1:
// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

var fullJustify = function(words, maxWidth) {
  const n = words.length;
  const res = [];

  for (var i = 0; i < n; i = j) {
    // Step 1. Use j to find out where to cut the row (i ... j-1)
    let len = -1;
    for (var j = i; j < n && len + 1 + words[j].length <= maxWidth; j++) {
      len += 1 + words[j].length;
    }
      console.log(len) // 10, 15, 14

    // Step 2. Calculate how many spaces to add for each word
    let spaces = 1; // avg. spaces reserved for each word
    let extra = 0; // extra left spaces

    if (j !== i + 1 && j !== n) {
      spaces = (maxWidth - len) / (j - 1 - i) + 1;
      extra = (maxWidth - len) % (j - 1 - i);
    }
      console.log("space", spaces, extra)  // 4,0  1.5,1  1,0

    // Step 3. Build the row with spaces + extra space + word
    let row = words[i];
    for (let k = i + 1; k < j; k++, extra--) {
      row += ' '.repeat(spaces + (extra > 0 ? 1 : 0)) + words[k];
    }
    row += ' '.repeat(maxWidth - row.length);

    // Step 4. Push the row to final result
    res.push(row);
  }
  return res;
};
