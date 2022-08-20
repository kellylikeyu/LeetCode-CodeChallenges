// Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.
// A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.
// Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
// Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
// Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
// "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
// "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

//three method: dfs, trie, dp
var findAllConcatenatedWordsInADict = function (words) {
  //   dfs;
  //   const set = new Set(words);
  //   // with curWord, we have split `num` words before it
  //   const helper = (word, num = 0) => {
  //     if (!word) return num > 1;

  //     let tmp = "";
  //     for (let i = 0; i < word.length; i++) {
  //       // build tmp word by appending characters
  //       tmp += word[i];
  //       if (set.has(tmp)) {
  //         let sub = word.substr(i + 1);
  //         if (helper(sub, num + 1)) {
  //           return true;
  //         }
  //       }
  //     }
  //     return false;
  //   };
  //   const ans = [];
  //   words.forEach((w) => {
  //     if (helper(w)) {
  //       ans.push(w);
  //     }
  //   });
  //   return ans;

  //   trie;
  //   words.sort((a, b) => a.length - b.length);
  //   let root = {};
  //   let count = 0;
  //   let set = new Set();
  //   for (let i = 0; i < words.length; i++) {
  //     let node = root;
  //     let j = 0;
  //     let end = 0;
  //     for (; j < words[i].length; j++) {
  //       let char = words[i][j];
  //       node[char] = node[char] || {};
  //       node = node[char];
  //       if (node.end && j == words[i].length - 1) set.add(words[i]);
  //       else if (node.end && findIfConcatenated(words[i].slice(j + 1))) {
  //         set.add(words[i]);
  //         break;
  //       }
  //     }
  //     node.end = 1;
  //   }
  //   return Array.from(set);
  //   function findIfConcatenated(word) {
  //     let node = root;
  //     if (set.has(word)) return 1;
  //     for (let i = 0; i < word.length; i++) {
  //       let char = word[i];
  //       node[char] = node[char] || {};
  //       node = node[char];
  //       if (node.end && i == word.length - 1) return 1;
  //       if (node.end && findIfConcatenated(word.slice(i + 1))) return 1;
  //     }
  //     return 0;
  //   }

  //dp
  let visited = new Set(),
    wordDict = new Set(words);
  //return _.filter(words, (word) => wordBreak(word, wordDict, 0, visited))
  return words.filter((word) => wordBreak(word, wordDict, 0, visited));
};
function wordBreak(s, wordDict, start, visited) {
  let suffix = s.slice(start);
  if (visited.has(suffix)) return false;
  if (start === s.length)
    return s.length > 0; /* empty string will return false */

  for (let end = start; end < s.length; end++) {
    let word = s.slice(start, end + 1);
    if (wordDict.has(word) && wordBreak(s, wordDict, end + 1, visited)) {
      /* in the case only the word itself in the dictionary can break itself, return false */
      return start === 0 && end === s.length - 1 ? false : true;
    }
  }
  visited.add(suffix);
  return false;
}
